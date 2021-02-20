import { Add_NewTodo, Filter_Todo , Edit_Todo} from './ToDotype'


export const AddNewTodo =(newToDo)=>{
    return {
        type : Add_NewTodo,
        payload : newToDo
    }
}

export const FilterTodo =(isDone)=>{
    return {
        type : Filter_Todo,
        payload : isDone
    }
}

export const EditTodo = obj =>{
    return {
        type : Edit_Todo,
        payload : obj
    }
}
