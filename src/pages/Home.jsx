import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div className='bg-slate-500 text-white'>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
    </div>
  )
}

export default Home