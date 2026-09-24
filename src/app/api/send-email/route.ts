import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Fatema Portfolio <onboarding@resend.dev>",

      // Mail এখানে আসবে
     to: ["sumafatema10@gmail.com"],

      // Gmail থেকে Reply করলে visitor-এর email-এ যাবে
      replyTo: email,

      subject: `New portfolio message from ${name}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background: #ffffff;
            color: #111827;
          "
        >
          <h2 style="color: #0891b2;">
            New Portfolio Message
          </h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            <a href="mailto:${email}">
              ${email}
            </a>
          </p>

          <hr
            style="
              border: none;
              border-top: 1px solid #e5e7eb;
              margin: 24px 0;
            "
          />

          <p>
            <strong>Message:</strong>
          </p>

          <p style="line-height: 1.7;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}