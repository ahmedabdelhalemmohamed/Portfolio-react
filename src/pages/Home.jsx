import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='bg-slate-500 text-white'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home