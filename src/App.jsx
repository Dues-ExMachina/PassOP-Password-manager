import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* 
        1. Added `relative` so the absolute-positioned background stays within this div.
        2. The flexbox layout for the sticky footer is kept.
      */}
      <div className='min-h-screen flex flex-col relative'>

        {/* The background element, moved from Manager.jsx to cover the entire app */}
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <Navbar />
        <main className='flex-grow'>
          <Manager />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App