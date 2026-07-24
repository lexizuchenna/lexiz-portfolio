import generateErrorEmail from "@/utils/generate-error-email";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-transport";

const sendMail = async (mailOptions: MailOptions) => {
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

    return {
      success: true,
      status: 200,
      info,
    };
  } catch (error) {
    console.error("Error sending mail:", error);

    return {
      success: false,
      status: 500,
      error,
    };
  }
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      // ======================
      // Error Information
      // ======================
      errorMessage,
      stackTrace,
      errorName,
      isFatal,
      additionalInfo,

      // ======================
      // User Information
      // ======================
      userId,
      name,
      email,
      tenantId,

      // ======================
      // App Information
      // ======================
      appName,
      appVersion,
      buildNumber,
      releaseChannel,
      environment,

      // ======================
      // Device Information
      // ======================
      platform,
      manufacturer,
      brand,
      model,
      deviceName,
      osName,
      osVersion,
      apiLevel,
      deviceType,
      isPhysicalDevice,

      // ======================
      // Runtime
      // ======================
      jsEngine,
      memoryUsage,
      freeStorage,
      locale,
      timezone,

      // ======================
      // Network
      // ======================
      networkType,
      isConnected,

      // ======================
      // Navigation
      // ======================
      currentScreen,
      previousScreen,

      // ======================
      // Time
      // ======================
      timestamp,
    } = body;

    console.log(body);

    if (!errorMessage || !appName || !appVersion || !platform || !timestamp) {
      return NextResponse.json(
        {
          status: 400,
          success: false,
          message:
            "Required fields: errorMessage, appName, appVersion, platform and timestamp.",
        },
        {
          status: 400,
        }
      );
    }

    const subject = `[${appName}] ${
      isFatal ? "🔥 Fatal Crash" : "⚠️ Error Report"
    } - ${errorName || "Unknown Error"}`;

    const mailOptions: MailOptions = {
      from: `Error Reporter <${process.env.SMTP_USER}>`,
      to: "contact@mail.lexiz.is-a.dev",
      replyTo: email || undefined,
      subject,
      html: generateErrorEmail({
        errorMessage,
        stackTrace,
        errorName,
        isFatal,
        additionalInfo,

        userId,
        name,
        email,
        tenantId,

        appName,
        appVersion,
        buildNumber,
        releaseChannel,
        environment,

        platform,
        manufacturer,
        brand,
        model,
        deviceName,
        osName,
        osVersion,
        apiLevel,
        deviceType,
        isPhysicalDevice,

        jsEngine,
        memoryUsage,
        freeStorage,
        locale,
        timezone,

        networkType,
        isConnected,

        currentScreen,
        previousScreen,

        timestamp,
      }),
    };

    const result = await sendMail(mailOptions);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          status: 500,
          message: "Failed to send error report.",
          error: result.error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Error report sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error Report API:", error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "An unexpected server error occurred.",
      },
      {
        status: 500,
      }
    );
  }
}
