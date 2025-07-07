import React from 'react'
import { Link } from 'react-router-dom'


export default function Product() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/product">product</Link>
      <Link to="/chat">chat</Link>
      <Link to="/profile">profile</Link>
      <h1>Product</h1>
    </div>
  )
}
