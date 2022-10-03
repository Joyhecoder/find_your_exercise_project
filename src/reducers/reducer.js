import {STORE_SEARCH_RESULT, LOAD_DATA, ADD_TO_LIST, DELETE_FROM_LIST} from '../actions/types';

const reducers = (state, action) => { 
    // console.log(state)
    if(state===null || state==undefined){

        console.log('setting state');
        state = {
            myList: [],
            exercise:null
        }

        console.log(state.myList);

    }
   
console.log("inside reducer")
    switch(action.type){
        case STORE_SEARCH_RESULT:
            // console.log(action.exercise)
            return {
                ...state,
                exercise: action.exercise
            }
        
        case LOAD_DATA:
            // console.log(action.payload)
            return {
                ...state,
                exercise: action.payload
                
            }

        case ADD_TO_LIST:

            // console.log("reducer add_to_list has been triggered");
            // console.log(action.myList);
            // console.log(`inside reducer ${state.myList}`);

            //when the exercise was added
            let copyofMyList = [...state.myList]
            let isInList = false
            copyofMyList.forEach(item =>{
                if(item.id === action.myList.id){
                    isInList= true
                }
            })
            if(!isInList){
                return {
                    ...state,
                    myList: [...state.myList, action.myList]
                    // myList: "hello world"
    
                }
            }
            
            

        case DELETE_FROM_LIST:
            console.log((`inside delete from list reducer ${action.myList}`))
            return {
                ...state,
                myList: state.myList.filter(exercise =>{
                    return exercise.id != action.myList
                })
            }
         

        default:
            return state;
    }
   
 }

 export default reducers