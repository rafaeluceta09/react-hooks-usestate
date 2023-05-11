
import { useCounter } from './hooks/useCounter';

export const CounterWithCustomHooks = () => {
  const { counter, onHandledPlus, onHandledLess,reset } = useCounter();

  

  return (
    <>
        <h1> Probando Counter Con Hooks Personalizado</h1>
        <h3> Contador : { counter }</h3>
        <button onClick={ () => onHandledPlus(2) }> +1 </button>
        <button onClick={ onHandledLess } > -1 </button>
        <button onClick={ reset } > reset </button>
    
    </>
  )
}
