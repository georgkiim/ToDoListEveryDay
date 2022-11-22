import React, {useState} from "react";
import "./app.css";
import ToDoList, {TaskType} from "./ToDoList";



 export type FilterValuesType = "Active" | "Completed" | "All"


const App = () => {
    const [task1, setTask] = useState<Array<TaskType>>([
        {id:1, title: "Do ToDo list restart every day", isDone:true},
        {id:2, title: "Learn JS Native", isDone:true},
        {id:3, title: "Do Samyrai Way", isDone:true},
    ])

    const [filter1, setFilter] = useState<"Active" | "Completed" | "All">("Active")

    const removeTask = (id:number) => {
        const task2 = task1.filter(t=> t.id!==id)
        setTask(task2)
    }

    let filterTask = task1
    const changeFilter = (next: FilterValuesType) =>{
        setFilter(next)
    }

    if(filter1=="Active"){
        filterTask = task1.filter(t=> t.isDone == false)
    } else if (filter1=="Completed") {
        filterTask = task1.filter(t=> t.isDone == true)
    } else if (filter1=="All") {
        filterTask = task1
    }

    return(
        <div className={'App'}>
            <ToDoList title={"Everyday Tasks"}
                      task={filterTask}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    )
}

export default App