import React from 'react'
import './Header-footer.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/edit">Edit Product</Link>
    </header>
  )
}

export default Header