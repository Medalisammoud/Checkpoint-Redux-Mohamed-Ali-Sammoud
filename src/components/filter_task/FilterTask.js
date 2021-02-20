import React from 'react'
import { connect } from 'react-redux'
import { FilterTodo } from '../../redux/todo/ToDoActions'
import { Form } from 'react-bootstrap';
import './styleFilterTask.css'

const FilterTask = (props) => {
    const handleChangeSearch = (e)=>{
        e.target.value === 'true'?props.FilterTodo(true):props.FilterTodo(false)
    }
    
    return (
        <div className='search'>
            <Form.Control onChange={handleChangeSearch} style={{width: '300px', marginRight:'30px'}} as="select" htmlSize={2} custom>
                <option value='true'>True</option>
                <option value='false'>False</option>
            </Form.Control>
        </div>
    )
}
const mapDispatchToProps = (dispatsh) =>{
    return{
        FilterTodo : isDone =>dispatsh(FilterTodo(isDone))
    }
}
export default connect (null,mapDispatchToProps)(FilterTask)
