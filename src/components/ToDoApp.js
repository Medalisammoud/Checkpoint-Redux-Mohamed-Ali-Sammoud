import React from 'react'
import ListTask from './list_task/ListTask'
import FilterTask from './filter_task/FilterTask'
import AddTask from './add_task/AddTask'

import './styleToDoApp.css'



const ToDoApp = () => {
    return (
        <div className='app'>
            <div className='todoapp'>
                <FilterTask />
                <ListTask />
            </div>
            <div className='addT'>
                <AddTask />
            </div>
        </div>
    )
}

export default ToDoApp
