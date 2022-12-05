import React, {ChangeEvent, useState} from "react";
import {FilterType, TaskType} from "./App";
import './ToDoList.css'


type ToDoListPropsType = {
    tasks: TaskType[]
    addTask: (task: string) => void
    setChecked: (id: string, isDone: boolean) => void
    removeTask: (id: string) => void
    setNewFilter: (nexFilter: FilterType) => void
}

const ToDoList = (props: ToDoListPropsType) => {

    const [task, setTask] = useState<string>('')
    const [error, setError] = useState<string>('')
    const taskList = props.tasks.map(t => {
        const changeStatus = (e: ChangeEvent<HTMLInputElement>) => props.setChecked(t.id, e.currentTarget.checked)
        const onClickRemoveTask = () => props.removeTask(t.id)
        return (<li key={t.id} className='list'>
                <span>{t.task}</span>
                <input type={"checkbox"}
                       checked={t.isDone}
                       onChange={changeStatus}/>
                <button onClick={onClickRemoveTask}>X</button>
            </li>
        )
    })
    const addNewTask = () => {
        if (task.trim() !== '') {
            props.addTask(task)
            setTask('')
        } else setError('NOOOO')

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.currentTarget.value)
        setError('')
    }
    const onClickSetNewFilter = (n: FilterType) => () => props.setNewFilter(n)
    return (
        <div>
            <h3 className='text'>ToDo List</h3>
            <input
                value={task}
                onChange={onChangeHandler}
            />
            <button onClick={addNewTask}>ADD TASK</button>
            <div>{error}</div>
            <ul>
                {taskList}
            </ul>
            <button onClick={onClickSetNewFilter('all')}>All</button>
            <button onClick={onClickSetNewFilter('active')}>ACTIVE</button>
            <button onClick={onClickSetNewFilter('completed')}>Completed</button>
        </div>
    )
}

export default ToDoList