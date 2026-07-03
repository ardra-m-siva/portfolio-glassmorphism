import { email, z } from "zod";

export const contactSchem = z.object({
    name: z.string()
        .min(1, "Name is required")
        .min(2, "Name is too short"),
    email: z.string()
        .min(1, "Email is required")
        .email("Invalid email"),
    subject: z.string()
        .min(1, "Subject is required")
        .min(3, "Subject is too short"),
    message: z.string()
        .min(1, "Message is required")
        .min(10, "Message must be at least 10 characters")
})