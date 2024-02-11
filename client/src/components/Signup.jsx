import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:4000/register",{name,email,password})
        .then(employee => {console.log(employee)})


        navigate('/login')
        
    }
  return (
    <div>

        <h2>Register</h2>


        <form onSubmit={handleSubmit}>
            
            <input type="text" placeholder='name' name='email' onChange={(e)=> setName(e.target.value)} />
            <input type="email" placeholder='email' name='email' onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='password' name='password' onChange={(e)=> setPassword(e.target.value)} />

            <button type='submit'>submit</button>
        </form>

    </div>
  )
}

export default Signup