import axios from "axios";
import config from "../config.js";

export async function fetchBadgeMetadata(id: string) {
  const url = `${config.badgeSpecExamplesURL}${id}.json`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw new Error(`Failed to fetch badge JSON: ${url}`);
  }
}
