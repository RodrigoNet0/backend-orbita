import { User } from './UserTypes';

export interface Session {
  sessionToken: string;
  userId: string;
  user?: User;           // Relacionamento com o usuário
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSessionInput = {
  userId: string;
  sessionToken: string;
  expires: Date;
};