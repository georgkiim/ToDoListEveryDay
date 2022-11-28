import React, {useState} from "react";
import {v1} from "uuid";
import ToDoList from "./ToDoList";


export type TaskType = {
    id: string
    task: string
    check: boolean
}

export type ToDoListPropsType = {
    tasks: Array<TaskType>
    addTask: (task: string) => void
    removeTask: (id: string) => void
    getFilter: (nextFilter: FilterType) => void
}

export type FilterType = 'all' | 'active' | 'completed'
const App = () => {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: 'Igor', check: false},
        {id: v1(), task: 'Igor', check: false},
        {id: v1(), task: 'Igor', check: false},
        {id: v1(), task: 'Igor', check: false},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => id !== t.id))
    }

    const addTask = (task: string) => {
        return (
            setTasks([{id: v1(), task, check: false}, ...tasks])
        )
    }

    const getFilter = (nextFilter: FilterType) => {
        setFilter(nextFilter)
    }

    const newTasksFilter = (task: Array<TaskType>, filter: FilterType) => {
        switch (filter) {
            case 'active':
                return tasks.filter(t => !t.check)
            case 'completed':
                return tasks.filter(t => t.check)
            case 'all' :
                return tasks
        }
    }


    return (

        <div>
            <ToDoList tasks={newTasksFilter(tasks, filter)}
                      addTask={addTask}
                      removeTask={removeTask}
                      getFilter={getFilter}
            />
        </div>
    )
}

export default App
