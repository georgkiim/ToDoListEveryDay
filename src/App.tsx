import React, {useState} from "react";
import ToDoList from "./ToDoList";
import {v1} from "uuid";
import './App1.css'

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'


const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [filter, setFilter] = useState<FilterType>('all')

    const addTask = (task: string) => {
        setTasks([{id: v1(), task, isDone: false}, ...tasks])
    }

    const setChecked = (id: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id == id ? {...t, isDone} : t))
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const setNewFilter = (nextFilter:FilterType) => {
    setFilter(nextFilter)
    }


    const getFilteredTasks = (filter:FilterType, tasks:TaskType[]) =>{
        switch (filter){
            case "active":return tasks.filter(t=> !t.isDone)
            case "completed":return tasks.filter(t=> t.isDone)
            case 'all': return tasks}
    }

    return (
        <div className='app'>
            <ToDoList tasks={getFilteredTasks(filter, tasks)}
                      addTask={addTask}
                      setChecked={setChecked}
                      removeTask={removeTask}
                      setNewFilter={setNewFilter}
            />
        </div>
    )
}

export default App
