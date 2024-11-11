import { User } from './UserTypes';
import { Account } from './AccountTypes';
import { Session } from './SessionTypes';
import { VerificationToken } from './VerificationTokenTypes';

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};


export type UserResponse = ApiResponse<User>;
export type AccountResponse = ApiResponse<Account>;
export type SessionResponse = ApiResponse<Session>;
export type VerificationTokenResponse = ApiResponse<VerificationToken>;