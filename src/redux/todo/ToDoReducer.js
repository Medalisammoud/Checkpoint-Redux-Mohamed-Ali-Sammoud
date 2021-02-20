import { Add_NewTodo, Filter_Todo , Edit_Todo } from './ToDotype'



const initialState ={
    listTodo : [
        {id:Math.random(),description:'Create React Application',isDone:false},
        {id:Math.random(),description:'Create Component Liste Task',isDone:true},
        {id:Math.random(),description:'Create Component Task',isDone:false},
        {id:Math.random(),description:'Create Component Filter',isDone:true},
        {id:Math.random(),description:'Create Component Add Task',isDone:false}
    ]
}


const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_NewTodo:
            return {
                listTodo : [...state.listTodo,action.payload]
            }
            case Filter_Todo:{
                state.listTodo.length < initialState.listTodo.length  && (state = initialState)
                const todolist=state.listTodo.filter( todo => { return todo.isDone === action.payload});
            return {
                listTodo : todolist
            }}
            case Edit_Todo:
                const todolist=state.listTodo.map((todo,i) => {return i !== action.payload[0] ?  todo : action.payload[1] })
                console.log(todolist)
            return {
                listTodo : todolist
            }
            
        default : return state
    }
}

export default ToDoReducer ;
