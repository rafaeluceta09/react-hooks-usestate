import { useCallback, useState } from "react";
import { ShowButton } from "./ShowButton";

export const CallBackHook =  () => {
    const [counter, setcounter] = useState(10);

    const onChangeButton = useCallback(
        () => {
            //setcounter( counter + 1 ); //asi no funciona por que counter se queda guardado con el valor inicial
            setcounter( (c) => c + 1 ); //de esta manera si funciona, porq ue busca el valor actual
        }, 
        []
        )

    // const onChangeButton = () =>{
    //     setcounter( c => c + 1);
    // }

  return (
    <>
        <h1> valor actual del increment { counter } </h1>
        <ShowButton incrementNum={ onChangeButton } />

    </>
  )
}
