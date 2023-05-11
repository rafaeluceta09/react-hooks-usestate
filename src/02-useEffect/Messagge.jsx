import { useEffect }  from 'react'

export const Messagge = () => {

    useEffect( () => {
        const onMouseChange = ({x , y}) =>{
            console.log( x , y );
           
        }
      window.addEventListener('mousemove',onMouseChange)
      console.log('mounted');
      return () => {
        removeEventListener('mousemove',onMouseChange);
        console.log('unMounted');
      }
    }, [] )
     
    return (
    <>
        <h3>Este usuario ya existe</h3>
    </>
  )
}
