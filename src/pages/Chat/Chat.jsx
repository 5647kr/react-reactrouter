import React from 'react'
import { Link } from 'react-router-dom'

export default function Chat() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/product">product</Link>
      <Link to="/chat">chat</Link>
      <Link to="/profile">profile</Link>
      <h1>Chat</h1>
    </div>
  )
}
