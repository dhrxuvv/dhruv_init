
import Banner from '@/components/Banner'
import Blog from '@/components/Blog'
import Categories from '@/components/Categories'
import Divider from '@/components/Divider'
import Offers from '@/components/Offers'
import Top_sells from '@/components/Top_sells'
import React from 'react'
import Image from 'next/image'
import hop from '../app/hop.jpg';
import lip from '../app/lip.webp';
import natural from '../app/natural.webp';
import skin from '../app/skin.webp';
import face from '../app/face.webp';
import blusher from '../app/blush.webp';
import bottle1 from '../app/bottle-1.jpg'
import bottle2 from '../app/bottle-2.jpg'
import bottle3 from '../app/bottle-3.jpg'
import bottle4 from '../app/bottle-4.jpg'
import bottle5 from '../app/bottle-5.jpg'
import bottle6 from '../app/bottle-6.jpg'
import bottle7 from '../app/bottle-7.jpg'


type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Banner />
      <div className='flex justify-around my-44 px-48'>
        <Blog
          src={hop}
          alt='cat'
          text='Hare Care'
          bg='bg-green-300'
        />
        <Blog
          src={skin}
          alt='cat'
          text='Skin Care'
          bg='bg-yellow-400'
        />
        <Blog
          src={lip}
          alt='cat'
          text='Lip Stick'
          bg='bg-purple-400'
        />
        <Blog
          src={face}
          alt='cat'
          text='Face skin'
          bg='bg-pink-400'
        />
        <Blog
          src={blusher}
          alt='cat'
          text='Blusher'
          bg='bg-purple-400'
        />
        <Blog
          src={natural}
          alt='cat'
          text='Natural'
          bg='bg-yellow-400'
        />
      </div>
       <div className="flex flex-wrap justify-around m-20 my-48 px-48">
        <Categories src={bottle1} alt='cat' bg='bg-purple-200' text="Natural" price={300} real_price={500} review="150 Reviews" />
        <Categories src={bottle2} alt='cat' bg='bg-red-200' text="Natural" price={300} real_price={500} review="150 Reviews" />
        <Categories src={bottle3} alt='cat' bg='bg-yellow-100' text="Natural" price={300} real_price={500} review="150 Reviews" />
        <Categories src={bottle4} alt='cat' bg='bg-gray-200' text="Natural" price={300} real_price={500} review="150 Reviews" />
        <Categories src={bottle5} alt='cat' bg='bg-purple-200' text="Natural" price={300} real_price={500} review="150 Reviews" />
        <Categories src={bottle6} alt='cat' bg='bg-green-200' text="Natural" price={300} real_price={500} review="150 Reviews" />
        <Categories src={bottle7} alt='cat' bg='bg-blue-200' text="Natural" price={300} real_price={500} review="150 Reviews" />
        </div>
      <Divider />
      <Offers />
      <Top_sells />
    </>
  )
}

export default page