import {useReducer, useEffect} from 'react'
import { TodoReducer } from './TodoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [] ;//si no encuentra el todo entonces retorna un arraat en blanco;
}
export const useTodos = (initialState = []) => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));

    }, [todos]);
    
    const handleTarea = (todo) =>{  
        let newAction = {
            payload : todo,
            type  : '[TODO] add Todo'
        };

        dispatch( newAction );   
    }

    const deleteTodo = (id) =>{  
        let deleteAction = {
            payload : id,
            type  : '[TODO] Delete Todo'
        };

        dispatch( deleteAction );   
    }
    const togleTodo = (id) =>{  
        let deleteAction = {
            payload : id,
            type  : '[TODO] Togle Todo'
        };

        dispatch( deleteAction );   
    }
    return {
        handleTarea,
        deleteTodo,
        togleTodo,
        todos
    }
}
