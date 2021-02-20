import React from 'react'
import ListTask from './list_task/ListTask'
import FilterTask from './filter_task/FilterTask'
import AddTask from './add_task/AddTask'
import { Provider } from 'react-redux'
import store from '../redux/store'
import './styleToDoApp.css'



const ToDoApp = () => {
    return (
        <Provider store={store}>
        <div className='app'>
            <div className='todoapp'>
                <FilterTask />
                <ListTask />
            </div>
            <div className='addT'>
                <AddTask />
            </div>
        </div>
        </Provider>
    )
}

export default ToDoApp
