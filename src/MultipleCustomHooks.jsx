import { useFetch } from "./hooks/useFetch";
import { useCounter } from "./hooks/useCounter";

export const MultipleCustomHooks = () => {

    const { counter , onHandledPlus } = useCounter();
    console.log(counter);

    const { data, isLoader,hasError} = useFetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
     //con este operador doble negacion lo que hacemos que
     // convierte el null a true y luego el true a false
     const {id , title } = !!data && data ;
  return (

    <>
        <div className="container" >
          <h3> Breackin Bad</h3>
  
          <div className="">
            { 
            isLoader
             ? ( 
               <div className="alert aler-info"> cargando ....</div>

             )
             : 
             ( 
                <blockquote className="blockquote text-end">
                  <p className="text-right "> { id } </p>
                  <footer className="blockquote-footer"> { title }  </footer>
                  <button className="btn btn-primary"
                  onClick = { () => onHandledPlus(1) } > siguiente </button>
                </blockquote>

             )

            }




          </div>


        </div>
    </>
  )
}


