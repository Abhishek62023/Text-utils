import 'bootstrap/dist/css/bootstrap.min.css'


import './css/App.css'
import Register from './Register'
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'


function App() {
  

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
