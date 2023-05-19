
export const TodoItem =( {id, description,value=0 } ) =>{
    return(
        <>
            <li  className="list-group-item d-flex justify-content-between">
                <span className="align-self-center"> { description } </span>
                    <button  className="btn btn-danger btn-sm">
                        Borrar 
                    </button>
            </li>
        </>
    )
}