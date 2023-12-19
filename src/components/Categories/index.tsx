import React from 'react';
import Image from 'next/image';
import Star from '@/app/star.png'
import Star2 from '@/app/star2.png'

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Props = {src:string | StaticImport, alt: string, text:string, review:string, bg: string , real_price:number ,price: number}& React.HTMLAttributes<HTMLElement>;

const Cat = ({ src, alt, className, bg , text, real_price, price ,review, ...props }:Props) => {
  return (
    <div className='inline-block'>
   <div className={`h-96 w-80 border-solid border-2 m-5 rounded-lg flex flex-col justify-center items-center ${bg}`}>
    <Image
      src={src}
      alt={alt}
      className='h-full w-full'
    />
    </div>
    <div className='m-5'>
      <div className='inline-block'>
      <Image src={Star} alt={alt} className='inline-block' />
    <Image src={Star} alt={alt} className='inline-block' />
    <Image src={Star} alt={alt} className='inline-block' />
    <Image src={Star} alt={alt} className='inline-block' />
    <Image src={Star2} alt={alt}  className='inline-block' />
      </div>
      <div className='inline-block text-gray-700 float-right'>
             {review}
      </div>
   
    
    <div className='py-3 text-lg'>{text}<div/>
    </div>
    <div className=' text-lg'>
      <div className="inline-block">Rs.{price}</div>
      <div className='line-through inline-block pl-5 text-xs'>{real_price}</div>
    <div/>
    </div>
    </div>    
  </div>
  );
};

export default Cat;