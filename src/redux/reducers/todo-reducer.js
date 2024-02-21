import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"

const initialState=[]
export default (state=initialState,action)=>{
    /* if(action.type===ADD_TODO){
        //add_todo
    }else if(action.type===DELETE_TODO){
        //delete_todo
    }else if(action.type===UPDATE_TODO){
         //update_todo
    }else{
           //return intial state
    }*/

    switch(action.type){
        case ADD_TODO:
            //add_todo
            return [...state,action.payload]
        case DELETE_TODO:
            //delete
            const newState=state.filter((todo)=>todo.id!==action.payload)
            return newState;
        case UPDATE_TODO:
            //update
            const updateState=state.map(todo=>{
                if(todo.id==action.payload.todoId){
                    todo.title=action.payload.todo.title
                    todo.description=action.payload.todo.description
                    
                }
                return todo;
            })
            return updateState;
        default:
            return state
    }

}