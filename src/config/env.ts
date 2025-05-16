import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

const envFilePath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'local'}`);
dotenv.config({ path: envFilePath });

const envSchema = z.object({
    PORT: z.coerce.number().default(8020),
    ENABLE_AUTH: z.enum(['true', 'false']).default('false'),
    NODE_ENV: z.string().default('local'),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
    console.error('❌ Invalid environment variables:', env.error.format());
    process.exit(1);
}

export const ENV = env.data;
