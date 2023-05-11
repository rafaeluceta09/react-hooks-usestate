import { useState } from 'react'

export const CounterApp = () => {

    const [counter, setcounter] = useState({counter1 : 10 , counter2 : 20, counter3 : 30});
    const {counter1, counter2, counter3} = counter;


    const handledCounter = ( ) => {

        setcounter({
            ...counter , //con esta funcionalidad lo que hago es clonar el mismo stado del state y le modifico la propiedad counter1
            counter1: counter1 + 1 });

    }

  return (
    <>
    <h1> { counter1 } </h1>
    <h1> { counter2 } </h1>
    <h1> { counter3 } </h1>

        <button onClick={ handledCounter }>
            + 1
        </button>
    </>
  )
}
