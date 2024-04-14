import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard() { 
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
    }else{
      setUsername("")
    }
  },[])
  return (
    <>
    <Header insideDashBoard/>
    <div style={{marginTop:'100px'}} className='container-fluid'>
      <h1>Welcome <span className='text-warning'>{username?.split(" ")[0]}</span>,</h1>
      <div className="row mt-5">
        <div className="col-lg-8">
          <MyProjects/>
        </div>
        <div className="col-lg-4">
          <Profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard