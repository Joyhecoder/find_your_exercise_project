import {STORE_SEARCH_RESULT} from './types';

export const storeSearchResult = (data) => {
    console.log(`action: ${data}`);
    return {
        type: STORE_SEARCH_RESULT,
        exercise: data
    }
}