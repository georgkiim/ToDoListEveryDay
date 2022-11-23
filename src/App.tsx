import React, {useState} from "react";
import {v1} from "uuid";
import ToDoList, {TaskType} from "./ToDoList";
import {Hash} from "crypto";


export type SetFilterType = 'All' | 'Active' | 'Completed'

const App = () => {

    const [task1, setTask1] = useState<Array<TaskType>>([
        {id: v1(), title: 'Do 1', isDone: true, main: "My Tasks!!!"},
        {id: v1(), title: 'Do 2', isDone: true, main: "My do!!!"},
        {id: v1(), title: 'Do 3', isDone: false, main: "My s!!!"},
    ])

    const [filter, setFilter] = useState<SetFilterType>('Active')

    const removeTask = (id: string) => {
        const task2 = task1.filter(t => t.id !== id)
        setTask1(task2)
    }

    const setNextFilter = (nextFilter: SetFilterType) => {
        setFilter(nextFilter)
    }
    const getFilterToDo = (task1: Array<TaskType>, filter: SetFilterType): Array<TaskType> => {
        switch (filter) {
            case 'Active':
                return task1.filter(t => !t.isDone)
            case 'Completed':
                return task1.filter(t => t.isDone)
            default: return task1
        }}



    //     let filterToDo = task1
    //     if (filter == 'All') {
    //         filterToDo = task1
    //     } else if (filter == 'Active') {
    //         filterToDo = task1.filter(t => !t.isDone)
    //     } else if (filter == 'Completed') {
    //         filterToDo = task1.filter(t => t.isDone)
    //     }
    //     return filterToDo
    // }

    // let filterToDo = task1
    // if (filter == 'All') {
    //     filterToDo = task1
    // } else if (filter == 'Active') {
    //     filterToDo = task1.filter(t => t.isDone == false)
    // } else if (filter == 'Completed') {
    //     filterToDo = task1.filter(t => t.isDone == true)
    // }

    const addTask = (title: string) => {
        // const newTask: TaskType = {id: v1(), title, isDone: false, main: 'Hash'}
        // const copyTask = [...task1]
        // copyTask.push(newTask)
        setTask1([{id: v1(), title, isDone: false, main: 'Hash'}, ...task1])
    }

    return (
        <div>
            <ToDoList title={"Hi!!"}
                      task={getFilterToDo(task1,filter)}
                      removeTask={removeTask}
                      setNextFilter={setNextFilter}
                      addTask={addTask}
            />
        </div>
    )
}

export default App