import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className='layout'>
        {/* LAYOUT FOR ALL PAGES */}
        <Navbar />

        <div className='outlet'>
          <Outlet/>
        </div>

        <Footer />
    </div>
  )
}
