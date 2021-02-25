import React from 'react'
import Task from '../task/Task'
import { useSelector } from 'react-redux'
import './styleListTask.css'

const ListTask = (props) => {
    const listTodo = useSelector(state => state.listTodo)
    return (
        <div className="list-task">
            <h2>Todo List :</h2>
            <ul>
                {listTodo.map((todo) =>{
                    return <Task todo={todo} key={todo.id} />
                })
                    
                }
            </ul>
        </div>
    )
}


export default ListTask
