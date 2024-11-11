import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: 'Formato de email inválido.' }),
  emailVerified: z.date().optional(),
  image: z.string().url({ message: 'URL da imagem inválida.' }).optional(),
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;