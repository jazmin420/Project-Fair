import React, { useContext } from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../Context/TokenAuth'

function Header({insideDashBoard}) {

  const {isAuthoried,setIsAuthorised} =useContext(tokenAuthContext)
  const naviagte = useNavigate()

  const handleLogout =()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    naviagte('/')
  }

  return (
    <Navbar style={{ width: "100%",position:'fixed',top:'0px',zIndex:1 }} className="border bg-primary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>
            <i style={{height:'25px'}} className="fa-solid fa-hands-holding-circle"></i>  Project Fair
            </Link>
          </Navbar.Brand>
          {
            insideDashBoard&&
            <div className="ms-auto">
              <button onClick={handleLogout} style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i className="fa-solid fa-gear me-2"></i>Logout</button>
            </div>
          }
        </Container>
      </Navbar>
  )
}

export default Header