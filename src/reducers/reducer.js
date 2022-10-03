import {STORE_SEARCH_RESULT, LOAD_DATA, ADD_TO_LIST} from '../actions/types';

const reducers = (state, action) => { 
    console.log(state)
    if(state===undefined){
        state ={
            myList: ["mylist"],
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

        case ADD_TO_LIST:
            console.log(action.myList);
            console.log(`inside reducer ${state.myList}`);
            return {
                ...state,
                // myList: state.myList.concat(action.myList)

            }
         

        default:
            return state;
    }
   
 }

 export default reducers