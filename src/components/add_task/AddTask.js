import React,{ useState } from 'react'
import {connect} from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import {AddNewTodo} from '../../redux/todo/ToDoActions'
import './styleAddTask.css'
const AddTask = (props) => {
    
    const [newToDo, setNewToDo] = useState({
        id : Math.random(),
        description : "",
        isDone : false
    })
    const [description, setdescription] = useState('')
    const handleChangeInput = (e)=>{
    setNewToDo({
        ...newToDo,
        description : e.target.value
        })
        setdescription(e.target.value);
    }
    console.log(newToDo)
    return (
        <div className='addTask'>
            <h2>Add To Do :</h2>
            <Form.Control type="text" placeholder="To Do Description" value={description} onChange={handleChangeInput}/>
            <Button style={{width:'120px',margin:'30px 0 0 150px'}} variant="light" onClick={()=>{props.AddNewTodo(newToDo);setdescription('')}}>Add ToDo</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        AddNewTodo : newToDo => dispatch(AddNewTodo(newToDo))
    }
}
export default connect(null,mapDispatchToProps)(AddTask)
