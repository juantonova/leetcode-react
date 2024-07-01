import { Task } from "../models/tasks";
import { ApiService } from "./ApiService";

class TaskApiService extends ApiService {
  getTasks = async () => {
    try {
      const {
        data: { tasks },
      } = await this.fetch<{ tasks: Task[] }>("/tasks");
      return tasks;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  getTaskInfo = async (id: string) => {
    try {
      const {
        data: { task },
      } = await this.fetch<{ task: Task }>(`/tasks/${id}`);
      return task;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  saveTaskInfo = async (newTask: Partial<Task>) => {
    try {
      const {
        data: { task },
      } = await this.fetch<{ task: Task }>(`/tasks/${newTask.id}`, {
        method: "PATCH",
        data: newTask,
      });
      return task;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}

export default new TaskApiService();
