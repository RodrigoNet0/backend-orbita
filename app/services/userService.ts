
import { userRepository } from '../repositories/userRepository';
import { errorResponse, successResponse } from '../core/responses';
import { CreateUserInput, UpdateUserInput } from '../validations/UserValidation';


export const userService = {
  fetchAllUsers: async () => {
    const users = await userRepository.getAllUsers();
    return successResponse(users);
  },

  fetchUserById: async (id: string) => {
    const user = await userRepository.getUserById(id);
    if (!user) return errorResponse('Usuário não encontrado');
    return successResponse(user);
  },

  addUser: async (data: CreateUserInput) => {
    const newUser = await userRepository.createUser(data);
    return successResponse(newUser);
  },

  updateUser: async (id: string, data: UpdateUserInput) => {
    const updatedUser = await userRepository.updateUser(id, data);
    return successResponse(updatedUser);
  },

  deleteUser: async (id: string) => {
    await userRepository.deleteUser(id);
    return successResponse({ message: 'User deleted successfully' });
  },
};