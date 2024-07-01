/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Descriptions } from "antd";

import Tags from "../../../../components/Tags";
import { Tag, Task } from "../../../../models/tasks";

type Props = {
  task: Task;
};

type TaskInfoKeys = keyof Omit<Task, "id">

const labelDescriptions: { [key in TaskInfoKeys]: string } = {
  description: "Описание",
  incoming_example: "Пример ввода",
  outgoing_example: "Пример вывода",
  tags: "Теги",
  category: "Категория",
  score: "Сложность",
  title: "Название",
  additional_info: "Дополнительная информация",
}


const TaskDescription: React.FC<Props> = ({ task }) => {
  const {
    id, ...restTaskInfo
  } = task || {};

   const descriptions = Object.entries(restTaskInfo).map(([key, value], index) => {
   const description = key === "tags" ? <Tags tags={value as Tag[]} /> : value
   const label = key in labelDescriptions ? labelDescriptions[key as TaskInfoKeys] : ""
    return <Descriptions.Item key={index} label={label}>{description}</Descriptions.Item>
   })

  return (
    <Descriptions title="Информация о задаче" bordered>
      {descriptions}
    </Descriptions>
  );
};

export default TaskDescription;
