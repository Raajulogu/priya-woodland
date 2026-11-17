import { Resend } from "resend";
import { businessConfig } from "@/config/business";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  productOfInterest?: string;
  message: string;
}

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
  isDemoMode?: boolean;
}

export async function sendContactEmail(
  data: ContactFormData
): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || businessConfig.contact.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "enquiry@resend.dev";

  // Check if Resend API key is provided
  if (!apiKey || apiKey.trim() === "" || apiKey === "re_test_key_placeholder") {
    // Return honest status that email service key is not configured
    return {
      success: false,
      isDemoMode: true,
      error:
        "The email service is awaiting client RESEND_API_KEY configuration. Please connect with us directly on WhatsApp for immediate response.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: `Priya Woodland Inquiries <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `New Furniture Enquiry from ${data.name}${
        data.productOfInterest ? ` [${data.productOfInterest}]` : ""
      }`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Product of Interest: ${data.productOfInterest || "General Enquiry"}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family: Georgia, serif; color: #292820; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #DED7CA; background: #F7F4EE; border-radius: 8px;">
          <h2 style="color: #513B2D; margin-top: 0;">New Website Enquiry • Priya Woodland</h2>
          <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #77765C; width: 140px;"><strong>Customer Name:</strong></td>
              <td style="padding: 8px 0; color: #292820;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #77765C;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #292820;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #77765C;"><strong>Phone / WhatsApp:</strong></td>
              <td style="padding: 8px 0; color: #292820;">${data.phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #77765C;"><strong>Item of Interest:</strong></td>
              <td style="padding: 8px 0; color: #513B2D;"><strong>${data.productOfInterest || "General Furniture Consultation"}</strong></td>
            </tr>
          </table>
          <div style="background: #FFFFFF; padding: 16px; border-radius: 6px; border: 1px solid #DED7CA;">
            <p style="margin: 0; font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #292820;">
              ${data.message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #77765C; font-family: sans-serif;">
            Sent from Priya Woodland website enquiry form. Reply directly to this email to reach the customer.
          </p>
        </div>
      `,
    });

    if (emailResponse.error) {
      return {
        success: false,
        error: emailResponse.error.message || "Failed to send email through Resend.",
      };
    }

    return {
      success: true,
      messageId: emailResponse.data?.id,
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred while delivering the email.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
