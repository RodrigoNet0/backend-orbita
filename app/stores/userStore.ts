import { create } from 'zustand'
import axios from 'axios';
import { User } from '../core/types/UserTypes';


interface UserState {
  users: User[];
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await axios.get('/api/users');
    set({ users: response.data.data });
  },
}));