
import { useState } from "react"

export const useFormState = (formItems) => {
    const [formState, setformState] = useState(formItems)

    const onChangeFornItems = ({target}) =>{
        setformState({
            ...formState,
            [target.name] : target.value
        });
        console.log('change username');
    }

    const onResetForm = (e) =>{
        e.preventDefault();
        setformState(formItems);


    }

  return (
    {
         formState
        ,onChangeFornItems
        ,onResetForm

    }
  )
}
