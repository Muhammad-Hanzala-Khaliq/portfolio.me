import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", 
      to: ["hanzallahkhaliq@gmail.com"], // 👈 yahan apni email fix karo
      subject: "New Contact Form Submission",
      html: `<p>New user wants to contact you!</p>
             <p><strong>Email:</strong> ${email}</p>`, // user ka input include kar diya
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
