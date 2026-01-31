const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const generateProjectImage = (project: Project) => {
  const title = escapeXml(project.title.toUpperCase());
  const category = escapeXml(project.category || "PROJECT");
  const stack = escapeXml(project.stack.slice(0, 5).join(" | "));

  const svg = `
<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#020817"/>
    </linearGradient>

    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>

    <filter id="soft">
      <feDropShadow dx="0" dy="16" stdDeviation="32" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)" />

  <rect
    x="60"
    y="60"
    width="1080"
    height="510"
    rx="28"
    fill="#020617"
    filter="url(#soft)"
  />

  <rect x="60" y="60" width="1080" height="6" fill="url(#accent)" />

  <text
    x="50%"
    y="180"
    fill="#67e8f9"
    font-size="26"
    font-weight="600"
    letter-spacing="2"
    font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    text-anchor="middle"
>
    ${category}
</text>

  <text
    x="50%"
    y="260"
    fill="#f8fafc"
    font-size="64"
    font-weight="700"
    font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      text-anchor="middle"
  >
    ${title}
  </text>

  <text
    x="120"
    y="340"
    fill="#cbd5f5"
    font-size="30"
    font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  >
    ${stack}
  </text>

  <text
    x="120"
    y="430"
    fill="#94a3b8"
    font-size="22"
    font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  >
    Built for modern web &amp; mobile platforms
  </text>
</svg>
`;

  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
};
