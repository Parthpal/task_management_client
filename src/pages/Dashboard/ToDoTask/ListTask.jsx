import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDrag, useDrop } from 'react-dnd'
const ListTask = ({task,setTask}) => {
    const [toDos,setTodos]=useState([]);
    const [ongoing,setOngoing]=useState([]);
    const [completed,setCompleted]=useState([]);

useEffect(()=>{

    const fTodos=task.filter(t => t.status=="todo");
    const fongoing=task.filter(t => t.status=="ongoing");
    const fcompleted=task.filter(t => t.status=="completed");
    
    setTodos(fTodos);
    setOngoing(fongoing);
    setCompleted(fcompleted);

},[task])
const statuses=["todo","ongoing","completed"];

    return (<>
        <div className='flex gap-16'>
            
            {
                statuses.map(status=><Section toDos={toDos} ongoing={ongoing} completed={completed} task={task} setTask={setTask} status={status}></Section>)
            }
            
        </div>
        <Toaster /> 
        </> );
};

export default ListTask;

//  const Section=({status,task,setTask,ongoing,completed,toDos})=>{

//  }
const Section=({status,task,setTask,ongoing,completed,toDos})=>{
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "tasks",
        drop:(item)=>addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))
    let text= "ToDO";
    let bg="bg-amber-500"
    let taskToMap=toDos;

    if(status=='ongoing'){
        text = "On Going"
        bg="bg-emerald-500"
        taskToMap=ongoing;
    }
    if(status=='completed'){
        text = "Completed"
        bg="bg-cyan-500"
        taskToMap=completed;
    }
    const addItemToSection=(id)=>{
        console.log(id);
        setTask((prev)=>{
            const mTasks=prev.map(t=>{
        
                    if(t.id==id){
                        return {...t,status:status}
                    }
                    return t
                })
                localStorage.setItem("tasks", JSON.stringify(mTasks));
                return mTasks;
            })
        }
    return (
        <div ref={drop}className={`w-64`}>
            <Header text={text} bg={bg} count={taskToMap.length}></Header>
            {
                taskToMap.length> 0 && taskToMap.map(tasks=><Task key={tasks.id} tasks={tasks} task={task} setTask={setTask}/>)
            }
        </div>
    )
 }

 const Header=({text,bg,count})=>{
    return <div className={`${bg} flex items-center h-12 pl-4 rounded-md Uppercase text-white`}>{text} <div className='ml-2'>{count}</div></div>
 }
 const Task=({task,tasks,setTask})=>{

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "tasks",
        item:{id:tasks.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

    const handleRemove = (id) => {
        console.log(id);
        const filteredTasks = task.filter((t) => t.id !== id);
        setTask(filteredTasks);
        toast('Task deleted');
      };
    return (<div ref={drag} className={` p-4 mt-8 rounded-md cursor-grab`}>
        <div className="card w-60 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{tasks.name}</h2>
            <p>{tasks.description}</p>
            <p>{tasks.priority}</p>
            <p>{tasks.deadline}</p>
            <div className="card-actions justify-end">
            <button className='w-full btn btn-outline btn-error' onClick={()=>handleRemove(tasks.id)}>Delete</button>
            </div>
        </div>
        </div>
       <h3></h3> 
       
    </div>
 )}