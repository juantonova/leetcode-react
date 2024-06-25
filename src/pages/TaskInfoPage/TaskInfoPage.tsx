import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";

import useTaskInfoStore from "../../stores/useTaskInfoStore";
import Loader from "../../components/Loader";
import NoDataComponent from "../../components/NoDataComponent";
import TaskDescription from "./components/TaskDescription";
import TaskEditor from "./components/TaskEditor";


const TaskInfoPage = () => {
    const { taskInfo, loadTaskInfo, isLoading } = useTaskInfoStore((state) => ({ taskInfo: state.taskInfo, loadTaskInfo: state.loadTaskInfo, isLoading: state.isTaskLoading }));
  
    const { id } = useParams<{ id: string }>();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [editMode, setEditMode] = useState(pathname.includes('edit'));
  
    useEffect(() => {
      if (id) {      
        loadTaskInfo(id)
      }
    }, [id])

    if (isLoading) {
      return <Loader />
    }

    if (!taskInfo) {
      return <NoDataComponent />
    }

    const handleClick = () => {
      if (editMode) {
        navigate(`/tasks/${id}`)
      } else {
        navigate(`/tasks/${id}/edit`)
      }
      setEditMode((mode) => !mode)
    }

    const buttonText = editMode ? 'Вернуться к просмотру' : 'Редактировать'

    return (
      <div>
        <Button onClick={handleClick}>{buttonText}</Button>
        {editMode ? <TaskEditor task={taskInfo} /> : <TaskDescription task={taskInfo} />}
      </div>
    );

  };
  
  export default TaskInfoPage;