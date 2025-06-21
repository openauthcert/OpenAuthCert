// src/server.ts

import express from "express";
import badgeRoute from "./routes/badge.js";
import badgeJsonRoute from "./routes/badgeJson.js";
import config from "./config.js";
import openapiRoute from "./routes/openapi.js";

const app = express();
const port = config.port || 3000;

app.get("/health", (_req, res) => {
  res.send("OK");
});

// Basic uptime/status endpoint
app.get("/status", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/openapi.yaml", openapiRoute);
app.use("/badge", badgeRoute);
app.use("/badge.json", badgeJsonRoute);

app.listen(port, () => {
  console.log(`✅ Badge server running on http://localhost:${port}`);
});
