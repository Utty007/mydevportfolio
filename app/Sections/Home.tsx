/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react';
import DevImage from '@/app/Assets/19362653-removebg.png'
import Image from 'next/image';
import Ig from '../Assets/SVG/Ig';
import Li from '../Assets/SVG/Li';
import Link from 'next/link';
import Gh from '../Assets/SVG/Gh';


function Home() {

  return (
    <div id='Home' className='flex flex-col md:flex-row-reverse justify-evenly items-center py-5 px-12 bg-[#eff6ff] text-[#24292c] dark:bg-gray-900 dark:text-white'>
          <div className='min-w-[300px] max-w-[600px]'>
            <h3>Hello, <span className='text-[#fa043d] text-xl'>I'm</span></h3>
            <h1 className='text-6xl py-2'>Kayode Uthman</h1>
            <h2 className='text-3xl'>Front End Engineer</h2>
            
            <p className='text-left text-base'>
              I'm a forward-thinking front-end developer specializing in the creation of modern, mobile-responsive web applications. 
            </p>

            
            <h3 className='text-2xl mb-2 mt-8'>FIND ME ON</h3>
            <div className='flex items-center gap-4'>
              <span>
                <Link href="https://www.instagram.com/kayodeiremideuthman"><Ig /></Link>
              </span>
              <span>
                <Link href="https://www.linkedin.com/in/kayode-uthman007"><Li /></Link>
              </span>
              <span>
                <Link href="https://github.com/utty007"> <Gh /> </Link>
              </span>
            </div>
        </div>
        <div className='sm:w-[500px] sm:h-[500px] w-[350px] hidden sm:flex h-[350px] cursor-pointer items-center'>
          <Image className='mx-auto w-full scaleAnimation' src={DevImage} alt='An Image of Kayode Uthman'/>
        </div>
    </div>
  )
}

export default Home;
