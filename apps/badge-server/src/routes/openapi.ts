// src/routes/openapi.ts

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();

// Resolve current directory in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the OpenAPI YAML file from the DOCS folder
const openapiPath = path.resolve(__dirname, "../../docs/openapi.yaml");

router.get("/", (_req, res) => {
  res.sendFile(openapiPath, {
    headers: { "Content-Type": "application/yaml" },
  });
});

export default router;
