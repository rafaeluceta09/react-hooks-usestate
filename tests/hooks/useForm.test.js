import { renderHook } from "@testing-library/react";
import { useForm, useFormState } from "../../src/hooks/useFormState" 

describe('test para el useForm', () => { 

    test('validar parametros generales ', () => { 
        const initialState = {
            userName : 'stalin uceta',
            userEmail : 'suceta@gmail.com'
        };

        const { result } = renderHook(() => useFormState(initialState));

        console.log(result.current);
        console.log(initialState);
        expect(result.current).toEqual({
            userName : initialState.userName,
            userEmail : initialState.userEmail,
            formState : initialState,
            onChangeFornItems : expect.any( Function ),
            onResetForm : expect.any(Function)
        });

     });


 });