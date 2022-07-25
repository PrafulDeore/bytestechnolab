import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useState } from "react"


export const Home=()=>{
    // const dispatch = useDispatch()
    const[gdata,setGdata]=useState([]);

    
    useEffect(()=>{
      getGrocery()
},[])

const handlchange=(e,id)=>{
  console.log(e.target.value)

  const data=[...gdata]
  var newprice
  for(var i=0;i<data.length;i++){
    if(data[i].id==id){
      if((e.target.value >  ((10 / 100 ) * data[i].quantity)) && 
      (e.target.value <  ((49 / 100) * data[i].quantity)) ){
        data[i].tPrice = e.target.value*data[i].tPrice - e.target.value * ((5 / 100)* data[i].tPrice)
      }
      else if((e.target.value >  ((50 / 100 ) * data[i].quantity)) && 
      (e.target.value <  ((89 / 100) * data[i].quantity)) ){
        data[i].tPrice = e.target.value*data[i].tPrice - e.target.value * ((10 / 100)* data[i].tPrice)
      }

      else if((e.target.value >  ((90 / 100 ) * data[i].quantity)) && 
      (e.target.value <=  ((100 / 100) * data[i].quantity)) ){
        data[i].tPrice = e.target.value*data[i].tPrice - e.target.value * ((20 / 100)* data[i].tPrice)
      }
      else{
        data[i].tPrice = e.target.value*data[i].tPrice
      }

}
  }
  setGdata(data)
}



const getGrocery=()=>{
  axios.get('http://localhost:3001/grocery')
  .then(function (response) {
    var data=response.data
    setGdata(data)
    // console.log(data)
    
  })
  .catch(function (error) {
    console.log(error);
  });
}




return(

    <>
    <h1>Home</h1>
     {
      gdata.map((e)=>(
        <div className="outerdiv" style={{border:"1px solid red"}}>
            <div className="gname"><p>{`ProductName:${e.prduct_name}`}</p></div>
            <div className="gname"><p>{`Price:${e.price}`}</p></div>
            <p>Quantity</p>

            
            <select className="form-control"
            onChange={((item)=>{
              handlchange(item,e.id)
            } )}
           >
            {[...Array(e.quantity).keys()].map((x,i) => {
                return <option value={i + 1}>{i + 1}</option>  /* for  quantity selction*/
            })}
        </select>

        <div >
         <h1 style={{fontSize:"25px"}} className="m-2 ">
         Price :{e.tPrice}</h1>
     </div>
        </div>
      ))
     }
    </>
)

}







