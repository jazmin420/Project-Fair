import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()

function TokenAuth({children}) {
    const [isAuthoried,setIsAuthorised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorised(true)
        }else{
            setIsAuthorised(false)
        }
    },[isAuthoried])
  return (
    <>
        <tokenAuthContext.Provider value={{isAuthoried,setIsAuthorised}}>
            {children}
        </tokenAuthContext.Provider>
    </>
  )
}

export default TokenAuth