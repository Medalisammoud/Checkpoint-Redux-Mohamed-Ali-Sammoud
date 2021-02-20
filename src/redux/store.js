import { createStore } from 'redux'
import ToDoReducer from './todo/ToDoReducer'

const store = createStore (ToDoReducer);

export default store;