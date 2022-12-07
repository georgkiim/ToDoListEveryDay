import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string
    title: string
}
type TasksType = {
    [key: string]: {
        data: TaskType[]
        filter: FilterValuesType
    }
}

function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();


    let [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistId1, title: "What to learn"},
        {id: todolistId2, title: "What to buy"}
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistId1]: {
            data: [
                {id: v1(), title: "HTML&CSS1111", isDone: true},
                {id: v1(), title: "JS1111", isDone: true}
            ],
            filter: "all"
        },
        [todolistId2]: {
            data: [
                {id: v1(), title: "HTML&CSS22222", isDone: true},
                {id: v1(), title: "JS2222", isDone: true}
            ],
            filter: "all"
        }
    });


    // let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(toDoListId: string, taskId: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        let tasksDataFilter = tasks[toDoListId]
        setTasks({
            ...tasks,
            [toDoListId]: {data: tasksDataFilter.data.filter(t => t.id !== taskId), filter: tasksDataFilter.filter}
        })
    }

    function addTask(toDoListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasksDataFilter = tasks[toDoListId]
        // let newTasks = [task, ...tasks];
        setTasks({...tasks, [toDoListId]: {data: [task, ...tasksDataFilter.data], filter: tasksDataFilter.filter}});
    }

    function changeStatus(toDoListId: string, taskId: string, isDone: boolean) {
        let tasksDataFilter = tasks[toDoListId]
        setTasks({...tasks,
            [toDoListId]: {
                data: tasksDataFilter.data.map(t => t.id == taskId ? {...t, isDone} : t),
                filter: tasksDataFilter.filter
            }
        })
    }

    const removeToDoList = (toDoListId: string) => {
        setTodolists([...todolists.filter(t => t.id !== toDoListId)])
    }


    // let tasksForTodolist = tasks;
    //
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(id: string, value: FilterValuesType) {
        // setFilter(value);
        // setTodolists(todolists.map(t => t.id === id ? {...t, filter: value} : t))
        let tasksDataFilter = tasks[id]
        setTasks({...tasks, [id]: {data: tasksDataFilter.data, filter: value}})
    }


    return (

        <div className="App">
            {todolists.map(t => {
                let tasksForTodolist = tasks[t.id].data;

                if (tasks[t.id].filter === "active") {
                    tasksForTodolist = tasks[t.id].data.filter(t => t.isDone === false);
                }
                if (tasks[t.id].filter === "completed") {
                    tasksForTodolist = tasks[t.id].data.filter(t => t.isDone === true);
                }
                return <Todolist key={t.id}
                                 toDoListId={t.id}
                                 title={t.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 filter={tasks[t.id].filter}
                                 removeToDoList={removeToDoList}
                />
            })}

        </div>
    );
}

export default App;
