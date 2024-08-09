import React, { useState } from 'react'

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => { 
        setNav(!nav)
    }
  return (
      <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center '>
          <h1 className="text-5xl font-bold  ml-4 bg-gradient-to-r text-transparent from-cyan-300 to-green-400 bg-clip-text">Yash</h1>
          <ul className='hidden md:flex'>
            <li className='p-5 font-bold text-white '><a href="#about"><button className='border rounded-md p-2 border-white hover:bg-gradient-to-br from-orange-500 to-pink-500 
text-white transition duration-300 ease-in-out hover:scale-105'>About</button></a></li>
            <li className='p-5 font-bold text-white '><a href="#work"><button className='border rounded-md p-2 border-white hover:bg-gradient-to-br from-orange-500 to-pink-500 transition duration-300 ease-in-out hover:scale-105'>Works</button></a></li>
            <li className='p-5 font-bold text-white '><a href="#contact"><button className='border rounded-md p-2  border-white hover:bg-gradient-to-br from-orange-500 to-pink-500 transition duration-300 ease-in-out hover:scale-105'>Contact</button></a></li>
          </ul>

          <div onClick={handleNav} className="block md:hidden mr-6">
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
          <div className={nav ? ' z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
              : 'fixed left-[-100%]'}>
              <h1 className='text-3xl bg-gradient-to-r text-transparent from-cyan-300 to-green-400 bg-clip-text m-4 font-bold'>Yasbir pal</h1>
              <ul className='p-8 text-2xl'>
                <li onClick={handleNav} className='p-2'><a href="#home">Home</a> </li>
                <li onClick={handleNav} className='p-2'><a href="#about">About</a> </li>
                <li onClick={handleNav} className='p-2'><a href="#work"> Works</a> </li>
                <li onClick={handleNav} className='p-2'> <a href="#contact">Contact</a></li>
              </ul>
      </div>
      
      
    </div>
  )
}
