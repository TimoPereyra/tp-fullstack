export function validateContact(data) {
    const errors = [];

    if (!data.name || data.name.trim().length < 2) {
        errors.push("Name is required.");
    }

    if (
        !data.email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
        errors.push("Invalid email.");
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.push("Message must contain at least 10 characters.");
    }

    if (data.message?.length > 1000) {
        errors.push("Message is too long.");
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}