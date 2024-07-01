import React, { useEffect } from "react";
import { Rate, Table } from "antd";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/Loader";
import NoDataComponent from "../../components/NoDataComponent";
import useUsersStore from "../../stores/useUsersStore";
import { User } from "../../models/users";

import "./UsersListPage.css";

const columns = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Роль",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Рейтинг",
    dataIndex: "rating",
    key: "rating",
    render: (_: unknown, { rating }: User) => (
      <Rate defaultValue={rating} disabled />
    ),
  },
];

const UsersListPage = () => {
  const { users, loadUsers, isLoading } = useUsersStore((state) => ({
    users: state.users,
    loadUsers: state.loadUsers,
    isLoading: state.isUsersLoading,
  }));

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (!users) {
    return <NoDataComponent />;
  }

  const handleClick = (user: User) => {
    return {
      onClick: () => navigate(`/users/${user.id}`),
    };
  };

  return (
    <div className="usersList">
      <Table
        columns={columns}
        dataSource={users}
        onRow={handleClick}
        rowClassName="row"
        pagination={false}
      />
    </div>
  );
};

export default UsersListPage;
