import React, { useEffect } from "react";
import useUserInfoStore from "../../stores/useUserInfoStore";

import Loader from "../../components/Loader";
import NoDataComponent from "../../components/NoDataComponent";
import { useParams } from "react-router-dom";
import { Avatar, Card, Rate, Space, message } from "antd";
import Meta from "antd/es/card/Meta";
import { successMessage } from "../../const";

import './UserInfoPage.css';
import { UserOutlined } from "@ant-design/icons";


const UserInfoPage = () => {
    const { userInfo, loadUserInfo, isLoading, saveUserInfo } = useUserInfoStore((state) => ({ 
      userInfo: state.userInfo, 
      loadUserInfo: state.loadUserInfo, 
      saveUserInfo: state.saveUserInfo,
      isLoading: state.isUserLoading,
      }));
  
    const { id } = useParams<{ id: string }>();
    const [messageApi, contextHolder] = message.useMessage();
    const onSuccess = () => messageApi.open(successMessage);

  
    useEffect(() => {
      if (id) {      
        loadUserInfo(id)
      }
    }, [id])

    if (isLoading) {
      return <Loader />
    }

    if (!userInfo) {
      return <NoDataComponent />
    }
    const { name, role, rating } = userInfo || {};

    const handleChangeRating = async (value: number) => {
      await saveUserInfo({ ...userInfo, rating: value });
      onSuccess();
    }

    return (
      <div className="userInfo">
        {contextHolder}
        <Card
          hoverable
          className="card"
          cover={<Space wrap size={16}>
                   <Avatar shape="square" size="large" icon={<UserOutlined />} />
                 </Space>}>
            <Meta title={name} description={role} />
            <br />
            Rating:  <Rate defaultValue={rating} onChange={handleChangeRating} />
          </Card>    
      </div>
    );

  };
  
  export default UserInfoPage;