'use server'

import { resend } from '@/lib/resend';
import { z } from 'zod';

const contactSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Phone number must be at least 8 characters"),
    interest: z.string().min(1, "Please select an interest"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    privacy: z.literal("on").or(z.boolean().refine(v => v === true, "You must agree to the privacy policy")),
});

export async function sendContactMessage(prevState: any, formData: FormData) {
    const rawData = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        interest: formData.get('interest'),
        message: formData.get('message'),
        privacy: formData.get('privacy') === 'on' ? 'on' : false,
    };

    const validatedFields = contactSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid input in one or more fields.",
            errors: validatedFields.error.flatten().fieldErrors
        };
    }

    const { fullName, email, phone, interest, message } = validatedFields.data;

    try {
        const { error } = await resend.emails.send({
            from: 'Kontak Kelas Inovatif <contact@email.bakatkreatif.com>', // Should use verified domain eventually
            to: ['aiindonesiakreatif@gmail.com'],
            subject: `Kontak Baru: ${interest} - ${fullName}`,
            html: `
                <h2>Kontak Baru</h2>
                <p><strong>Nama:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>No. Telp:</strong> ${phone}</p>
                <p><strong>Minat:</strong> ${interest}</p>
                <hr />
                <h3>Pesan:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
            replyTo: email,
        });

        if (error) {
            console.error('Resend error:', error);
            return {
                success: false,
                message: "Gagal mengirim pesan. Silahkan coba lagi nanti."
            };
        }

        return {
            success: true,
            message: "Pesan berhasil terkirim! Kami akan menghubungi Anda segera.",
        };
    } catch (error) {
        console.error('Contact form error:', error);
        return {
            success: false,
            message: "Terjadi kesalahan. Silahkan coba lagi.",
        };
    }
}
