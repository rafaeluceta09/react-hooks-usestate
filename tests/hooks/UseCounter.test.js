
import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter'; 
describe('first', () => { 

    test('should first', () => { 

        const {result} =  renderHook(() => useCounter());
        const { counter, onHandledLess , onHandledPlus } = result.current;
       
        //el valor que devuelbe el counter
        expect(counter).toBe(10);

        //teste para la function onHandle plus
        expect(onHandledLess).toEqual(expect.any( Function ));

        //teste para la function onHandle plus
        expect(onHandledPlus).toEqual(expect.any( Function ));

    });

    test('debe generar el counter con valor de 100',()=>{

        let initialValue = 100; 
        const { result  } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;

        expect(counter).toBe(initialValue);

    });
    
    test('probando que las funciones sume onHandledPlus', () => { 
;
        let initialValue = 100
        const { result } = renderHook(() => useCounter(initialValue) );
        const {counter, onHandledLess,onHandledPlus} = result.current; 
        act(()=>{
            onHandledPlus();
            onHandledPlus(4);

        });
        //cuando se trabaja en esta parte con valores stream, numero,voleanos no se actualiza 
        expect(result.current.counter).toBe(105);
        

     });


     test('probando que las funcion reste onHandledLess', () => { 
        ;
                let initialValue = 100
                const { result } = renderHook(() => useCounter(initialValue) );
                const {counter, onHandledLess,reset} = result.current; 
                act(()=>{
                    onHandledLess();
                    onHandledLess(4);
                    reset();
        
                });
                //cuando se trabaja en esta parte con valores stream, numero,voleanos no se actualiza 
                expect(result.current.counter).toBe(100);
                
        
             });






 });