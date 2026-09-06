module.exports = function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ ok: true, service: "rti-saathi-helper", privacy: "no-request-storage", aiConfigured: Boolean(process.env.GROQ_API_KEY), version: 2 });
};
