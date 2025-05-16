import { z } from 'zod';

export const catFactQuerySchema = z.object({
    id: z
        .string()
        .transform((val) => (val ? parseInt(val) : undefined))
        .refine((val) => val === undefined || !isNaN(val), { message: 'id must be a number' }),
});
