import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    // TEST log to confirm data is received properly
    console.log("📩 Contact form data:", {
      firstName,
      lastName,
      email,
      message,
    });

    await resend.emails.send({
      from: "Michael Kibler <contact@michaelkibler.dev>",
      to: process.env.CONTACT_RECEIVER!,
      subject: `New message from ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family:sans-serif;line-height:1.5">
          <h3>New Message from ${fullName}</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
