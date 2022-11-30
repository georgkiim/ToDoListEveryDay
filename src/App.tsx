import React, {useState} from "react";
import ToDoList from "./ToDoList";
import './App1.css'
import {v1} from "uuid";

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

const App = () => {
    const [tasks, setTasks] = useState<Array<TaskType>>([])
    const [filter, setFilter] = useState<FilterType>('all')
    const addTask = (task: string) => {
        setTasks([{id: v1(), task, isDone: false}, ...tasks])
    }
    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    const changeCheck = (id: string, isDone: boolean) => {
        setTasks(tasks.map(t => id == t.id ? {...t, isDone} : t))
    }
    const setFilteredTasks = (newFilter: FilterType) => {
        setFilter(newFilter)
    }
    const filteredTasks = (tasks: TaskType[], filter: FilterType) => {
        debugger
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            case "all":
                return tasks
        }
    }

    return (
        <div className='App'>
         <div className='todolist'> <ToDoList
                      tasks={filteredTasks(tasks, filter)}
                      addTask={addTask}
                      removeTask={removeTask}
                      changeCheck={changeCheck}
                      setFilteredTasks={setFilteredTasks}
                      filter={filter}
            />
             </div>
        </div>
    )
}

export default App