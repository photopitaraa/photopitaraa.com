'use client';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
  }

  const emailjs = await import('emailjs-com');

  await emailjs.send(serviceId, templateId, {
    name: data.name,
    email: data.email,
    phone: data.phone,
    event_type: data.eventType,
    event_date: data.eventDate,
    message: data.message,
  }, publicKey);
}
