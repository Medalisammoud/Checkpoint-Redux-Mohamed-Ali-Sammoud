import React,{ useState } from "react"
import { connect } from 'react-redux'
import { EditTodo } from '../../redux/todo/ToDoActions'
import editImg from '../../assets/edit.png'
import editOk from '../../assets/yes.png'
import './styleTask.css'

const Task = ({todo,i}) => {
  console.log(todo)
    const [show, setShow] = useState(false)
    const [input, setInput] = useState(todo.description)
    
const handleClickEdit = () =>{
  setShow(!show)
}
const handleClickEditOk = () =>{
  EditTodo([{
    id:todo.id,
    description : input,
    isDone : todo.isDone
  },i])
  setShow(!show)
  setInput(todo.description)
}
  return (
    <div className='task'>
      {show ? <input type='text' value={input} className='input-edit' onChange={(e) => setInput(e.target.value)}/>:
      todo.isDone ? <li className='done'>{todo.description}</li> : <li>{todo.description}</li>}
        <div className='image'>
        {show ?
          <img src={ editOk } alt='editok' onClick={handleClickEditOk}/>
          :<img src={ editImg } alt='edit' onClick={handleClickEdit}/>}
          
        </div>
    </div>
  );
};

const mapDispatchToProps = (dispatsh) =>{
  return{
    EditTodo : obj =>dispatsh(EditTodo(obj)),
  }
} 

export default connect(null,mapDispatchToProps)(Task);
