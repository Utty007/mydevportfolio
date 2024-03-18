/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import DevImage from '@/app/Assets/19362653-removebg.png'
import Image from 'next/image';
import Ig from '../Assets/SVG/Ig';
import Fb from '../Assets/SVG/Fb';
import Li from '../Assets/SVG/Li';
import Link from 'next/link';
import Gh from '../Assets/SVG/Gh';
import Twitter from '../Assets/SVG/Twitter';
import TwitterLogo from '../Assets/Twitter-Logo.png'


function Home() {

  return (
    <div id='Home' className='flex flex-col md:flex-row-reverse justify-evenly items-center mb-32 overflow-hidden'>
          <div data-aos="fade-left" data-aos-duration="3000" className='min-w-[300px] max-w-[600px]'>
            <h3>Hello, <span className='text-[#fa043d] text-xl'>I'm</span></h3>
            <h1 className='text-6xl py-2'>Kayode Uthman</h1>
            <h2 className='text-3xl'>Front End Engineer</h2>
            
            <p className='py-4'>
              
                 {/* I like to think I'm a forward-thinking front-end developer specializing in the creation of modern, mobile-responsive web applications.  */}
            </p>
            
            <h3 className='text-2xl mb-2'>FIND ME ON</h3>
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
              <span>
                <Link href="https://twitter.com/KayodeUthman2">
                  <Image src={TwitterLogo} alt='Twitter Logo' width={40} height={40}/>
                </Link>
              </span>
            </div>
        </div>
        <div data-aos="fade-right" className='w-[500px] h-[500px] cursor-pointer flex items-center'>
          <Image className='mx-auto w-full scaleAnimation' src={DevImage} alt='An Image of Kayode Uthman'/>
        </div>
    </div>
  )
}

export default Home;