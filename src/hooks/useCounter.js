
import { useState } from "react";

export const useCounter = (initValue = 10) => {
    const [counter, setcounter] = useState(initValue) ;

    const onHandledPlus = ( value = 1 ) => {
        setcounter( c => c + value) //cuando lo hacemos asi recibe el valor actualizado

    }
    const onHandledLess = (value = 1 ) => {
        setcounter( ( c ) => c - value);

    }
    const reset = () => {
        setcounter(initValue);

    }










    return {
        counter,
        onHandledPlus,
        onHandledLess,
        reset

    }
}
