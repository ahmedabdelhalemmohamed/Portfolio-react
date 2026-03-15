import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div className='bg-slate-500 text-white'>
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}

export default Home