import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { home_failure, home_loading, home_success } from "../Redux/Action/HomeAction"
import axios from "axios"
import { useState } from "react"

export const Home=()=>{
    const dispatch = useDispatch()
    const[gdata,setGdata]=useState([])
    const[tprice,setTprice]=useState([])
    useEffect(()=>{
        getAllGrocery()
},[])
// const groceryState = useSelector(state => state.homeReducer)
//  const grocey=groceryState
// console.log("productname:",grocey)
 const getAllGrocery=(payload)=>{
    dispatch(home_loading())
    axios.get('http://localhost:30001/grocery', 
    {
      
      payload,
     
    })
    .then(function (response) {
      dispatch(home_success(response))
      var data=response.data
      console.log(data)
      setGdata(data)
    })
    .catch(function (error) {
        dispatch(home_failure(error))
      console.log(error);
    });
}


return(

    <>
    <h1>Home</h1>
   {
    gdata.map((e)=>{
        return(
            <div className="productDiv" style={{width:"40%",border:"1px solid red"}}>
            <h3>{`Product Name ${e.prduct_name}`}</h3>
            <h5>{`Price for 1 ${e.price}`}</h5>

            <input type="number" style={{width:"60%",border:"1px solid red"}} 

            value={tprice} onChange={((e)=>setTprice(e.target.value))}/>

            <h5>{`Toatal Price: ${tprice*e.price}`}</h5>
            
            </div>
            
        )
       
    })
   }
    </>
)

}