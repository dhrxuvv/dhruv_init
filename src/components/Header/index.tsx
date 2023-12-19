import React from 'react';
import Image from 'next/image';
import logo from '../../app/logo.jpg';
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoReorderFourSharp } from "react-icons/io5";


type Props = {}

const Header = (props: Props) => {
  return (
     <nav className=' bg-white h-24 px-4 flex justify-between items-center '>
      <div className='flex items-center py-2'>
        <Image src={logo} alt="logo" height={80} width={90} placeholder='blur' />
        <ul className='flex items-center space-x-16 px-28 text-lg font-medium hover:'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className='flex items-center space-x-11 h-12 text-2xl px-9'>
        <div><CiSearch /></div>
        <div><FaCartArrowDown /></div>
        <div><FaUserAlt /></div>
      </div>
    </nav>
  )
}

export default Header