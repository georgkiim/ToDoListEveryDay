import {TaskType} from "./App";
import {useState} from "react";


type TasksPropsType={
    tasks:Array<TaskType>
    addNewTask:(title:string)=>void
}

const ToDoList = (props: TasksPropsType) =>{
   const[title,setTitle]=useState('')

    return(
        <div>
            <h1>title</h1>
            <input
                onChange={(e)=> setTitle(e.currentTarget.value)}/>
            <button onClick={()=>props.addNewTask(title)}>ADD</button>
            <ul>
                {props.tasks.map(t=>{
                    return(
                        <li key={t.id}>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>
            <button></button>
            <button></button>
            <button></button>
        </div>
    )
}
export default ToDoList