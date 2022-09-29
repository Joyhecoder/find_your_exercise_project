import {STORE_SEARCH_RESULT} from '../actions/types';

const reducers = (state, action) => { 
    if(state===undefined){
        state ={
            exercise:[]
        }

    }
   

    switch(action.type){
        case STORE_SEARCH_RESULT:
            console.log(action.exercise)
            return {
                ...state,
                exercise: action.exercise
            }
         

        default:
            return state;
    }
   
 }

 export default reducers