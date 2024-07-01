import React from "react";
import { Descriptions } from "antd";

import Tags from "../../../../components/Tags";
import { Task } from "../../../../models/tasks";

type Props = {
  task: Task;
};

const TaskDescription: React.FC<Props> = ({ task }) => {
  const {
    title,
    category,
    description,
    score,
    incoming_example,
    outgoing_example,
    tags,
  } = task || {};

  return (
    <Descriptions title="Информация о задаче" bordered>
      <Descriptions.Item label="Название">{title}</Descriptions.Item>
      <Descriptions.Item label="Категория">{category}</Descriptions.Item>
      <Descriptions.Item label="Входящие данные">
        {incoming_example}
      </Descriptions.Item>
      <Descriptions.Item label="Теги">
        <Tags tags={tags} />
      </Descriptions.Item>
      <Descriptions.Item label="Сложность">{score}</Descriptions.Item>
      <Descriptions.Item label="Исходящие данные">
        {outgoing_example}
      </Descriptions.Item>
      <Descriptions.Item label="Описание">{description}</Descriptions.Item>
    </Descriptions>
  );
};

export default TaskDescription;
