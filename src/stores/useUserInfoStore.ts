import { create } from "zustand";

import { User } from "../models/users";
import UserApiService from "../api/UsersApiService";

type State = {
  userInfo: User | null;
  isUserLoading: boolean;
  isUserUpdating: boolean;
};

type Action = {
  loadUserInfo: (id: string) => Promise<void>;
  saveUserInfo: (newUserInfo: Partial<User>) => Promise<void>;
};

const useUserInfoStore = create<State & Action>((set) => ({
  userInfo: null,
  isUserLoading: false,
  isUserUpdating: false,
  loadUserInfo: async (id) => {
    set(() => ({ isUserLoading: true }));
    const user = await UserApiService.getUserInfo(id);
    set(() => ({ userInfo: user, isUserLoading: false }));
  },

  saveUserInfo: async (newUser) => {
    set(() => ({ isUserUpdating: true }));
    const user = await UserApiService.saveUserInfo(newUser);
    set(() => ({ userInfo: user, isUserUpdating: false }));
  },
}));

export default useUserInfoStore;
