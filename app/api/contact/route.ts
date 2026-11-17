import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, productOfInterest, message, _hp } = body;

    // 1. Honeypot check (anti-bot)
    if (_hp) {
      // Return 200 silently to discourage bots from adjusting
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a message of at least 10 characters." },
        { status: 400 }
      );
    }

    // 3. Send email via Resend
    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : undefined,
      productOfInterest: productOfInterest ? productOfInterest.trim() : undefined,
      message: message.trim(),
    });

    if (result.isDemoMode) {
      return NextResponse.json(
        {
          success: false,
          isConfigPending: true,
          error: result.error,
        },
        { status: 503 }
      );
    }

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Unable to send message at this time.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been successfully delivered. We will respond shortly.",
      messageId: result.messageId,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try WhatsApp.",
      },
      { status: 500 }
    );
  }
}
