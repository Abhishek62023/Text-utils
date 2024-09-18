import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from'axios'


function Register() {
  const[Username,setUsername]=useState()
  const[Email,setEmail]=useState()
  const[Password,setPassword]=useState()
  const navigate = useNavigate()


  const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/register',{Username,Email,Password})
    .then(result=>{console.log(result) ,navigate('/login')})
    .catch(err=>console.log(err))
    

  }
  return (
    
    <div>

<div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded bg-info-subtle" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" required  onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" required  onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
        <p className="text-center">
          Already have a  account?<Link to="/login"  className="text-primary">Login</Link>
        </p>
      </form>
      </div>
      



    </div>
  )
}

export default Register
