import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const authorities = require("../api/authorities.js");
const analyze = require("../api/analyze.js");
const demoStatus = require("../api/demo-status.js");
const health = require("../api/health.js");
const chat = require("../api/chat.js");
const transcribe = require("../api/transcribe.js");

function invoke(handler, { method = "GET", query = {}, body = {} } = {}) {
  return new Promise((resolve, reject) => {
    const response = {
      headers: {},
      setHeader(key, value) { this.headers[key] = value; },
      status(code) { this.statusCode = code; return this; },
      json(payload) { resolve({ status: this.statusCode, payload, headers: this.headers }); },
    };
    try { handler({ method, query, body }, response); } catch (error) { reject(error); }
  });
}

const healthResult = await invoke(health);
if (healthResult.status !== 200 || !healthResult.payload.ok || healthResult.payload.privacy !== "no-request-storage") throw new Error("Health privacy contract failed");

const matchResult = await invoke(authorities, { query: { q: "train station", level: "central" } });
if (matchResult.status !== 200 || !matchResult.payload.matches.some((item) => item.name === "Ministry of Railways")) throw new Error("Authority routing failed");

const stateResult = await invoke(authorities, { query: { q: "Kerala", level: "state" } });
if (!stateResult.payload.matches.includes("Kerala") || !stateResult.payload.officialDirectory.includes("dopt.gov.in")) throw new Error("State directory routing failed");

const qualityResult = await invoke(analyze, { method: "POST", body: { text: "Please provide certified copies of the road repair sanction order and amount spent in Rampur village from April 2024 to March 2025." } });
if (qualityResult.status !== 200 || qualityResult.payload.score < 80 || qualityResult.payload.privacy !== "processed-without-storage") throw new Error("Request analysis failed");

const statusResult = await invoke(demoStatus, { query: { reference: "RTI-DEMO-2026-ABC123" } });
if (statusResult.status !== 200 || statusResult.payload.governmentSubmission !== false) throw new Error("Demo status boundary failed");

const noKeyChat = await invoke(chat, { method: "POST", body: { language: "ta", messages: [{ role: "user", content: "எந்த துறை?" }] } });
if (noKeyChat.status !== 503 || noKeyChat.payload.error !== "assistant_not_configured") throw new Error("Chat secret boundary failed");
const noKeyVoice = await invoke(transcribe, { method: "POST", body: { audio: "data:audio/webm;base64,AA==" } });
if (noKeyVoice.status !== 503) throw new Error("Voice secret boundary failed");

const previousKey = process.env.GROQ_API_KEY, previousFetch = globalThis.fetch;
process.env.GROQ_API_KEY = "test-only";
globalThis.fetch = async (url, options) => {
  if (String(url).includes("chat/completions")) {
    const payload = JSON.parse(options.body);
    if (payload.model !== "openai/gpt-oss-20b" || !payload.messages[0].content.includes("Tamil")) throw new Error("Chat multilingual contract failed");
    return { ok: true, json: async () => ({ choices: [{ message: { content: "தமிழில் சுருக்கமான பதில்" } }] }) };
  }
  if (!String(url).includes("audio/transcriptions") || !(options.body instanceof FormData)) throw new Error("Whisper request contract failed");
  return { ok: true, json: async () => ({ text: "வட்டாட்சியர் அலுவலக பதிவு" }) };
};
const chatResult = await invoke(chat, { method: "POST", body: { language: "ta", messages: [{ role: "user", content: "எந்த துறை?" }] } });
if (chatResult.status !== 200 || !chatResult.payload.answer.includes("தமிழில்") || chatResult.payload.privacy !== "processed-without-storage") throw new Error("Chat response contract failed");
const voiceResult = await invoke(transcribe, { method: "POST", body: { language: "ta", mimeType: "audio/webm", audio: "data:audio/webm;base64,AA==" } });
if (voiceResult.status !== 200 || !voiceResult.payload.text.includes("அலுவலக")) throw new Error("Voice response contract failed");
globalThis.fetch = previousFetch;
if (previousKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = previousKey;

console.log("API smoke passed: health/privacy, authority matching, State routing, request analysis, Groq chat/Whisper contracts, secret boundary, and demo-status boundary.");
