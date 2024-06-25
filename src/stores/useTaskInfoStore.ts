import { create } from "zustand";

import { Task } from "../models/tasks";
import TaskApiService from "../api/TasksApiService";


type State = {
    taskInfo: Task | null,
    isTaskLoading: boolean
    isTaskUpdating: boolean
}

type Action = {
  loadTaskInfo: (id: string) => Promise<void>
  saveTaskInfo: (newTaskInfo: Partial<Task>) => void
}

const useTaskInfoStore = create<State & Action>((set) => ({
    taskInfo: null,
    isTaskLoading: false,
    isTaskUpdating: false,
    loadTaskInfo: async (id) => {
        set(() => ({ isTaskLoading: true }))
        const task  = await TaskApiService.getTaskInfo(id)
        set(() => ({ taskInfo: task, isTaskLoading: false}))
    },

    saveTaskInfo: async (newTask) => {
      set(() => ({ isTaskUpdating: true }))
      const task  = await TaskApiService.saveTaskInfo(newTask)
      set(() => ({ taskInfo: task, isTaskUpdating: false}))
  },
  }))

export default useTaskInfoStore;