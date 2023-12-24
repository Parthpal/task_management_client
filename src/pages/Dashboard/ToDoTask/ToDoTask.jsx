import { useEffect, useState } from "react";
import ToDoTaskDetails from "./ToDoTaskDetails";
import { useDrop } from "react-dnd";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import CreateTask from "./CreateTask";
import ListTask from "./ListTask";
import toast, { Toaster } from 'react-hot-toast';

const ToDoTask = () => {
    const [task,setTask]=useState([]);
    console.log('new task',task);
    useEffect(()=>{
        const storedTasks=JSON.parse(localStorage.getItem("tasks"));
        setTask(storedTasks || []);
    },[]);
    
    return (<>
    <div className="flex flex-col items-center">
    
           <CreateTask task={task} setTask={setTask}></CreateTask>
           <ListTask task={task} setTask={setTask}></ListTask>
    </div>

        </>);
};

export default ToDoTask;
