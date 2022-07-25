// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { quantity_success } from "../Redux/Action/Quantity"


// export const Quantity=()=>{

//     const[tprice,setTprice]=useState([])
//       const dispatch=useDispatch()


//     return(
//  <>
//         <input type="number" style={{width:"60%",border:"1px solid red"}} 

//         value={tprice}  onChange={((e)=>setTprice(e.target.value))}/>
//         <button className="fa fa-plus add-btn"
//         onClick={() => dispatch(quantity_success(tprice))}
//     >+</button>
//     </>
//     )
// }