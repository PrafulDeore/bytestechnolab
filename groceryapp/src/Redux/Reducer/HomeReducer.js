//!Reducer Defines How Todo=======>

import { HOME_FAILURE, HOME_LOADING, HOME_SUCCESS } from "../Action/HomeAction";



const init = {
    "loading": false,
    "fail": false,
   
}


export const homeReducer = (store = init, { type, payload }) => {
    switch (type) {

        case HOME_LOADING:
            return {

                "loading": true,
                "error": false,
                ...store
            };
        case HOME_SUCCESS:
            return {
              
                "loading": false,
                "fail": false,
                payload
            };
        case HOME_FAILURE:
            return {
                loading: false,
                fail: true
            }
        default: return {
            store
        }
    }
}