// src/routes/badgeJson.ts

import express from "express";
import { fetchBadgeMetadata } from "../lib/fetchBadgeMetadata.js";
import { validateBadgeJson } from "../lib/validateBadgeJson.js";
import { isBadgeRevoked } from "../lib/isRevoked.js";
import { findBadgeByProjectURL } from "../lib/findVendorBadgeByUrl.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { id, url } = req.query;

  if (!id && !url) {
    return res.status(400).json({ error: "Missing ?id= or ?url= parameter" });
  }

  try {
    const badgeId = id
      ? id.toString()
      : (await findBadgeByProjectURL(url!.toString())).id;

    const badge = await fetchBadgeMetadata(badgeId);
    await validateBadgeJson(badge);

    const revoked = isBadgeRevoked(badge);
    res.json({ ...badge, revoked });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
});

export default router;
