import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import {FilterType, TaskType} from "./App";

type PropsType = {
    tasks: TaskType[]
    addTask: (task: string) => void
    removeTask: (id: string) => void
    changeCheck: (id: string, isDone: boolean) => void
    setFilteredTasks: (newFilter: FilterType) => void
    filter: FilterType
}


const ToDoList = (props: PropsType) => {
    const [task, setTask] = useState('')
    const [error, setError] = useState('')
    const tasksList = props.tasks.length !== 0
        ? props.tasks.map(t => {
            return (
                <li key={t.id} className={t.isDone===true?'isDone':'tit'} >
                    {t.task}
                    <input
                        onChange={(e) => props.changeCheck(t.id, e.currentTarget.checked)}
                        type={"checkbox"} checked={t.isDone}/>
                    <button onClick={() => props.removeTask(t.id)}>Удалить</button>
                </li>

            )
        }) : 'Список задач пуст!:)'

    const addNewTask = () => {
        if (task.trim() !== '') {
            props.addTask(task)
            setTask('')
            setError('')
        } else {
            setError("Введите задачу!")
        }
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewTask()
        }
    }


    return (
        <div className="todolistDone">
            <h2 className='header'> Список задач</h2>
           <div className='poop'>
            <input
                value={task}
                onChange={(e) => {
                    setTask(e.currentTarget.value)
                    setError("")
                }}
                onKeyDown={(e) => onEnter(e)}
                className={error ? 'error' : 'inputciv'}
            />
            <button className='addButton' onClick={() => addNewTask()}>Добавить задачу</button>
            {error && <div className='error-message'>{error}</div>}
           </div>
            <ul>
                {tasksList}
            </ul>
            <button className={props.filter === 'all' ? 'button-active' : ''}
                    onClick={() => props.setFilteredTasks('all')}>
                Все здачи
            </button>
            <button
                className={props.filter === 'active' ? 'button-active' : ''}
                onClick={() => props.setFilteredTasks('active')}>
                Надо делать!
            </button>
            <button
                className={props.filter === 'completed' ? 'button-active' : ''}
                onClick={() => props.setFilteredTasks('completed')}>
                Завершенные
            </button>
        </div>
    )
}


export default ToDoList