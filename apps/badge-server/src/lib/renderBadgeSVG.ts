// src/lib/renderBadgeSVG.ts

export function renderBadgeSVG(badge: any, revoked = false): string {
  const label = badge.project_name || "Project";
  const badgeTitle = badge.badge || "certified";
  const version = badge.version || "";
  const fullText = `${badgeTitle} ${version}`.trim();

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="280" height="40" role="img" aria-label="${label}: ${fullText}">
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <mask id="m"><rect width="280" height="40" rx="6" fill="#fff"/></mask>
  <g mask="url(#m)">
    <rect width="110" height="40" fill="#555"/>
    <rect x="110" width="170" height="40" fill="${revoked ? '#d9534f' : '#007ec6'}"/>
    <rect width="280" height="40" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="16">
    <text x="55" y="26">${label}</text>
    <text x="195" y="26">${revoked ? '⚠️ REVOKED' : fullText}</text>
  </g>
</svg>
`.trim();
}
