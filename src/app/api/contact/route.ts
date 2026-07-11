import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid form data";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email service not configured. Set RESEND_API_KEY or use Netlify Forms.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? "advice@csmobility.se";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "CS Mobility <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Website inquiry from ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    html: [
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
      `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    ].join(""),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
