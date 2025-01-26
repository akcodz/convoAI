import React from 'react'
import Navbar from './Navbar'
import Model from '../assets/Model'

const Home = () => {
  return (
    <div className='bg-blue-600 min-h-screen w-screen '>
        <Navbar />
        <div className='h-[1000px] w-full  relative overflow-hidden'><Model/>
        <div className='cover absolute bottom-5 right-5 w-36 h-12 bg-blue-600'></div></div>
    </div>
  )
}

export default Home