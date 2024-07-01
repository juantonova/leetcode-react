import React from "react";
import { Spin } from "antd";

import "../../App.css";

const Loader = () => {
  return (
    <div className="centeredContainer">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
