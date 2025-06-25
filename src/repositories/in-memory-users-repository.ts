import { PrismaClient } from '@prisma/client'

export class InMemoryUsersRepository {
  public users: any = []

  async create(data: PrismaClient.UserCreateInput) {
    this.users.push(data)
  }
}
