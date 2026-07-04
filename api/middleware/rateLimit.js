const requestLogs = new Map(); 

export function rateLimit(req) {
    const IP = req.headers['x-forwarded-for'] || 'unknown';
    const now = Date.now();
    const WINDOW_MS = 60 * 1000; // 1 minuto
    const MAX_REQUESTS = 3; // Máximo 3 intentos por minuto

    if (requestLogs.size > 1000) requestLogs.clear();
    const logs = requestLogs.get(IP) || [];
    // Limpiamos peticiones fuera de la ventana de tiempo actual
    const validLogs = logs.filter(timestamp => now - timestamp < WINDOW_MS);

    if (validLogs.length >= MAX_REQUESTS) {
        return { allowed: false };
    }

    // Guardamos la nueva petición
    validLogs.push(now);
    requestLogs.set(IP, validLogs);

    return { allowed: true };
}