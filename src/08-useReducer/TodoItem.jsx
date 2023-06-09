
export const TodoItem =( {todo, onDeleteTodo, onTogleTodo } ) =>{
    return(
        <>
            <li  className="list-group-item d-flex justify-content-between">
                <span 
                    className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ' '} `}
                    onDoubleClick={ () => onTogleTodo(todo.id)}
                > 
                    { todo.description } 
                </span>
                    <button  className="btn btn-danger btn-sm"
                            onClick={ () => onDeleteTodo(todo.id)}>
                        Borrar 
                    </button>
            </li>
        </>
    )
}