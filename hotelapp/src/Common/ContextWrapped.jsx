import React, { createContext, useContext, useEffect, useState } from 'react'
const MainCotext=createContext()
const ContextWrapped = ({children}) => {
    


    const [loginmdal,Setloginmodal]=useState(false)
     const [signmodal,Setsignmodal]=useState(false)
    const [isLogged,SetisLogged]=useState(false)

    useEffect(()=>{
        const userData=JSON.parse(localStorage.getItem("user"))
        if(userData){
          SetisLogged(true)
        }

    },[])
   
  return (
<>
<MainCotext.Provider value={{loginmdal,Setloginmodal,isLogged,SetisLogged, signmodal,Setsignmodal}}  >
{children}
</MainCotext.Provider>

</>
  )
}

export default ContextWrapped
export const ContextDatas=()=>useContext(MainCotext)
