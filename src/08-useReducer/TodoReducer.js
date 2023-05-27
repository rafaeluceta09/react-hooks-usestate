

export const TodoReducer = (initialState = [], action ) =>{

    switch (action.type) {
        case '[TODO] add Todo':
            return [...initialState, action.payload ];
            
        case '[TODO] Delete Todo' :
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Togle Todo' :

            return initialState.map(( todo ) => {

                if (todo.id === action.payload)
                {
                    return  {...todo, done : !todo.done }
                    
                }
                    return todo;
                });
            
    
        default:
            initialState
            break;
    }
    


}