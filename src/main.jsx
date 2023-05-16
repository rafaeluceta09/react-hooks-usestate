import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


//import { MultipleCustomHooks } from './MultipleCustomHooks';
//import { CounterWithCustomHooks } from './CounterWithCustomHooks';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWitchCustomHooks } from './FormWitchCustomHooks';
//import { UseRefFocus } from './04-useRef/UseRefFocus';
import { MemoHook } from './05-memos/MemoHook';
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MemoHook />
  //</React.StrictMode>
)
