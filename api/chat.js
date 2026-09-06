const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const languageNames = { en:"English",hi:"Hindi",bn:"Bengali",ta:"Tamil",te:"Telugu",mr:"Marathi",gu:"Gujarati",kn:"Kannada",ml:"Malayalam",pa:"Punjabi",ur:"Urdu",or:"Odia",as:"Assamese",sa:"Sanskrit",ks:"Kashmiri",ne:"Nepali",sd:"Sindhi",kok:"Konkani",mni:"Manipuri",brx:"Bodo",doi:"Dogri",sat:"Santali" };
const scriptChecks = { en:/[A-Za-z]/,hi:/[\u0900-\u097F]/,mr:/[\u0900-\u097F]/,sa:/[\u0900-\u097F]/,ne:/[\u0900-\u097F]/,kok:/[\u0900-\u097F]/,brx:/[\u0900-\u097F]/,doi:/[\u0900-\u097F]/,bn:/[\u0980-\u09FF]/,as:/[\u0980-\u09FF]/,mni:/[\u0980-\u09FF]/,ta:/[\u0B80-\u0BFF]/,te:/[\u0C00-\u0C7F]/,gu:/[\u0A80-\u0AFF]/,kn:/[\u0C80-\u0CFF]/,ml:/[\u0D00-\u0D7F]/,pa:/[\u0A00-\u0A7F]/,ur:/[\u0600-\u06FF]/,ks:/[\u0600-\u06FF]/,sd:/[\u0600-\u06FF]/,or:/[\u0B00-\u0B7F]/,sat:/[\u1C50-\u1C7F]/ };
module.exports = async function handler(req,res){
  res.setHeader("Cache-Control","no-store");
  if(req.method!=="POST") return res.status(405).json({error:"method_not_allowed"});
  if(!process.env.GROQ_API_KEY) return res.status(503).json({error:"assistant_not_configured"});
  const language=languageNames[req.body?.language]||"English";
  const messages=Array.isArray(req.body?.messages)?req.body.messages.slice(-8).filter(x=>["user","assistant"].includes(x?.role)&&typeof x?.content==="string").map(x=>({role:x.role,content:x.content.slice(0,1000)})):[];
  if(!messages.length||messages.at(-1).role!=="user") return res.status(400).json({error:"question_required"});
  try{
    const system=`You are RTI Saathi, a careful Indian Right to Information preparation assistant. The citizen explicitly selected ${language} (${req.body.language}). Reply entirely in that language and its native script; do not switch languages unless the citizen asks. This answer will be spoken aloud: use short natural sentences, no Markdown, no URLs, and at most 110 words. Answer the citizen's exact latest question first. Help identify whether a matter is Central, State, or local; turn grievances into requests for existing records; suggest a clear record, place, and date range. Never invent an authority, deadline, law, filing status, or official outcome. State uncertainty and mention the official portal where appropriate. You are not the Government of India and do not provide legal advice.`;
    const callGroq=(promptMessages)=>fetch(GROQ_URL,{method:"POST",headers:{Authorization:`Bearer ${process.env.GROQ_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({model:"openai/gpt-oss-20b",temperature:0.1,max_completion_tokens:600,messages:promptMessages})});
    let upstream=await callGroq([{role:"system",content:system},...messages]);
    if(!upstream.ok) return res.status(upstream.status===429?429:502).json({error:upstream.status===429?"rate_limited":"assistant_unavailable"});
    let data=await upstream.json(), answer=data.choices?.[0]?.message?.content?.trim();
    const script=scriptChecks[req.body.language];
    if(answer && script && !script.test(answer)) {
      upstream=await callGroq([{role:"system",content:system},{role:"user",content:`Rewrite the following answer entirely in ${language} native script. Return only the corrected answer:\n${answer}`}]);
      if(upstream.ok){ data=await upstream.json(); answer=data.choices?.[0]?.message?.content?.trim(); }
    }
    if(!answer) return res.status(502).json({error:"empty_answer"});
    return res.status(200).json({answer,language:req.body.language,privacy:"processed-without-storage"});
  }catch{return res.status(502).json({error:"assistant_unavailable"});}
};
