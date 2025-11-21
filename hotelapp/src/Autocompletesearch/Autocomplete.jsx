import React, { useCallback, useEffect, useState } from 'react'
import Searchsuggstion from '../Common/Searchsuggstion'
import debounce from "lodash/debounce"
const Autocomplete = ({placeholder,staticData, Autosuggestion, dataKey,CustomLoading,onSelect ,onFocus=()=>{}, Onblur=()=>{} ,onChange=()=>{}}) => {
    const [inputData,Setinputdata]=useState("")
    const [suggestion,Setsuggestion]=useState([])
    const [loading,Setloading]=useState(false)
    const [error,Seterror]=useState(null)


    const Getsuggestion=async(query)=>{
        Seterror(null)
        Setloading(true)
        try {
            let result;
            if(staticData){
                result=staticData.filter((item)=>{
                  return item.toLowerCase().includes(query.toLowerCase())
                })
            }else if(Autosuggestion){
                result=await Autosuggestion(query)

            }



            
            Setsuggestion(result)
        } catch (error) {
            Seterror("failed to load")
            Setsuggestion([])
            
        }finally{
            Setloading(false)
        }
    }
    const DebouncingGetsuggestion=useCallback(debounce(Getsuggestion,400),[])

    useEffect(()=>{
        if(inputData.length>1){
            DebouncingGetsuggestion(inputData)
        }else{
            Setsuggestion([])
        }
    },[inputData])
    const Handleinputchange= (e)=>{
        Setinputdata(e.target.value)
        onChange(e.target.value)
    }


    const HandleClickofsuggestion=(suggested)=>{
        Setinputdata(dataKey?suggested[dataKey]:dataKey)
        onSelect(suggested)
        Setsuggestion([])
    }
  return (
    <div className='w-1/4 mx-auto'>
      <h1>autocomplete search</h1>
     
      <input type="text" Onblur={Onblur} onFocus={onFocus} value={inputData} onChange={Handleinputchange} placeholder={placeholder} className='p-3 m-3'/>
      
  {
    (suggestion.length>0 || loading || error)&&  (
        <>
          {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <Searchsuggstion Highlight={inputData} data={suggestion} onSuggestionclick={HandleClickofsuggestion} dataKey={dataKey}/></>
    )
  }
    </div>
  )
}

export default Autocomplete
