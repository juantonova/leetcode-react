import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";

import {
  CategoryType,
  CategoryTypeOptions,
  Score,
  ScoreOptions,
  Task,
} from "../../../../models/tasks";
import useTaskInfoStore from "../../../../stores/useTaskInfoStore";
import { errorMessage, successMessage } from "../../../../const";

type FieldType = {
  title: string;
  description: string;
  category: CategoryType;
  incoming_example: string;
  outgoing_example: string;
  score: Score;
};

type Props = {
  task: Task;
};

const TaskEditor: React.FC<Props> = ({ task }) => {
  const { saveTaskInfo, taskInfo, isLoading } = useTaskInfoStore((state) => ({
    saveTaskInfo: state.saveTaskInfo,
    taskInfo: state.taskInfo,
    isLoading: state.isTaskUpdating,
  }));

  const [messageApi, contextHolder] = message.useMessage();
  const onSuccess = () => messageApi.open(successMessage);
  const onError = () => messageApi.open(errorMessage);

  const {
    title,
    category,
    description,
    score,
    incoming_example,
    outgoing_example,
  } = task || {};

  const onFinish = (values: FieldType) => {
    saveTaskInfo({ ...taskInfo, ...values });
    onSuccess();
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        description,
        title,
        category,
        incoming_example,
        outgoing_example,
        score,
      }}
      onFinish={onFinish}
      onFinishFailed={onError}
      autoComplete="off"
    >
      {contextHolder}
      <Form.Item<FieldType> label="Название задачи" name="title">
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="Описание" name="description">
        <TextArea />
      </Form.Item>

      <Form.Item<FieldType> label="Категория" name="category">
        <Select options={CategoryTypeOptions} />
      </Form.Item>

      <Form.Item<FieldType> label="Сложность" name="score">
        <Select options={ScoreOptions} />
      </Form.Item>

      <Form.Item<FieldType> label="Входные данные" name="incoming_example">
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="Исходящие данные" name="outgoing_example">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskEditor;
