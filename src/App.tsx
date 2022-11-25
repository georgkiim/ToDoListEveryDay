import React, {useState} from "react";
import {v1} from "uuid";
import ToDoList, {TaskType} from "./ToDoList";


export type FilterType = 'all' | 'active' | 'completed'


const App = () => {

    const [tasks, setTask] = useState<Array<TaskType>>([
            {id: v1(), title: '1', doIt: true},
            {id: v1(), title: '2', doIt: true},
            {id: v1(), title: '3', doIt: true},
        ]
    )

    const [filter, setFilter] = useState<FilterType>('active')

    const addTask = (title:string) =>{
        setTask([{id: v1(), title, doIt: true}, ...tasks])
    }
    const deleteTask = (id:string) =>{
        setTask(tasks.filter(t=> t.id!==id))
    }

    const filterNewState = (nextFilter:FilterType) =>{
        setFilter(nextFilter)
    }

    const filterTaskRender = (filter:string, tasks:Array<TaskType>) =>{
        switch (filter){
            case "active": return tasks.filter(t=> !t.doIt)
            case "completed": return tasks.filter(t=> t.doIt)
            default: return tasks
        }


    }



    return (
        <div>
            <ToDoList title={"What to do?"}
                      task={filterTaskRender(filter, tasks)}
                      addTask={addTask}
                      deleteTask={deleteTask}
                      filterNewState={filterNewState}
            />
        </div>
    )
}

export default App
