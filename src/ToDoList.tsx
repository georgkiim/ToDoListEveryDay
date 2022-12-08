import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddToDoList} from "./AddToDoList";
import {EditAbleSpan} from "./EditAbleSpanType";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    toDoListId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (toDoListId: string, taskId: string) => void
    changeFilter: (id: string, value: FilterValuesType) => void
    addTask: (toDoListId: string, title: string) => void
    changeTaskStatus: (toDoListId: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeToDoList: (toDoListId: string) => void
    changeTask:(toDoListId: string, taskId: string, title: string)=>void
    changeTitle:(toDoListId: string,  title: string)=>void
}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => props.changeFilter(props.toDoListId, "all");
    const onActiveClickHandler = () => props.changeFilter(props.toDoListId, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.toDoListId, "completed");
    const onDeleteTodolistHandler = () => props.removeToDoList(props.toDoListId)
    const addTask = (title:string) =>{
        props.addTask(props.toDoListId, title)
    }
    const changeTitle =(title:string)=>{
        props.changeTitle(props.toDoListId, title)
    }

    return <div>
        <h3><EditAbleSpan title={props.title} changeName={changeTitle}/></h3>
        <AddToDoList addItem={addTask} />
        <button onClick={onDeleteTodolistHandler}>X</button>

        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.toDoListId, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.toDoListId, t.id, e.currentTarget.checked);
                    }
                    const changeTask = (title:string) =>{
                        props.changeTask(props.toDoListId, t.id, title)
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <EditAbleSpan title={t.title} changeName={changeTask}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


