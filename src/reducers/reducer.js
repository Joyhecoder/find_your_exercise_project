import {STORE_SEARCH_RESULT, LOAD_DATA} from '../actions/types';

const reducers = (state, action) => { 
    console.log(state)
    if(state===undefined){
        state ={
            exercise:{}
            
        }

    }
   
console.log("inside reducer")
    switch(action.type){
        case STORE_SEARCH_RESULT:
            console.log(action.exercise)
            return {
                ...state,
                exercise: action.exercise
            }
        
        case LOAD_DATA:
            console.log(action.payload)
            return {
                ...state,
                exercise: action.payload
                
            }

        default:
            return state;
    }
   
 }

 export default reducers