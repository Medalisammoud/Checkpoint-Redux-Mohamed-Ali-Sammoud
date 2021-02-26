import { ADD_TODO, FILTER_TODO , EDIT_TODO ,DELETE_TODO, EDIT_ISDONE } from './ToDotype'



const initialState ={
    listTodo : [
        {id:Math.random(),description:'Create React Application',isDone:false},
        {id:Math.random(),description:'Create Component Liste Task',isDone:false},
        {id:Math.random(),description:'Create Component Task',isDone:false},
        {id:Math.random(),description:'Create Component Filter',isDone:false},
        {id:Math.random(),description:'Create Component Add Task',isDone:false}
    ]
}


const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                listTodo : [...state.listTodo,action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                listTodo : state.listTodo.filter(todo => todo.id !== action.payload && todo )
            }
        case EDIT_TODO:
            return {
                ...state,
                listTodo : state.listTodo.map((todo) => {return  todo.id === action.payload.id ? {...todo , description : action.payload.descrp } : todo })
            }
            case EDIT_ISDONE:
            return {
                ...state,
                listTodo : state.listTodo.map((todo) => {return  todo.id === action.payload ? {...todo , isDone : !todo.isDone } : todo })
            }
        default : return state
    }
}

export default ToDoReducer ;
