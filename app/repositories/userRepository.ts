import prisma from "../config/db";
import { CreateUserInput, UpdateUserInput } from "../validations/UserValidation";



export const userRepository = {
  getAllUsers: async () => prisma.user.findMany(),
  getUserById: async (id: string) => prisma.user.findUnique({ where: { id } }),
  createUser: async (data: CreateUserInput) => prisma.user.create({ data }),
  updateUser: async (id: string, data: UpdateUserInput) => prisma.user.update({ where: { id }, data }),
  deleteUser: async (id: string) => prisma.user.delete({ where: { id } }),
};