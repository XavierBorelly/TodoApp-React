import Todo from '../../modele/Todo'
import {ADD_TODO, REMOVE_ALL} from '../actions/todos.action'

export const initialState = {
    todos: [
        new Todo(1, "test54", false),
        new Todo(2, "Griffon", true),
        new Todo(3, "Dominer le monde", false),
    ]
}

export default function todosReducer (state = initialState, action) {

    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [action.todo, ...state.todos]
            }
        }
        case REMOVE_ALL: {
            return {
                ...state,
                todos: []
            }
        }
        default:
            return state;
    }
}