import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from'axios'




function Login() {
const[Username,setUsername]=useState()
  const[Password,setPassword]=useState()
  const navigate = useNavigate()

  const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/login',{Username,Password})
    .then(result=>{console.log(result)
        if(result.data ==='success'){
            navigate('/')}
        })
    .catch(err=>console.log(err))}


  return (
    
    <div >
        <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded bg-info-subtle" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Login</h3>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" required onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
        <p className="text-center">
          Not registered?<Link to="/register"  className="text-primary">Register Now</Link>
        </p>
      </form>
      </div>
        
  
      
    </div>
  )
}

export default Login
