import fs from "node:fs";
import { JSDOM } from "jsdom";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const js = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const dom = new JSDOM(html, {
  url: "https://rti-saathi.test/",
  runScripts: "dangerously",
  pretendToBeVisual: true,
});
const { window } = dom;
window.HTMLElement.prototype.scrollIntoView = () => {};
window.eval(js);
const $ = (selector) => window.document.querySelector(selector);
const $$ = (selector) => [...window.document.querySelectorAll(selector)];
const click = (selector) =>
  $(selector).dispatchEvent(new window.MouseEvent("click", { bubbles: true }));

if ($("#languageGate").hidden)
  throw new Error("First-visit language gate did not open");
click('[data-lang="hi"]');
if (!$("#languageGate").hidden || !$("#languageSelect").value.includes("hi"))
  throw new Error("Native-script language onboarding failed");
click('[data-action="start"]');
if ($("#requestModal").hidden) throw new Error("Request modal did not open");
$('[name="level"][value="state"]').checked = true;
click("#nextButton");
if ($("#stateNotice").hidden)
  throw new Error("State portal warning did not appear");
$('[name="level"][value="central"]').checked = true;
click("#nextButton");
if (
  !$('.form-step[data-step="1"]').hidden ||
  $('.form-step[data-step="2"]').hidden
)
  throw new Error("Step 2 navigation failed");
$("#topic").value = "Education";
$("#authority").value = "Ministry of Education";
click("#nextButton");
$("#question").value =
  "Please provide the district-wise number of sanctioned teacher posts for 2024–25.";
$("#question").dispatchEvent(new window.Event("input", { bubbles: true }));
click("#promptButton");
if ($("#promptResult").hidden)
  throw new Error("Writing guidance did not appear");
await Promise.resolve();
await Promise.resolve();
if (
  $("#qualityMeter").hidden ||
  !$("#qualityScore").textContent.includes("/100")
)
  throw new Error("Request quality feedback did not appear");
click("#nextButton");
if ($("#reviewList").children.length !== 4)
  throw new Error("Review summary is incomplete");
$(".check-row input").checked = true;
$("#requestForm").dispatchEvent(
  new window.Event("submit", { bubbles: true, cancelable: true }),
);
if (
  $("#successState").hidden ||
  !$("#demoReference").textContent.startsWith("RTI-DEMO-")
)
  throw new Error("Demo completion failed");
if (!window.localStorage.getItem("rti-saathi-cases"))
  throw new Error("On-device case history was not saved");
click('[data-action="cases"]');
if (
  $("#casesModal").hidden ||
  !$("#caseList").textContent.includes("RTI-DEMO-")
)
  throw new Error("Case workspace did not render");
click('[data-action="close-cases"]');
click('[data-action="state-directory"]');
if ($("#stateModal").hidden || $("#stateSelect").options.length < 30)
  throw new Error("State directory did not open");
click('[data-action="close-state"]');

$("#languageSelect").value = "hi";
$("#languageSelect").dispatchEvent(
  new window.Event("change", { bubbles: true }),
);
if (!$('[data-i18n="heroLine1"]').textContent.includes("आपका"))
  throw new Error("Language switch failed");
const scheduledLanguages = [
  "hi",
  "bn",
  "ta",
  "te",
  "mr",
  "gu",
  "kn",
  "ml",
  "pa",
  "ur",
  "or",
  "as",
  "sa",
  "ks",
  "ne",
  "sd",
  "kok",
  "mni",
  "brx",
  "doi",
  "sat",
];
for (const lang of scheduledLanguages) {
  $("#languageSelect").value = lang;
  $("#languageSelect").dispatchEvent(
    new window.Event("change", { bubbles: true }),
  );
  const hero = $('[data-i18n="heroLine1"]').textContent.trim();
  const start = $('[data-i18n="start"]').textContent.trim();
  const track = $('[data-i18n="track"]').textContent.trim();
  if (
    window.document.documentElement.lang !== lang ||
    hero === "Your question." ||
    start === "File an RTI request" ||
    track === "Track request"
  ) {
    throw new Error(`Essential translation coverage failed for ${lang}`);
  }
}
for (const rtl of ["ur", "ks", "sd"]) {
  $("#languageSelect").value = rtl;
  $("#languageSelect").dispatchEvent(
    new window.Event("change", { bubbles: true }),
  );
  if (window.document.documentElement.dir !== "rtl")
    throw new Error(`RTL direction failed for ${rtl}`);
}
$("#languageSelect").value = "en";
$("#languageSelect").dispatchEvent(new window.Event("change", { bubbles: true }));
if ($('[data-action="track"] [data-i18n="track"]').textContent.trim() !== "Track request")
  throw new Error("English tracking action was overridden by workspace copy");
if ($("#liteToggle")) throw new Error("Manual Lite control should not exist");

if (!$("#saathiLauncher") || !$("#saathiAssistant") || !$("#saathiMic"))
  throw new Error("Multilingual voice assistant controls are missing");
click("#saathiLauncher");
if ($("#saathiAssistant").hidden || $("#saathiLauncher").getAttribute("aria-expanded") !== "true")
  throw new Error("Assistant did not open accessibly");
$("#saathiInput").value = "Which authority handles village road records?";
$("#saathiForm").dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));
await new Promise((resolve) => setTimeout(resolve, 0));
if ($$(".saathi-message--user").length !== 1 || $$(".saathi-message--assistant").length < 2)
  throw new Error("Assistant offline fallback did not answer");
click("#saathiClose");
if (!$("#saathiAssistant").hidden) throw new Error("Assistant did not close");

console.log(
  "Smoke test passed: all 22 language essentials, RTL direction, onboarding, routing, four-step form, voice assistant shell, offline chat fallback, review, confirmation, and automatic low-data architecture.",
);
