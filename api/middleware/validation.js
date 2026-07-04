export function validateContact(data) {
    const errors = [];

    // Sanitización básica: eliminamos espacios en blanco innecesarios
    const name = data.name?.trim() || "";
    const email = data.email?.trim() || "";
    const message = data.message?.trim() || "";

    // Validación de Nombre
    if (name.length < 2) {
        errors.push("El nombre es obligatorio y debe tener al menos 2 caracteres.");
    }

    // Validación de Email (Regex estándar)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push("Por favor, ingresa una dirección de correo electrónico válida.");
    }

    // Validación de Mensaje
    if (message.length < 10) {
        errors.push("Tu mensaje debe tener al menos 10 caracteres para que pueda entender bien tu consulta.");
    } else if (message.length > 1000) {
        errors.push("El mensaje es demasiado largo. Por favor, intenta resumirlo en menos de 1000 caracteres.");
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}