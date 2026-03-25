import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, details } = await req.json();
    if (!name || !email || !details) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const { data, error } = await resend.emails.send({
      from: 'Jerry10n Contact <onboarding@resend.dev>',
      to: 'jerry@studio10n.com',
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family:monospace;max-width:600px;padding:32px;background:#F0EFEA;border:2px solid #111;">
          <h2 style="font-size:24px;text-transform:uppercase;margin-bottom:24px;">New Inquiry — Jerry10n.dev</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border:1px solid #111;margin:24px 0;" />
          <p><strong>Project Details:</strong></p>
          <p style="white-space:pre-wrap;">${details}</p>
        </div>
      `,
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true, id: data?.id });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
