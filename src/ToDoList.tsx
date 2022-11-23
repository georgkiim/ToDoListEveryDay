import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import {SetFilterType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
    main: string
}

type PropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (id: string) => void
    setNextFilter: (nextFilter: SetFilterType) => void
    addTask: (title: string) => void
}

const ToDoList = (props: PropsType) => {
    const [title, setTitle] = useState<string>('')

    const addTask = () =>{
        props.addTask(title)
        setTitle('')
    }
    const sentLocalTitle = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEnterAddTask = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key=='Enter'){
            addTask()
        }
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <input
                onKeyDown={onEnterAddTask}
                value={title}
                onChange={sentLocalTitle}/>
            <button onClick={() => {
                addTask()
            }}>+</button>
            <ul>
                {props.task.map((t) => {
                    return <li key={t.id}>
                        <input type={"checkbox"} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => props.removeTask(t.id)}>X</button>
                    </li>
                })}

            </ul>
            <button onClick={() => props.setNextFilter("All")}>All</button>
            <button onClick={() => props.setNextFilter('Active')}>Active</button>
            <button onClick={() => props.setNextFilter('Completed')}>Completed</button>
        </div>
    )
}
export default ToDoList