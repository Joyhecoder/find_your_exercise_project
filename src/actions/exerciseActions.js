import {STORE_SEARCH_RESULT, LOAD_DATA, ADD_TO_LIST, DELETE_FROM_LIST} from './types';
import { v4 as uuidv4 } from 'uuid';

export const loadData = () => {
    return async (dispatch) => {  //thunk

        try {
            const options = {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': 'a6c84714aamshd7312f736a5f530p1a827bjsn8c619e6200a6',
                  'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
                }
              };
             

                let cardiodata = await fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=cardio`, options)
                let cardioresult = await cardiodata.json()
                let newcardioresult = cardioresult.map(resultObj =>{
                    resultObj.id = uuidv4()
                    return resultObj
                })

                let olympicWeightliftingdata = await fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=olympic_weightlifting`, options)
                let olympicWeightliftingresult = await olympicWeightliftingdata.json()
                let newolympicWeightliftingresult = olympicWeightliftingresult.map(resultObj =>{
                    resultObj.id = uuidv4()
                    return resultObj
                })
               
                let plyometricdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=plyometrics', options)
                let plyometricresult = await plyometricdata.json()
                let newplyometricresult = plyometricresult.map(resultObj =>{
                    resultObj.id = uuidv4()
                    return resultObj
                })
               
                let powerliftingdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=powerlifting', options)
                let powerliftingresult = await powerliftingdata.json()
                let newpowerliftingresult = powerliftingresult.map(resultObj =>{
                    resultObj.id = uuidv4()
                    return resultObj
                })

                let strengthdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strength', options)
                let strengthresult = await strengthdata.json()
                let newstrengthresult = strengthresult.map(resultObj =>{
                    resultObj.id = uuidv4()
                    return resultObj
                })

                let stretchingdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=stretching', options)
                let stretchingresult = await stretchingdata.json()
                let newstretchingresult = stretchingresult.map(resultObj =>{
                    resultObj.id = uuidv4()
                    return resultObj
                })

                let strongmandata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strongman', options)
                let strongmanresult = await strongmandata.json()
                let newstrongmanresult = strongmanresult.map(resultObj =>{
                    resultObj.id = uuidv4()
                    return resultObj
                })

                //make multiple dispatch
                dispatch({type: LOAD_DATA, payload: {
                    cardio: newcardioresult,
                    olympicWeightlifting: newolympicWeightliftingresult,
                    plyometrics: newplyometricresult,
                    powerlifting: newpowerliftingresult,
                    strength: newstrengthresult,
                    stretching: newstretchingresult,
                    strongman: newstrongmanresult

                }})
        }
        catch(error){
            console.log(error)
        }
    }
}

export const storeSearchResult = (data) => {
    console.log(`action: ${data}`);
    return {
        type: STORE_SEARCH_RESULT,
        exercise: data
    }
}

export const addToList = (exercise) => {
    console.log(`in action: ${exercise}`);
    return {
        type: ADD_TO_LIST,
        myList: exercise
    }
}

export const deleteFromList = (exerciseID) => {
    console.log(`in delete from list action: ${exerciseID}`);
    return {
        type: DELETE_FROM_LIST,
        myList: exerciseID
    }
}