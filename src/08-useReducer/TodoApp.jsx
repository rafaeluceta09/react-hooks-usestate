import { useReducer, useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import { OnNewTodo } from "./OnNewTodo";
import { TodoReducer } from "./TodoReducer";

const initialState =[
    {
        id : new Date().getTime() + 150,
        description : 'buscar libro de DIOS la biblia',
        done : false
    },
];

const init = (params) => {
    return JSON.parse(localStorage.getItem('todos')) || [] ;//si no encuentra el todo entonces retorna un arraat en blanco;
}

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(TodoReducer, initialState,init)

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

  return (
    <>
        <h1> TodoApp </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos= { todos }  />
            </div>

            <div className="col-5">
                <h4> agregar TODO</h4>
                <hr />
                <OnNewTodo handleTarea ={ handleTarea }  />
            </div>
        </div>
    </>
  )
}
