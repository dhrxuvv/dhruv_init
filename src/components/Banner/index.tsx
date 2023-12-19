import React from 'react'
import Image from 'next/image'
import that1 from '../../app/that1.jpg';
import that2 from '../../app/that2.jpg';

type Props = {}

const Banner =() =>{
  return( 
      <section className=" h-screen flex   ">
         <section className="flex-1 bg-trueGray-50 h-screen" />
               <Image src={that2} alt={"Banner Image"} width={600} height={600} className= " left-40 absolute top-40 py-40 "/>
                <h2 className= " left-40 absolute top-80 font-bold text-7xl py-60" > CLEAN FRESH</h2>
                <p className=" absolute text-2xl w-96 top-96 left-40 py-64">The Lorem Ipsum text, commonly used as placeholder content in design</p>         
                 

          <section />
          <section className="flex-1 w-1/2 bg-green-100 h-screen relative" />
                <Image src={that1} alt={"Banner Image"} width={800} height={800} className="absolute left-1/2 top-24 py-9"/>
          <section />
      </section>
  );
};
export default Banner;