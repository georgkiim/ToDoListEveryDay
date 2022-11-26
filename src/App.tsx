import React, {useState} from "react";
import ToDoList from "./ToDoList";
import {v1} from "uuid";

 export type TaskType={
    id:string
    title:string
    isDone:boolean
}

const App = () => {

    const [tasks, setTasks] = useState([
        {id:v1(), title:"1", isDone:true},
        {id:v1(), title:"2", isDone:true},
        {id:v1(), title:"3", isDone:false},
    ])

    const addNewTask = (title: string) =>{
        setTasks([{id:v1(), title, isDone:true},...tasks])
    }


    return(
        <div>
            <ToDoList
                addNewTask={addNewTask}
                tasks={tasks}/>
        </div>
    )
}
export default App