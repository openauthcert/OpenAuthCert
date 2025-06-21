import Ajv from "ajv";
import { getBadgeSchema } from "./getLiveSchema.js";

export async function validateBadgeJson(badgeData: any) {
  const schema = await getBadgeSchema();
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const valid = validate(badgeData);

  if (!valid) {
    const errorList = (validate.errors || [])
      .map((err) => `${err.instancePath} ${err.message}`)
      .join("; ");
    throw new Error(`Badge JSON validation failed: ${errorList}`);
  }

  // Ensure the badge JSON includes critical fields used by the server.
  const data: any = badgeData;
  const missing: string[] = [];
  if (!data.version) {
    missing.push("version");
  }
  if (!data.docs_url) {
    missing.push("docs_url");
  }
  if (!Array.isArray(data.auth_protocols)) {
    missing.push("auth_protocols");
  }

  if (missing.length > 0) {
    throw new Error(
      `Badge JSON missing required fields: ${missing.join(", ")}`
    );
  }

  // TODO: enforce issuance only for the explicitly stated version once
  // badge signing/publishing flow is implemented.
}
