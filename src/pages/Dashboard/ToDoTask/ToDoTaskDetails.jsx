import React from 'react';
import { useDrag } from 'react-dnd'
const ToDoTaskDetails = ({tasks}) => {
   
const {_id,task_title,task_description,category,date,email}=tasks;

const [{ isDragging }, dragRef] = useDrag({
    type: 'task',
    item:{id:_id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
    })
})
    return (
        <div ref={dragRef} className="card w-60 bg-base-100 shadow-xl mt-5">
        <div className="card-body">
            <h2 className="card-title">{task_title}</h2>
            <p>{task_description}</p>
            <p>deadline:{date}</p> 
        </div>
        </div>
    );
};

export default ToDoTaskDetails;