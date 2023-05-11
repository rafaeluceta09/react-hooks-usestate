import { useEffect, useState } from "react"
import { Messagge } from "./Messagge";


export const SimpleForm = () => {

    const [ stateForm, setStateForm ] = useState({
            userName : 'stalin', 
            userEmail: 'suceta@goplaca.com'});

    const { userName, userEmail } = stateForm ;

    const onChangeForm = ({target}) =>{
        
        let _element = target.name
        let _value   = target.value;
        setStateForm({ ...stateForm, [_element] : _value });
       // console.log(stateForm);
    }

    useEffect(() => {
     //console.log('init form');   
    },[]); //cuando no se espeficica unu argumento en los corchetes solo se ejecuta cuando inicializa el docuento

    //en este usseEffect solo entra la funcion cuando se cambia el userEmail, de lo contrario no entra
    useEffect(() =>{

        //console.log('change the email ...');   

    },[userEmail]);





  return (
    <>
        <div className="container">
            <form>
                <h3 className=""> </h3>

                <div className="mb-3">
                    <label className="form-label">name</label>
                    <input name="userName" 
                    className="form-control" 
                    type="text"  
                    onChange={ onChangeForm }
                    value={ userName }  />            
                </div>

                <div className="mb-3">
                    <label>email</label>
                    <input type="text"
                            name="userEmail" 
                            className="form-control" 
                            onChange={ onChangeForm }
                            value={ userEmail }  
                            />            
                </div>

                {
                  (userName === 'stalin1') &&   < Messagge />
                }

            </form>
        </div>
    </>
    
  )
}
