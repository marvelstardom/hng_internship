import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='nav'>
      {/* NAVIGATION LINKS */}
      <div>
        <h3>LuxeHome</h3>
      </div>

      <div className='navlinks'>
        <Link to='/'>Home</Link>
        <div>
            <input type='search' placeholder='Search your item' />
        </div>
        <Link to='account'>Account</Link>
        <Link to='cart'>Cart</Link>
      </div>
    </div>
  )
}
