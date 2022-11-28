import React, {useState} from "react";
import {ToDoListPropsType} from "./App";


const ToDoList = (props: ToDoListPropsType) => {

    const [title, setTitle] = useState('')

    const taskList = props.tasks.map(t => <li key={t.id}>
        <span>{t.task}</span><input type={"checkbox"}
                                    checked={t.check}/>
        <button onClick={()=>props.removeTask(t.id)}>Delete</button>
    </li>)

    const addNewTask = (title: string) => {
        props.addTask(title)
        setTitle("")
    }


    return (
        <div>
            <h1>titleee</h1>
            <input
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        return addNewTask(title)
                    }
                }}
            />
            <button onClick={() => addNewTask(title)}>ADD</button>
            <ul>
                {taskList}
            </ul>
            <button onClick={()=>props.getFilter('all')}>All</button>
            <button onClick={()=>props.getFilter('active')}>Active</button>
            <button onClick={()=>props.getFilter('completed')}>Complete</button>
        </div>
    )
}

export default ToDoList