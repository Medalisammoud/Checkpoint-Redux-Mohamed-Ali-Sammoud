import React,{ useState } from "react"
import { useDispatch } from 'react-redux'
import { EditTodo ,DeleteTodo,EditIsDone } from '../../redux/todo/ToDoActions'
import editImg from '../../assets/edit.png'
import editOk from '../../assets/add.png'
import deletImg from '../../assets/delete.png'
import doneImg from '../../assets/yes.png'
import notdoneImg from '../../assets/no.png'
import './styleTask.css'

const Task = ({todo}) => {
  const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [inputdesc, setInputDesc] = useState(todo.description)


  return (
    <div className='task'>
      {show ? <input type='text' value={inputdesc} className='input-edit' onChange={(e) => setInputDesc(e.target.value)}/>:
      todo.isDone ? <li className='done'>{todo.description}</li> : <li>{todo.description}</li>}
        <div className='image'>
        {show ?
          <img src={ editOk } alt='editok' onClick={()=>
            {
            dispatch(EditTodo(todo.id,inputdesc))
            setShow(!show)
          }}/>
          :
          <>
          <img src={ editImg } alt='edit'onClick={()=>setShow(!show)}/>
          <img src={ deletImg } alt='delete' onClick={()=> dispatch(DeleteTodo(todo.id))}/>
          {todo.isDone ? <img src={ doneImg } alt='done' onClick={()=> dispatch(EditIsDone(todo.id))}/> 
          : <img src={ notdoneImg } alt='done' onClick={()=> dispatch(EditIsDone(todo.id))}/> }
          </>}
          
        </div>
    </div>
  );
};


export default Task
