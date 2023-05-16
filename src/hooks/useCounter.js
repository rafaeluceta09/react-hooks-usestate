
import { useState } from "react";

export const useCounter = (initValue = 10) => {
    const [counter, setcounter] = useState(initValue) ;

    const onHandledPlus = ( value = 1 ) => {
        setcounter( c => c + value)

    }

    const onHandledLess = () => {
        setcounter( ( c ) => c - 1);

    }

    const reset = () => {
        setcounter(10);

    }










    return {
        counter,
        onHandledPlus,
        onHandledLess,
        reset

    }
}
