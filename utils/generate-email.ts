export default function generate_contact_email({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
      <h2 style="color: #333;">📬 New Contact Message</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px; font-weight: bold;">Subject:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; font-size: 12px; color: #888;">
        This message was sent from your website contact form.
      </p>
    </div>
  `;
}
