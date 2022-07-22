import axios from "axios"

// Action Type=======>
export const HOME_LOADING="HOME_LOADING";
export const HOME_SUCCESS="HOME_SUCCESS";
export const HOME_FAILURE="HOME_FAILURE";


//Action Creators======>

export const home_loading=()=>({
    type:HOME_LOADING
})

export const home_success=(payload)=>({
    type:HOME_SUCCESS,
    payload
    
})

export const home_failure=()=>({
    type:HOME_FAILURE
})


// export const getAllGrocery=(payload)=>(dispatch)=>{
//     dispatch(home_loading())
//     axios.get('http://localhost:30001/data', 
//     {
      
//       payload,
     
//     })
//     .then(function (response) {
//       dispatch(home_success(response))
//     //   console.log(response.data)
//     })
//     .catch(function (error) {
//         dispatch(home_failure(error))
//       console.log(error);
//     });
// }