import React,{ useState } from 'react'
import ListTask from './list_task/ListTask'
import FilterTask from './filter_task/FilterTask'
import AddTask from './add_task/AddTask'
import './styleToDoApp.css'



const ToDoApp = () => {
    const [todoList, setTodoList] = useState([])
    const [titleDone, setTitleDone] = useState('')
    return (
        <div className='app'>
            <div className='todoapp'>
                <FilterTask setTodoList={setTodoList} titleDone={titleDone} setTitleDone={setTitleDone} />
                <ListTask todoList={todoList} titleDone={titleDone}/>
            </div>
            <div className='addT'>
                <AddTask />
            </div>
        </div>
    )
}

export default ToDoApp
