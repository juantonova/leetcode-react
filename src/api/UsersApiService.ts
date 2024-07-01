import { User } from "../models/users";
import { ApiService } from "./ApiService";

class UsersApiService extends ApiService {
  getUsers = async () => {
    try {
      const {
        data: { users },
      } = await this.fetch<{ users: User[] }>("/users");
      return users;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  getUserInfo = async (id: string) => {
    try {
      const {
        data: { user },
      } = await this.fetch<{ user: User }>(`/users/${id}`);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  saveUserInfo = async (newUser: Partial<User>) => {
    try {
      const {
        data: { user },
      } = await this.fetch<{ user: User }>(`/users/${newUser.id}`, {
        method: "PATCH",
        data: newUser,
      });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

export default new UsersApiService();
