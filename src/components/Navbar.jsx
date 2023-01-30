import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
const Navbar = () => {
  const [nav, setnav] = useState(true);
  const [logo, setlogo] = useState(false);
  const handlenav = () => {
    setnav(!nav)
  }
  return (
    <div className=' absolute flex justify-between w-full px-4 items-center h-20 text-white z-20'>
      <h1 onClick={ () => {
        setlogo(!logo)
      }
      } className={logo?'hidden':'block '}>BEACHES</h1>

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>

      <div className='hidden md:flex '>
          <BsPerson   size={20}/>
          <BiSearch className='ml-4' size={20}/>
      </div>

      <div onClick={handlenav} className='md:hidden z-50 '>
        {nav?<HiOutlineMenuAlt4 size={30}/>:<AiOutlineClose className='text-black' size={30}/>}
        
      </div>

      <div className={!nav?' text-black absolute top-0 left-0 w-full bg-gray-100/90 px-4 py-6 flex flex-col ':'absolute top-0 left-[-100%]'}>
        <ul >
        <h1 className=' uppercase text-2xl font-bold'>beaches</h1>
        <li className=' border-b'>Home</li>
        <li className=' border-b'>Destination</li>
        <li className=' border-b'>Travel</li>
        <li className=' border-b'>View</li>
        <li className=' border-b'>Book</li>
        </ul>
        <div className='flex flex-col'>
          <button className='my-6'>Search</button>
          <button>Account</button>
        </div>
        <div className='flex justify-between my-6'>
          <FaFacebook className='icon' size={30}/>
          <FaInstagram className='icon' size={30}/>
          <FaPinterest className='icon' size={30}/>
          <FaTwitter className='icon' size={30}/>
          <FaYoutube className='icon' size={30}/>
        </div>
      </div>

    </div>
  )
}

export default Navbar
