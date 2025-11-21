import React, { useEffect } from 'react'
import Autocomplete from './Autocomplete'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
const DupliHome = () => {

    const Autosuggestion=async(query)=>{
const response=await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
if(!response.ok){
    throw new Error("failed to fetch")
}
const result=await response.json()
console.log(result);
return result.recipes;



    }

    const staticData=[
        "apple",
        "banana",
        "grape",
        "orange",
        "mango",
        "pineapple",
        "peach"
    ]


    // redux maintain
const dispatch=useDispatch()
//     useEffect(()=>{
//        dispatch(GetapiRedux())

//        const url = 'https://api.makcorps.com/free/london';
// const headers = {
//   'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTc2NzczNjAsImlkZW50aXR5IjozLCJuYmYiOjE1MTc2NzczNjAsImV4cCI6MTUxNzY3OTE2MH0.ytSqQj3VDymEaJz9EIdskWELwDQZRD1Dbo6TuHaPz9U'
// };

// axios.get(url, { headers })
//   .then(response => {
//     console.log("response",response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
     
       
       
//     },[])

    const {products,error,loading}=useSelector((state)=>state.Product)
    console.log("products",products);

    
  return (
    <div>
      <Autocomplete placeholder={"auto search..."} Autosuggestion={Autosuggestion} dataKey={"name"} CustomLoading={<>loading..</>} onSelect={(val)=>console.log(val)} onFocus={()=>{}} Onblur={()=>{}} onChange={(val)=>{}}/>
    </div>
  )
}

export default DupliHome
