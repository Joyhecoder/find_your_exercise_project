import {STORE_SEARCH_RESULT, LOAD_DATA, ADD_TO_LIST} from '../actions/types';

const reducers = (state, action) => { 
    console.log(state)
    if(state===null || state==undefined){
        console.log('setting state');
        state = {
            myList: [],
            exercise:{}
        }

        console.log(state.myList);

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

            console.log("reducer add_to_list has been triggered");
            console.log(action.myList);
            console.log(`inside reducer ${state.myList}`);
            return {
                ...state,
                myList: [...state.myList, action.myList]
                // myList: "hello world"

            }
         

        default:
            return state;
    }
   
 }

 export default reducers