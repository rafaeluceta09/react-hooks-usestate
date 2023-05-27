import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
//import { CallBackHook } from './05-memos/CallBackHook';
//import { MultipleCustomHooks } from './MultipleCustomHooks';
//import { CounterWithCustomHooks } from './CounterWithCustomHooks';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWitchCustomHooks } from './FormWitchCustomHooks';
//import { UseRefFocus } from './04-useRef/UseRefFocus';
//import { MemoHook } from './05-memos/MemoHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp';

import './index.css';
import { MainApp } from './09-UseContext/MainApp';
ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
   { /*<React.StrictMode> */}
   <MainApp />
   { /*</React.StrictMode> */}
</BrowserRouter>
 )
