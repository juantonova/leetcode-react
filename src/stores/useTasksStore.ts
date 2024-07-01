import { create } from "zustand";

import { Task } from "../models/tasks";
import TaskApiService from "../api/TasksApiService";

type State = {
  tasks: Task[];
  isTasksLoading: boolean;
};

type Action = {
  loadTasks: () => Promise<void>;
};

const useTasksStore = create<State & Action>((set) => ({
  tasks: [],
  isTasksLoading: false,
  loadTasks: async () => {
    set(() => ({ isTasksLoading: true }));
    const tasks = await TaskApiService.getTasks();
    set(() => ({ tasks, isTasksLoading: false }));
  },
}));

export default useTasksStore;
