import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Reducers/userReducer';

function Login() {
const [name, setName] = useState("")
const [password, setPassword] = useState("")

const dispatch = useDispatch();

  const userLogin = ()=>{
   const userData = {
    name : name,
    password: password
   }
   console.log(userData)

   //dispatch({type: "", payload:userData})   //useReducer
   dispatch(loginUser(userData))              //Redux - payload is taken automatically
  }

  return (
    <div className='user-container'>
        <h1>Login Page</h1>
        <input 
        type="text" 
        placeholder='Enter Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        type="password"
        placeholder='Enter password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button
        onClick={userLogin}
        >Login</button>
    </div>
  )
}

export default Login