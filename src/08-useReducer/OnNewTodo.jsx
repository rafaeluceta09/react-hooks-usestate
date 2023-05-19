import { useFormState } from "../hooks/useFormState"

export const OnNewTodo = ({ handleTarea }) => {
  const { description ,onResetForm ,onChangeFornItems} = useFormState(
                                                                        {
                                                                          description : '' 
                                                                        } 
                                                                      );

  const onSubmitForm =(event) => {

    event.preventDefault();

    let newTarea = {
      id : new Date().getTime(),
      description : description,
      done : false
    };

    handleTarea(newTarea);

    onResetForm();
 


  }

  return (
    <>
    <form onSubmit={ onSubmitForm }>
        <input type="text" 
            className="form-control"
            placeholder="ingrese una nueva tarea" 
            name="description"
            value={ description }
            onChange={onChangeFornItems}

        />
        <button
            type="submit"
            className="btn btn-primary mb-5">
            Add Tarea 
        </button>
    </form>
    
    </>
  )
}
