import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { contactEmailTemplate } from '@/templates/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, service, description } = body;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio - Vitor Hugo <onboarding@resend.dev>',
      to: ['vitor4ntunes@gmail.com'],
      subject: `Novo contato de ${firstName} ${lastName}`,
      html: contactEmailTemplate({ firstName, lastName, email, service, description }),
    });

    return Response.json({ message: 'Email enviado com sucesso!', data });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return new Response('Erro ao enviar email', { status: 500 });
  }
}