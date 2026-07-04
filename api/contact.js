import { validateContact } from "./middleware/validation.js";
import { rateLimit } from "./middleware/rateLimit.js";
import { sendMail } from "./services/mailService.js";
import { success, error } from "./utils/response.js";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json(
            error("Method not allowed.", 405)
        );
    }

    const limit = rateLimit(req);

    if (!limit.allowed) {
        return res.status(429).json(
            error("Too many requests.", 429)
        );
    }

    const validation = validateContact(req.body);

    if (!validation.valid) {
        return res.status(400).json(
            error(validation.errors.join("\n"))
        );
    }

    await sendMail(req.body);

    return res.status(200).json(
        success({}, "Mail sent successfully.")
    );
}