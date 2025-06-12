import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { NavLink } from 'react-router-dom'
import transition from './transition'
import profilePic from '../assets/images/edro-profile.PNG'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img className='rounded-full h-48 w-48 mb-4' src={profilePic} alt='profile' />
      <h1 className='text-2xl md:text-4xl text-center'>
        Hi, I am Edro Gonzales <span id='hello-emoji'>👋</span>
      </h1>
      <TypeAnimation
        sequence={['Software Engineer', 1000, 'Web Developer', 1000, 'Problem Solver', 1000]}
        wrapper='span'
        speed={50}
        style={{ fontSize: '1.25rem' }}
        repeat={Infinity}
      />
      <NavLink
        to='/about'
        className='inline-block px-6 py-2 mt-12 text-white bg-highlight rounded transition duration-500 hover:bg-white hover:text-highlight'
      >
        Learn More About Me
      </NavLink>
    </div>
  )
}

export default transition(Home)
