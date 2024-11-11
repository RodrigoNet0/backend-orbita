import prisma from "../config/db";


export const accountRepository = {
  getAccountsByUserId: async (userId: string) => prisma.account.findMany({ where: { userId } }),
  createAccount: async (data: { userId: string; provider: string; providerAccountId: string; type: string }) =>
    prisma.account.create({ data }),
};