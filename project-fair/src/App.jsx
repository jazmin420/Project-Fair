
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer';
import { useContext } from 'react'
import { tokenAuthContext } from './Context/TokenAuth'

function App() {

  const {isAuthoried,setIsAuthorised} = useContext(tokenAuthContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister/>} />
        <Route path='/dashboard' element={ isAuthoried?<Dashboard/>:<Home/> } />
        <Route path='/projects' element={ isAuthoried?<Projects/>:<Home/> } />
        <Route path='/*' element={<Navigate to={'/'}/>} /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App