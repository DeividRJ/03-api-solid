import { prisma } from '@/lib/prisma'
import 'dotenv/config'
import { execSync } from 'node:child_process' // executa comandos no terminal
import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest/environments'

function generateDatabaseUrl(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL env variable')
  }

  const url = new URL(process.env.DATABASE_URL) // Construtor global do JS

  url.searchParams.set('schema', schema) // Método para passar parametros nos Query Params

  return url.toString() // Devolve a URL alterada
}

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  async setup() {
    const schema = randomUUID()
    const dataBaseUrl = generateDatabaseUrl(schema)

    console.log(dataBaseUrl)

    process.env.DATABASE_URL = dataBaseUrl

    execSync('npx prisma migrate deploy') // Executa todas as migrations dentro desse novo banco de dados criado.

    // Criar o banco de testes

    return {
      async teardown() {
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
        )

        await prisma.$disconnect()
        // Apagar o banco de testes
      },
    }
  },
}
