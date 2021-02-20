import React from 'react'
import Task from '../task/Task'
import { connect } from 'react-redux'
import './styleListTask.css'

const ListTask = (props) => {
    console.log(props)
    return (
        <div className="list-task">
            <h2>Todo List :</h2>
            <ul>
                {props.listTodo.map((todo,index) =>{
                    return <Task todo={todo} key={index} i={index}/>
                })
                    
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        listTodo : state.listTodo
    }
}

export default connect(mapStateToProps)(ListTask)
