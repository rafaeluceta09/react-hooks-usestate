import { useFormState } from "./hooks/useFormState"

export const FormWitchCustomHooks = () => {

    const { formState, onChangeFornItems, resetForm: onResetForm } = useFormState({userName:'',userPassword:'',userEmail:''});

    const { userName, userPassword, userEmail } = formState;

  return (
    <>
        <div className="container">
            <h3 className="heading">Formulario Creacion De Correo</h3>

            <div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input  name="userName" 
                                type="text" 
                                value={ userName }
                                onChange={ onChangeFornItems }
                                className="form-control"
                                
                                />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input  name="userPassword" 
                            type="text" 
                            value={ userPassword }
                            onChange={ onChangeFornItems }
                            className="form-control"
                            
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                    <input  name="userEmail" 
                            type="text" 
                            value={ userEmail }
                            onChange={ onChangeFornItems }
                            className="form-control"
                            
                            />
                    </div>
                    <button className="btn btn-light"
                            onClick={ onResetForm }> Reset</button>
                </form>
                       
            </div>

        </div>
    </>
  )
}
