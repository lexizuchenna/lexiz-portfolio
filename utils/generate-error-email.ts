type GenerateErrorEmailProps = {
  // ========================
  // Error Information
  // ========================
  errorMessage: string;
  stackTrace?: string;
  errorName?: string;
  isFatal?: boolean;
  additionalInfo?: string;

  // ========================
  // User Information
  // ========================
  userId?: string;
  name?: string;
  email?: string;
  tenantId?: string;

  // ========================
  // App Information
  // ========================
  appName: string;
  appVersion: string;
  buildNumber?: string;
  releaseChannel?: string;
  environment?: string;

  // ========================
  // Device Information
  // ========================
  platform: string;
  manufacturer?: string;
  brand?: string;
  model?: string;
  deviceName?: string;
  osName?: string;
  osVersion?: string;
  apiLevel?: number;
  deviceType?: string;
  isPhysicalDevice?: boolean;

  // ========================
  // Runtime
  // ========================
  jsEngine?: string;
  memoryUsage?: string;
  freeStorage?: string;
  locale?: string;
  timezone?: string;

  // ========================
  // Network
  // ========================
  networkType?: string;
  isConnected?: boolean;

  // ========================
  // Navigation
  // ========================
  currentScreen?: string;
  previousScreen?: string;

  // ========================
  // Time
  // ========================
  timestamp: string;
};

const row = (label: string, value?: string | number | boolean | null) => `
<tr>
  <td
    style="
      padding:10px 14px;
      background:#f8fafc;
      border:1px solid #e5e7eb;
      font-weight:600;
      width:220px;
    "
  >
    ${label}
  </td>

  <td
    style="
      padding:10px 14px;
      border:1px solid #e5e7eb;
      color:#374151;
      word-break:break-word;
    "
  >
    ${
      value === undefined || value === null || value === ""
        ? "-"
        : String(value)
    }
  </td>
</tr>
`;

export default function generateErrorEmail(data: GenerateErrorEmailProps) {
  const severityColor = data.isFatal ? "#dc2626" : "#d97706";
  const severityText = data.isFatal ? "🔥 Fatal Crash" : "⚠️ Error Report";

  return `
<!DOCTYPE html>

<html>

<head>
<meta charset="UTF-8">

<title>Error Report</title>

<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
/>

</head>

<body
style="
margin:0;
padding:30px;
background:#f3f4f6;
font-family:Arial,Helvetica,sans-serif;
color:#111827;
"
>

<table
align="center"
width="900"
cellpadding="0"
cellspacing="0"
style="
background:#ffffff;
border-radius:10px;
overflow:hidden;
border:1px solid #e5e7eb;
"
>

<tr>

<td
style="
background:${severityColor};
padding:28px;
color:white;
"
>

<h1
style="
margin:0;
font-size:28px;
"
>

${severityText}

</h1>

<p
style="
margin-top:10px;
font-size:15px;
opacity:.95;
"
>

A production error has been reported.

</p>

</td>

</tr>

<tr>

<td style="padding:30px;">

<h2>📌 Error Details</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
margin-bottom:35px;
"
>

${row("Error Name", data.errorName)}
${row("Error Message", data.errorMessage)}
${row("Fatal Error", data.isFatal)}
${row("Timestamp", data.timestamp)}

</table>

${
  data.stackTrace
    ? `
<h3>Stack Trace</h3>

<pre
style="
background:#111827;
color:#f9fafb;
padding:18px;
border-radius:8px;
font-size:12px;
overflow:auto;
white-space:pre-wrap;
word-break:break-word;
"
>${data.stackTrace}</pre>
`
    : ""
}

${
  data.additionalInfo
    ? `
<h3>Additional Information</h3>

<div
style="
padding:16px;
background:#f9fafb;
border:1px solid #e5e7eb;
border-radius:6px;
white-space:pre-wrap;
"
>

${data.additionalInfo}

</div>
`
    : ""
}

<hr style="margin:40px 0;border:none;border-top:1px solid #e5e7eb;">

<h2>👤 User Information</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
margin-bottom:35px;
"
>

${row("Name", data.name)}
${row("Email", data.email)}
${row("User ID", data.userId)}
${row("Tenant ID", data.tenantId)}

</table>

<hr style="margin:40px 0;border:none;border-top:1px solid #e5e7eb;">

<h2>📱 Application Information</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
margin-bottom:35px;
"
>

${row("Application", data.appName)}
${row("Version", data.appVersion)}
${row("Build Number", data.buildNumber)}
${row("Environment", data.environment)}
${row("Release Channel", data.releaseChannel)}

</table>

<hr style="margin:40px 0;border:none;border-top:1px solid #e5e7eb;">

<h2>📱 Device Information</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
margin-bottom:35px;
"
>

${row("Platform", data.platform)}
${row("Manufacturer", data.manufacturer)}
${row("Brand", data.brand)}
${row("Model", data.model)}
${row("Device Name", data.deviceName)}
${row("OS", data.osName)}
${row("OS Version", data.osVersion)}
${row("API Level", data.apiLevel)}
${row("Device Type", data.deviceType)}
${row("Physical Device", data.isPhysicalDevice)}

</table>

<hr style="margin:40px 0;border:none;border-top:1px solid #e5e7eb;">

<h2>⚙ Runtime Information</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
margin-bottom:35px;
"
>

${row("JavaScript Engine", data.jsEngine)}
${row("Memory Usage", data.memoryUsage)}
${row("Free Storage", data.freeStorage)}
${row("Locale", data.locale)}
${row("Timezone", data.timezone)}

</table>

<hr style="margin:40px 0;border:none;border-top:1px solid #e5e7eb;">

<h2>🌐 Network Information</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
margin-bottom:35px;
"
>

${row("Network Type", data.networkType)}
${row("Connected", data.isConnected)}

</table>

<hr style="margin:40px 0;border:none;border-top:1px solid #e5e7eb;">

<h2>🧭 Navigation Information</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
"
>

${row("Current Screen", data.currentScreen)}
${row("Previous Screen", data.previousScreen)}

</table>

</td>

</tr>

<tr>

<td
style="
padding:20px;
text-align:center;
font-size:12px;
color:#6b7280;
background:#f9fafb;
border-top:1px solid #e5e7eb;
"
>

Generated automatically by
<strong>${data.appName}</strong>

<br>

${new Date().toUTCString()}

</td>

</tr>

</table>

</body>

</html>
`;
}
