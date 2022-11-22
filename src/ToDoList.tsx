import {FilterValuesType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    task: Array<TaskType>
    removeTask : (id:number) => void
    changeFilter: (next: FilterValuesType) => void
}

const ToDoList = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <input/><button>+</button>
            <ul>
                {props.task.map( (t)=> {
                    return (
                        <li key={t.id}>
                            <span>{t.title}</span>
                            <input type={"checkbox"} checked={t.isDone}/>
                            <button onClick={()=> {props.removeTask(t.id)} }>X</button>
                        </li>

                    )
                })}
                <button onClick={()=> {props.changeFilter("Active")}}>Active</button>
                <button onClick={()=> {props.changeFilter("Completed")}}>Completed</button>
                <button onClick={()=> {props.changeFilter("All")}}>All</button>
            </ul>
        </div>
    )
}

export default ToDoList