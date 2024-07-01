import React from "react";
import { Empty } from "antd";

import "../../App.css";

const NoDataComponent = () => {
  return (
    <div className="centeredContainer">
      <Empty description="Информация не найдена" />
    </div>
  );
};

export default NoDataComponent;
