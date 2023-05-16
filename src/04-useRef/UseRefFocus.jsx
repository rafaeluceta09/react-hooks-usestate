import { useRef } from 'react'

export const UseRefFocus = () => {
    const useImput = useRef();

    const onClickFocus = ( ) => {
       useImput.current.select();
    }

  return (
    <>
        
        <h2>
            USE FOCOS CON HOOKS useRef 
        </h2>
        <hr />
        <input 
            ref={ useImput }
            type="text" className='form-control'
        />
         <input 
            
            type="text" className='form-control'
        />
        
        <button
            className='btn btn-primary ' 
            onClick={ onClickFocus }>
                Set Focus
            </button>
    </>
  )
}
