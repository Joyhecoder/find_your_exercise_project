import {STORE_SEARCH_RESULT, LOAD_DATA} from './types';

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

                let olympicWeightliftingdata = await fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=olympic_weightlifting`, options)
                let olympicWeightliftingresult = await olympicWeightliftingdata.json()
               
                let plyometricdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=plyometrics', options)
                let plyometricresult = await plyometricdata.json()
               
                let powerliftingdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=powerlifting', options)
                let powerliftingresult = await powerliftingdata.json()

                let strengthdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strength', options)
                let strengthresult = await strengthdata.json()

                let stretchingdata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=stretching', options)
                let stretchingresult = await stretchingdata.json()

                let strongmandata = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=strongman', options)
                let strongmanresult = await strongmandata.json()

                //make multiple dispatch
                dispatch({type: LOAD_DATA, payload: {
                    cardio: cardioresult,
                    olympicWeightlifting: olympicWeightliftingresult,
                    plyometric: plyometricresult,
                    powerlifting: powerliftingresult,
                    strength: strengthresult,
                    stretching: stretchingresult,
                    strongman: strongmanresult

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