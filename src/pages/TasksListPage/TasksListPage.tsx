import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Table } from "antd";

import useTasksStore from "../../stores/useTasksStore";
import { Task } from "../../models/tasks";
import Tags from "../../components/Tags";
import Loader from "../../components/Loader";
import NoDataComponent from "../../components/NoDataComponent";

import "./TasksListPage.css";

const columns = [
  {
    title: "Название задачи",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Категория",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Сложность",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Теги",
    key: "tags",
    dataIndex: "tags",
    render: (_: unknown, { tags }: Task) => <Tags tags={tags} />,
  },
];

const TasksListPage = () => {
  const { tasks, loadTasks, isLoading } = useTasksStore((state) => ({
    tasks: state.tasks,
    loadTasks: state.loadTasks,
    isLoading: state.isTasksLoading,
  }));

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (!tasks) {
    return <NoDataComponent />;
  }

  const handleClick = (task: Task) => {
    return {
      onClick: () => navigate(`/tasks/${task.id}`),
    };
  };

  return (
    <div className="taskList">
      <Table
        columns={columns}
        dataSource={tasks}
        onRow={handleClick}
        rowClassName="row"
        pagination={false}
      />
    </div>
  );
};

export default TasksListPage;
