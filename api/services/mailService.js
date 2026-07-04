import { Resend } from 'resend';

// Aquí le decimos que use la variable que configuramos en Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(contact) {
    try {
        const { name, email, message } = contact;

        await resend.emails.send({
            // 'onboarding@resend.dev' solo funciona si tu cuenta está verificada
            // o si envías a tu propio correo verificado.
            from: 'onboarding@resend.dev', 
            to: 'timopereyra@gmail.com', // El correo donde quieres recibir los mensajes
            subject: `Nuevo mensaje de ${name}`,
            text: `De: ${name} (${email})\n\nMensaje: ${message}`,
        });

        return true;
    } catch (error) {
        console.error("Error enviando email:", error);
        throw new Error("No se pudo enviar el correo.");
    }
}