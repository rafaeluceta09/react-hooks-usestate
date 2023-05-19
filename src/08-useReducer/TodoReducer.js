

export const TodoReducer = (initialState = [], action ) =>{

    switch (action.type) {
        case '[TODO] add Todo':

            return [...initialState, action.payload ];
 
            break;
    
        default:
            initialState
            break;
    }
    


}