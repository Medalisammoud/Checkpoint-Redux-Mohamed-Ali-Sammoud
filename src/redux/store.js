import { createStore } from 'redux'
import ToDoReducer from './todo/ToDoReducer'

const store = createStore (ToDoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;