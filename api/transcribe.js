const whisperLanguages = new Set(["en","hi","bn","ta","te","mr","gu","kn","ml","pa","ur","or","as","sa","ne","sd"]);
module.exports = async function handler(req,res){
  res.setHeader("Cache-Control","no-store");
  if(req.method!=="POST") return res.status(405).json({error:"method_not_allowed"});
  if(!process.env.GROQ_API_KEY) return res.status(503).json({error:"assistant_not_configured"});
  const audio=req.body?.audio, mimeType=String(req.body?.mimeType||"audio/webm").slice(0,80);
  if(typeof audio!=="string"||!audio.includes(",")) return res.status(400).json({error:"audio_required"});
  const encoded=audio.slice(audio.indexOf(",")+1);
  if(encoded.length>2_700_000) return res.status(413).json({error:"audio_too_large"});
  try{
    const form=new FormData(); form.append("file",new Blob([Buffer.from(encoded,"base64")],{type:mimeType}),"question.webm"); form.append("model","whisper-large-v3-turbo"); form.append("response_format","json");
    if(whisperLanguages.has(req.body?.language)) form.append("language",req.body.language);
    const upstream=await fetch("https://api.groq.com/openai/v1/audio/transcriptions",{method:"POST",headers:{Authorization:`Bearer ${process.env.GROQ_API_KEY}`},body:form});
    if(!upstream.ok) return res.status(upstream.status===429?429:502).json({error:upstream.status===429?"rate_limited":"transcription_unavailable"});
    const data=await upstream.json(); if(!data.text?.trim()) return res.status(422).json({error:"speech_not_understood"});
    return res.status(200).json({text:data.text.trim().slice(0,1000),privacy:"processed-without-storage"});
  }catch{return res.status(502).json({error:"transcription_unavailable"});}
};
