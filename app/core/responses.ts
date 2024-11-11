import { ApiResponse } from "./types/ResponseTypes";


export const successResponse = <T>(data: T): ApiResponse<T> => ({
  success: true,
  data,
});

export const errorResponse = (error: string): ApiResponse<null> => ({
  success: false,
  error,
});