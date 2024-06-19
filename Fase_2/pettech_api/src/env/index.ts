import "dotenv/config";
import { z } from "zod";

// definição de Schema
const envSchema = z.object({
    NOVE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(3000),
});

// validação de variáveis de ambiente
const _env = envSchema.safeParse(process.env);

if(!_env.success) {
    console.error('Invalid environment variables', _env.error.format());
    throw new Error('Invalid environment variables');
};

export const env = _env.data;