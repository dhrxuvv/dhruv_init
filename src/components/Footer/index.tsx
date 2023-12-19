import React from 'react'
import Image from 'next/image';
import logo from '../../app/logo.jpg';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='h-96 bg-slate-50 flex justify-around items-center'>
        <div>
        <Image src={logo} alt="logo" height={80} width={90} placeholder='blur' />
        <div className='py-7 text-lg'>
         Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.<br />Lorem Ipsum has been.
        </div>
        </div>
        <div>
          <ul>
            <li className='font-semibold text-2xl'>Information</li>
            <div className='py-7 space-y-7'>
              <li>Blog</li>
              <li>Privacy</li>
              <li>My Account</li>
            </div>
          </ul>
        </div>
        <div>
          <ul className='space-y-7 text-lg'>
            <li>About us</li>
            <li>Login</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <ul className='space-y-7 text-lg'>
            <li>Contact</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <div className='text-2xl font-semibold'>Social Info</div>
          <div className='flex space-x-14 py-12 text-2xl'>
             <div><FaTwitter/></div>
             <div><FaFacebookF/></div>
             <div><FaPinterestP/><div/>
           </div>
          </div>
        </div>

    </footer>
  )
}
export default Footer