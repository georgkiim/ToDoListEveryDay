import {KeyboardEvent, ChangeEvent, useState} from "react";
import React from "react";
import {FilterType} from "./App";

export type TaskType = {
    id: string
    title: string
    doIt: boolean
}

type PropsType = {
    title: string
    task: Array<TaskType>
    addTask: (title: string) => void
    deleteTask: (id: string) => void
    filterNewState: (nextFilter:FilterType)=>void

}

const ToDoList = (props: PropsType) => {

    const [title, setTitle] = useState('')
    const createTasksList = props.task.map((t) => {
        return <li key={t.id}>
            <span> {t.title} </span>
            <input type={"checkbox"} checked={t.doIt}/>
            <button onClick={() => props.deleteTask(t.id)}>Delete</button>
        </li>
    })
    const nextInputValue = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEnterAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            props.addTask(title);
            setTitle('');
        }
    }
    const deleteTaskClick = () => {
        props.addTask(title)
        setTitle('')
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <input
                value={title}
                onKeyDown={onEnterAddTask}
                onChange={nextInputValue}/>
            <button onClick={deleteTaskClick}>+</button>
            <ul>
                {createTasksList}
            </ul>
            <button onClick={()=>props.filterNewState('all')} >All</button>
            <button onClick={()=>props.filterNewState('active')}>Active</button>
            <button onClick={()=>props.filterNewState('completed')}>Complete</button>
        </div>
    )
}

export default ToDoList