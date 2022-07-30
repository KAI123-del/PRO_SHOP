import React from 'react'
import {MdShoppingCart} from "react-icons/md";
import {BsPersonFill} from "react-icons/bs";
import {useNavigate} from 'react-router-dom'

function Header() {
  
  let navigate=useNavigate();
  const homePageHandler=()=>{
   navigate("/")
  }

  return (
    <div  className='px-40 py-8  shadow-2xl shadow-black ' >
       <div className='flex justify-between  items-center'>
         <div onClick={homePageHandler} className='font-gotham group  text-3xl tracking-wider  text-white '><span className=' transition duration-500 group-hover:text-pink-600 '>Jobless</span> <span className='text-pink-600 transition duration-500 group-hover:text-white '>Nerd</span></div>
         <div className='flex  justify-center items-center space-x-16 text-lg tracking-wider'>
          <div className='text-white group   flex items-center space-x-2'>
            <p className='text-xl transition duration-500 group-hover:text-pink-600 focus:scale-105'><MdShoppingCart/></p>
            <p className='font-gotham transition duration-500 text-pink-600  group-hover:text-white '>CART</p>
          </div>
          <div className='text-white group font-gotham flex items-center space-x-2'>
            <p className='text-xl transition duration-500 group-hover:text-pink-600 '><BsPersonFill/></p>
            <p className='transition duration-500 text-pink-600 group-hover:text-white '>SIGN IN</p>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Header