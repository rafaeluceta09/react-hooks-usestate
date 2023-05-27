
import { useState } from "react";

export const useFormState = (initialState) => {
    const [formState, setformState] = useState(initialState)

    const onChangeFornItems = ({target}) =>{
        setformState({
            ...formState,
            [target.name] : target.value
        });
    }

    const onResetForm = (e) =>{
        setformState(initialState);
    }

    return (
      {
        ...formState
        ,formState
        ,onChangeFornItems
        ,onResetForm

    }
  )
}
