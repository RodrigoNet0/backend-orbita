export interface VerificationToken {
    identifier: string;
    token: string;
    expires: Date;
  }
  
  export type CreateVerificationTokenInput = {
    identifier: string;
    token: string;
    expires: Date;
  };