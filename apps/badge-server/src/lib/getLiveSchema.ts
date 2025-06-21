import axios from "axios";
import badgeSchemaLocal from "../../badge-schema.json" assert { type: "json" };

const SCHEMA_URL =
  "https://raw.githubusercontent.com/openauthcert/badge-spec/main/schema/badge-schema.json";

let cachedSchema: any = null;

export async function getBadgeSchema(): Promise<any> {
  if (cachedSchema) return cachedSchema;

  try {
    const res = await axios.get(SCHEMA_URL, { timeout: 3000 });
    cachedSchema = res.data;
    return cachedSchema;
  } catch (err) {
    console.warn("⚠️ Failed to fetch live badge schema, using fallback.");
    return badgeSchemaLocal;
  }
}
