import { create } from "zustand";

import UsersApiService from "../api/UsersApiService";
import { User } from "../models/users";

type State = {
  users: User[];
  isUsersLoading: boolean;
};

type Action = {
  loadUsers: () => Promise<void>;
};

const useUsersStore = create<State & Action>((set) => ({
  users: [],
  isUsersLoading: false,
  loadUsers: async () => {
    set(() => ({ isUsersLoading: true }));
    const users = await UsersApiService.getUsers();
    set(() => ({ users, isUsersLoading: false }));
  },
}));

export default useUsersStore;
