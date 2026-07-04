export default async function handler(req, res) {
    // 1. Forzamos respuesta inmediata sin llamar a middleware ni servicios
    return res.status(200).json({
        success: true,
        message: "Respuesta hardcodeada: El servidor funciona correctamente."
    });
}