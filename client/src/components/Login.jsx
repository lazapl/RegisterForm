import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:4000/login",{email,password})
        .then(result => {
            if(result.data.status == "Success"){
                
                const essa = result.data.essa
                console.log(essa)
                navigate('/home')
            }
        })


        
        
    }



  return (
    <div>

        <h2>Login</h2>


        <form onSubmit={handleSubmit}>

            
            <input type="email" placeholder='email' name='email' onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='password' name='password' onChange={(e)=> setPassword(e.target.value)} />

            <button type='submit'>submit</button>
        </form>

    </div>
  )
}

export default Login