// src/core/types/UserTypes.ts
import { Account } from './AccountTypes';
import { Session } from './SessionTypes';

export interface User {
  id: string;
  name?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  accounts?: Account[];  
  sessions?: Session[];   
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserInput = {
  name?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
};

export type UpdateUserInput = Partial<CreateUserInput>;