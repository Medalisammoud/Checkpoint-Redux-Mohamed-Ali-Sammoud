
import React,{ useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Form } from 'react-bootstrap';
import './styleFilterTask.css'

const FilterTask = ({ setTodoList, titleDone, setTitleDone }) => {

    const listTodo = useSelector(state => state.listTodo)

    useEffect(() => {
        filterTodo()
    })
    const filterTodo = () =>{
        switch (titleDone) {
            case 'All':
                setTodoList(listTodo);
                break;
            case 'Is Done':
                setTodoList(listTodo.filter(todo=>{return todo.isDone === true}))
                break;
            case 'Is Not Done':
                setTodoList(listTodo.filter(todo=>{return todo.isDone === false}))
                break;
            default:return listTodo
        }
    } 
    return (
        <div className='search'>
            <Form.Control onChange={(e)=>setTitleDone(e.target.value)} style={{width: '300px', marginRight:'30px'}} as="select" htmlSize={2} custom>
            <option value='All'>All</option>
                <option value='Is Done'>Is Done</option>
                <option value='Is Not Done'>Is Not Done</option>
            </Form.Control>
        </div>
    )
}

export default FilterTask
