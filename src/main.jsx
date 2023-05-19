import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CallBackHook } from './05-memos/CallBackHook';
//import { MultipleCustomHooks } from './MultipleCustomHooks';
//import { CounterWithCustomHooks } from './CounterWithCustomHooks';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWitchCustomHooks } from './FormWitchCustomHooks';
//import { UseRefFocus } from './04-useRef/UseRefFocus';
//import { MemoHook } from './05-memos/MemoHook';
// import { Padre } from './07-tarea-memo/Padre';

// import './08-useReducer/intro-reducer';

import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';
ReactDOM.createRoot(document.getElementById('root')).render(
//   //<React.StrictMode>

   <TodoApp />
//   //</React.StrictMode>
 )
