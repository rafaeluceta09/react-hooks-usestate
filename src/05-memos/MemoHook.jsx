import { useState, useMemo } from 'react';
import { useCounter } from '../hooks/useCounter';

  const heavyStuff = (iterationNumber = 5000) => {
    for(let i = 0; i < iterationNumber; i++ ){

      console.log( `hay Vamos ....` );

    }
     return ( `${iterationNumber} iteraciones Realizadas ` );

  }

export const MemoHook = () => {

  const [show, setShow] = useState(false);
  const { counter, onHandledPlus } =useCounter(300)

  const memorizedStuff = useMemo( () =>  heavyStuff(counter), [counter] ); //solo cambia cuando el counter cambia


  return (
    <>
        <h1> trabajando con Memo Hook( recuerda las los valores )</h1>
        <h2> { memorizedStuff } </h2>

        <button
        className='btn btn-primary'
        onClick={ () => setShow( !show) }>
            Show / Hide {  JSON.stringify(show).toUpperCase() /* para imprimir una variable bolena se usa Json.stringify(variable_bool)*/ } 
        </button>
        <button
        className='btn btn-info mb-2'
        onClick={ () => onHandledPlus(1) }
        > 
            setCounter
        </button>
    
    </>
  )
}
