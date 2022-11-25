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
    const addNewTask = () =>{
        props.addTask(title)
        setTitle('')
    }
    const sentLocalTitle = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEnterAddTask = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key=='Enter'){
            addNewTask()
        }
    }
    const taskListItem =  props.task.map((t) => {
            return <li key={t.id}>
                <input type={"checkbox"} checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>X</button>
            </li>
        })
    const onClickHandlerCreator = (filter: SetFilterType) => () => props.setNextFilter(filter)



    return (
        <div>
            <h3>{props.title}</h3>
            <input
                 value={title}
                onKeyDown={onEnterAddTask}
                onChange={sentLocalTitle}/>
            <button onClick={addNewTask}>+</button>
            <ul>
                {taskListItem}
            </ul>
            <button onClick={onClickHandlerCreator("All")}>All</button>
            <button onClick={onClickHandlerCreator('Active')}>Active</button>
            <button onClick={onClickHandlerCreator('Completed')}>Completed</button>
        </div>
    )
}
export default ToDoList