import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const AddTask = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit,reset } = useForm();
    const [startDate_post, setStartDate_post] = useState(new Date());
    const axiosPublic=useAxiosPublic();
    const addTask=async (data)=>{
        const  task_title=data.task_title;
        const  task_description= data.task_description;
        const  category= data.category;

        const add_Task={
            task_title,
            task_description,
            category,
            date:startDate_post,
            email:user.email,
            status:'todo'
        }

       console.log('add Task',add_Task);
       const add_Task_res=await axiosPublic.post('/task',add_Task);
       console.log(add_Task_res.data);
        if(add_Task_res.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Task added.',
                showConfirmButton: false,
                timer: 1500
              });
        }

    }
    return (
<div>
            <h3 className='text-5xl font-bold text-[#1A0F91] text-center my-5'>Add task Here</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form  className="card-body ">
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" placeholder="Task title" name='task_title' {...register('task_title')} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task decription</span>
                            </label>
                            <input type="text" name='task_description' {...register('task_description')} placeholder="Task decription" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Priority</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                            </div>


                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Deadlines</span>
                            </label>
                            {/* <input type="date" name='job_post_date' placeholder="Posting date" className="input input-bordered" required /> */}
                            <DatePicker  className="input input-bordered" selected={startDate_post} onChange={(date) => setStartDate_post(date)} />
                            </div>
                        </div>
                        <div className="inline mx-auto form-control mt-6">
                            <button  onClick={handleSubmit(addTask)} className="mx-4 px-12 btn border-none btn-primary bg-[#1A0F91]">Add Task</button>
                        </div>
                    
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AddTask;