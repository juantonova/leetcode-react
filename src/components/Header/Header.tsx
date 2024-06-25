import React, { useState } from 'react';
import { DatabaseOutlined, TeamOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import { AppRoutes } from '../../models/common';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Список пользователей',
    key: AppRoutes.USERS,
    icon: <TeamOutlined />,
  },
  {
    label: 'Cписок задач',
    key: AppRoutes.TASKS,
    icon: <DatabaseOutlined />,
  },
];

const findSelectedKey = (pathname: string): string => {
  return pathname.includes(AppRoutes.USERS) ? AppRoutes.USERS : AppRoutes.TASKS;
}

const Header: React.FC = () => {
  const [selected, setSelected] = useState(findSelectedKey(window.location.pathname));

  const onClick: MenuProps['onClick'] = ({ key }) => {
    window.location.href = key;
    setSelected(key as AppRoutes);
  };

  return  <Menu onClick={onClick} selectedKeys={[selected]} mode="horizontal" items={items} />
};

export default Header