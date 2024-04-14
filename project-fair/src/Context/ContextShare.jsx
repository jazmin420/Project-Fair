import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const updateResposeContext = createContext()

function ContextShare({children}) {
    const [addResponse,setAddResponse] = useState("")
    const [editResponse,setEditResponse] = useState("")
  return (
    <>
       <addResponseContext.Provider value={{addResponse,setAddResponse}}> 
            <updateResposeContext.Provider value={{editResponse,setEditResponse}}>
                    {children}
            </updateResposeContext.Provider>
       </addResponseContext.Provider>
    </>
  )
}

export default ContextShare