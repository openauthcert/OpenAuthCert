import revokedList from "../../revoked.json" assert { type: "json" };

export function isBadgeRevoked(badge: any): boolean {
  const id = badge.badge;
  const project = (badge.project_name || "").toLowerCase().replace(/\s+/g, "-");

  const fullKey = `${id}--${project}`;
  return revokedList.includes(id) || revokedList.includes(fullKey);
}

// TODO: Automatically revoke older badges when a vendor publishes a new
// major version without completing recertification.
