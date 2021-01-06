import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/signin">Sign In</Link> </li>
        <li> <Link to="/signup">Sign Up</Link> </li>
      </ul>
      <h1>Signup</h1>
    </div>
  )
}
