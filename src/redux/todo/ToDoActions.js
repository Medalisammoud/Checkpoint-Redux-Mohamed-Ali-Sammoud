import { ADD_TODO, FILTER_TODO , EDIT_TODO ,DELETE_TODO, EDIT_ISDONE } from './ToDotype'

export const AddNewTodo =(newToDo)=>{
    return {
        type : ADD_TODO,
        payload : newToDo
    }
}

export const EditTodo = (id,descrp) =>{
    return {
        type : EDIT_TODO,
        payload : {
            id,
            descrp
        }
    }
}

export const DeleteTodo = id =>{
    return {
        type : DELETE_TODO,
        payload : id
    }
}

export const EditIsDone = id =>{
    return {
        type : EDIT_ISDONE,
        payload : id
    }
}