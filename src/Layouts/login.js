import React from 'react'
import '../Assets/Stylesheetes/Login.css'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <div className='Login_Container'>
      <div className='text-black'><Link to={"/home"}>Login</Link></div>

    </div>
  )
}
