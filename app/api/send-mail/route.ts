import generate_contact_email from "@/utils/generate-email";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-transport";

const sendmail = async (mailOptions: MailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV !== "development",
      },
    });

    const info = await transporter.sendMail(mailOptions);

    return { ...info, status: 200 };
  } catch (error) {
    console.error("send-mail: ", error);
    return { status: 500, error };
  }
};

export async function POST(req: NextRequest) {
  try {
    const { email, name, message } = await req.json();

    if (!email || !name || !message)
      return NextResponse.json(
        { message: "Email, name and message are requied", status: 400 },
        { status: 400 }
      );

    const mailOptions: MailOptions = {
      from: `${email} <${process.env.SMTP_USER}>`,
      to: "contact@mail.lexiz.is-a.dev",
      subject: "NEW_CONTACT_MAIL",
      html: generate_contact_email({ email, name, message }),
    };

    const info = await sendmail(mailOptions);

    if (info.status !== 200)
      return NextResponse.json(
        { message: "Error sending mail", status: 400, error: info.error },
        { status: 400 }
      );

    return NextResponse.json(
      { message: "Message sent", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Unknown error, try again", success: false },
      { status: 500 }
    );
  }
}
