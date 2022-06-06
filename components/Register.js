/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Register() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://ecomsamp.herokuapp.com/register',{
      username: username,
      password: password
    })
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='authContainer'>
      <div className='auth__illus'>
        <img src="images/login.png" alt="login" />
      </div>
      <div className='auth__content'>
        <div className='auth__content__heading'>
          <h1>Hey,</h1>
          <h1 className='heading--colorchange'>Let&lsquo;s get you started</h1>
        </div>
        <div className='auth__inputDetails'>
          <div className='auth__inputBox'>
            <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className='auth__submit__btn'>
            <button onClick={handleSubmit}>Welcome !</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register