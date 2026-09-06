const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const languageNames = { en:"English",hi:"Hindi",bn:"Bengali",ta:"Tamil",te:"Telugu",mr:"Marathi",gu:"Gujarati",kn:"Kannada",ml:"Malayalam",pa:"Punjabi",ur:"Urdu",or:"Odia",as:"Assamese",sa:"Sanskrit",ks:"Kashmiri",ne:"Nepali",sd:"Sindhi",kok:"Konkani",mni:"Manipuri",brx:"Bodo",doi:"Dogri",sat:"Santali" };
module.exports = async function handler(req,res){
  res.setHeader("Cache-Control","no-store");
  if(req.method!=="POST") return res.status(405).json({error:"method_not_allowed"});
  if(!process.env.GROQ_API_KEY) return res.status(503).json({error:"assistant_not_configured"});
  const language=languageNames[req.body?.language]||"English";
  const messages=Array.isArray(req.body?.messages)?req.body.messages.slice(-8).filter(x=>["user","assistant"].includes(x?.role)&&typeof x?.content==="string").map(x=>({role:x.role,content:x.content.slice(0,1000)})):[];
  if(!messages.length||messages.at(-1).role!=="user") return res.status(400).json({error:"question_required"});
  try{
    const upstream=await fetch(GROQ_URL,{method:"POST",headers:{Authorization:`Bearer ${process.env.GROQ_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({model:"openai/gpt-oss-20b",temperature:0.2,max_completion_tokens:600,messages:[{role:"system",content:`You are RTI Saathi, a careful Indian Right to Information preparation assistant. Reply only in ${language}, using plain language and at most 170 words. Help users identify whether a matter is Central, State, or local; turn grievances into requests for existing records; suggest a clear record, place, and date range. Never invent an authority, deadline, law, filing status, or official outcome. State uncertainty and point to the official portal where appropriate. You are not the Government of India and do not provide legal advice.`},...messages]})});
    if(!upstream.ok) return res.status(upstream.status===429?429:502).json({error:upstream.status===429?"rate_limited":"assistant_unavailable"});
    const data=await upstream.json(), answer=data.choices?.[0]?.message?.content?.trim();
    if(!answer) return res.status(502).json({error:"empty_answer"});
    return res.status(200).json({answer,language:req.body.language,privacy:"processed-without-storage"});
  }catch{return res.status(502).json({error:"assistant_unavailable"});}
};
