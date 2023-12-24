import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import React, { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const CreateTask = ({task,setTask}) => {
    // const [tasks,setTasks]=useState({
    //     id:"",
    //     task_title:"",
    //     task_description:"",
    //     category:"",
    //     date:"",
    //     email:"",
    //     status:'todo'
    // });

    const [tasks,setTasks]=useState({
        id:"",
        name:"",
        description:"",
        priority:"",
        deadline:"",
        status:'todo'
    });
  console.log(tasks);
    const {user}=useContext(AuthContext);
    // const { register, handleSubmit,reset } = useForm();
    const [startDate_post, setStartDate_post] = useState(new Date());
   // console.log(tasks);
    // const addTask=async (data)=>{
    //     const  task_title=data.task_title;
    //     const  task_description= data.task_description;
    //     const  category= data.category;

    //     const add_Task={
    //         id:uuidv4(),
    //         task_title,
    //         task_description,
    //         category,
    //         date:startDate_post,
    //         email:user.email,
    //         status:'todo'
    //     }
        
    //     setTasks(add_Task);
    //     setTask((prev) => {
    //         const list = [...(prev || []), tasks];
    //          localStorage.setItem("tasks", JSON.stringify(list));
    //         return list;
    //       });
        
       
        
    //   // console.log('add Task',add_Task);

    // }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTask((prev) => {
        const list = [...(prev || []), tasks];
        localStorage.setItem("tasks", JSON.stringify(list));
        return list;
          });
          toast('Task added');
    }
    return (<>
    
    <form onSubmit={handleSubmit} className="card-body grid grid-cols-4">
        <div className="form-control">
          <input value={tasks.name} onChange={(e)=>setTasks({...tasks,id:uuidv4(),name:e.target.value})} type="text" placeholder="title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input value={tasks.description} onChange={(e)=>setTasks({...tasks,id:uuidv4(),description:e.target.value})} type="text" placeholder="Description" className="input input-bordered" required />
        </div>
        <div className="form-control">
                            <select value={tasks.priority} onChange={(e)=>setTasks({...tasks,id:uuidv4(),priority:e.target.value})}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
            </div>
            <div className="form-control">
          <input value={tasks.deadline} onChange={(e)=>setTasks({...tasks,id:uuidv4(),deadline:e.target.value})} type="date" placeholder="Deadline" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 col-span-4">
          <button className="btn btn-primary">Create task</button>
        </div>
        
</form>
<Toaster />  
        </>);
};

export default CreateTask;