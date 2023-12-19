import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Props = {src:string | StaticImport, alt: string, text:string, bg: string}& React.HTMLAttributes<HTMLElement>;

const Cat = ({ src, alt, className, text,bg, ...props }:Props) => {
  return (
    <div className={`h-72 w-56 border-solid border-2 hover:bg-red-400  rounded-lg flex flex-col justify-center items-center ${bg}`}>
        <Image
          src={src}
          alt={alt}
          className='h-20 w-20'
        />
        <br/>
        <div className='  py-5'>{text}<div/></div>
    </div>
  );
};

export default Cat;