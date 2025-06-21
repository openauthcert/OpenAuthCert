import axios from "axios";

const VENDOR_REGISTRY_API =
  "https://raw.githubusercontent.com/openauthcert/vendor-registry/main/vendors/";

export async function findBadgeByProjectURL(inputUrl: string): Promise<any> {
  const url = inputUrl.trim().toLowerCase();

  try {
    const listRes = await axios.get(
      "https://api.github.com/repos/openauthcert/vendor-registry/contents/vendors"
    );

    const entries = listRes.data.filter((f: any) =>
      f.name.endsWith(".json")
    );

    for (const entry of entries) {
      const file = await axios.get(entry.download_url);
      const vendor = file.data;

      const match = [vendor.website, vendor.repo].some((field) =>
        typeof field === "string" && field.toLowerCase().includes(url)
      );

      if (match && vendor.badges && vendor.badges.length > 0) {
        return {
          ...vendor.badges[0],
          project_name: vendor.name,
          project_url: vendor.website,
        };
      }
    }

    throw new Error("No matching vendor found.");
  } catch (err) {
    throw new Error("Unable to match URL to vendor registry.");
  }
}
