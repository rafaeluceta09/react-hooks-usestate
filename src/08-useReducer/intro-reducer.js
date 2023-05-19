
const initialState = [{
    id : 1,
    todo : 'recolectar todas las piedras filosoficas',
    done : false
 }];


 const todoReducer = (state = initialState, action = {} ) =>{

    if(action.type === 'add new todo'){
        
        return [ ...state, action.payload ]
    }


    return state;

 }

 let todos = todoReducer();

 console.log(todos);

 const newTodo = {
    id : 2,
    todo : 'recolectar todas las las rocas punteagudas',
    done : false  
 }

 const addTodoToAction = {
    type : "add new todo",
    payload : newTodo
 }


 todos = todoReducer(todos, addTodoToAction);

 console.log(todos);



