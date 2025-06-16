import 'dotenv/config' // importa as configurações do .env
import { z } from 'zod' // biblioteca de validação 

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3333),
})// validação das váriaveis ambiente para um objeto

const _env = envSchema.safeParse(process.env) // validação

if (_env.success === false) {
    console.error('🚨 Invalid environment variables', _env.error.format())

    throw new Error ('🚨 Invalid environment variables')
}// verificação se a validação deu certo ou não e derrubar caso não passe.

export const env = _env.data // caso a validação tenha sido um sucesso