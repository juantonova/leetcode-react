import React from "react";
import { Tag } from "antd";

import { Tag as TagType } from "../../models/tasks";

type Props = {
    tags: TagType[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return tags.map((tag) => {
        return (
          <Tag color="geekblue" key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      })
}

export default Tags;