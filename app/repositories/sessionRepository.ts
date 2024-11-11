import prisma from "../config/db";

export const sessionRepository = {
  getSessionByToken: async (token: string) => prisma.session.findUnique({ where: { sessionToken: token } }),
  createSession: async (data: { userId: string; sessionToken: string; expires: Date }) =>
    prisma.session.create({ data }),
};