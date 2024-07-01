import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import TasksListPage from "./pages/TasksListPage";
import UsersListPage from "./pages/UsersListPage";
import TaskInfoPage from "./pages/TaskInfoPage";
import UserInfoPage from "./pages/UserInfoPage";
import { AppRoutes } from "./models/common";

import "./App.css";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <TasksListPage />,
  },
  {
    path: AppRoutes.TASKS,
    element: <TasksListPage />,
  },
  {
    path: AppRoutes.TASK,
    element: <TaskInfoPage />,
  },
  {
    path: AppRoutes.TASK_EDIT,
    element: <TaskInfoPage />,
  },
  {
    path: AppRoutes.USERS,
    element: <UsersListPage />,
  },
  {
    path: AppRoutes.USER,
    element: <UserInfoPage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
