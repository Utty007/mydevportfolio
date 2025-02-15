/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import DevImage from '@/app/Assets/Utty.jpg'
import { BiStar } from 'react-icons/bi'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import Html from '../Assets/SVG/Html'
import Css from '../Assets/SVG/Css'
import Scss from '../Assets/SVG/Scss'
// import Bs from '../Assets/SVG/Bs'
import Tailwind from '../Assets/SVG/Tailwind'
import Js from '../Assets/SVG/Js'
import Ts from '../Assets/SVG/Ts'
// import Jq from '../Assets/SVG/Jq'
import ReactL from '../Assets/SVG/ReactL'
import Next from '../Assets/SVG/Next'
import Image from 'next/image';
import { TbBrandNextjs } from 'react-icons/tb';
// import Link from 'next/link';

function About() {
  return (
    <div className={`text-center bg-white dark:bg-black p-4`} id="About">
      <h1 className=' text-5xl text-[#fa043d]'>About Uthman</h1>
        <div className='flex gap-5 flex-col md:flex-row items-center justify-center m-auto'>
          <div className='w-[250px] sm:w-[320px] h-[250px] sm:h-[350px] border-[#fa043d] border-4 rounded-full overflow-hidden bg-[#fa043d] flex items-center'>
            <img className='mx-auto' src={DevImage.src} alt='An Image of Kayode Uthman'/>
          </div>
          <div className='max-w-[600px]'>
            <p className='text-left text-lg sm:text-xl'>I'm a developer with a keen ability to seamlessly merge diverse front-end technologies. My passion lies in crafting intuitive user interfaces that captivate audiences across all devices. <br /> Are you looking to enhance your online presence and embark on a digital transformation journey? I'm here to collaborate with you and bring your vision to life. Let's connect and explore how we can leverage innovative web solutions to propel your business forward. </p></div>
        </div>
        <div className='mt-10'>
            <h3 className=' text-[#fa043d] text-2xl'>Education</h3>
            {/* <p className='text-left mb-3 sm:mb-0 sm:text-center'><span>Secondary School Education:</span>  Attended Ansar-Ud-Deen Grammar School, AUDGS, Surulere.</p> */}
            <p className='text-left sm:text-center'> {/* <span>University Education:</span>*/} Final Year, Currently studying Information Technology (B.sc) in the University of Ilorin.</p>
            <h3 className='text-[#fa043d] text-2xl mt-6 mb-2 '>Tech Stack</h3>
            <div className='flex flex-wrap items-start gap-5 justify-center'>
              <ul className='flex flex-col border bg-blue-50 border-black dark:border-white dark:bg-gray-900 items-start rounded-md shadow-sm shadow-white gap-2 flex-wrap justify-center p-2'>
                <li className='list-item-style'><span className='flex items-center gap-1'><Html /> <span className='w-[120px] text-left'>Html</span> </span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/> </span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><Css/> <span className='w-[120px] text-left'>CSS</span> </span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/> </span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><Scss/> <span className='w-[120px] text-left'>SCSS</span> </span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/> </span></li>
                {/* <li className='list-item-style'><span className='flex items-center gap-1'><Bs/> <span className='w-[120px] text-left'>Bootstrap</span> </span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/> </span></li> */}
                <li className='list-item-style'><span className='flex items-center gap-1'><Tailwind/> <span className='w-[120px] text-left'>Tailwind Css </span></span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/></span></li>
            </ul>
            <ul className='flex flex-col border bg-blue-50 border-black dark:border-white dark:bg-gray-900 items-start rounded-md shadow-sm shadow-white gap-2 flex-wrap justify-center p-2'>
                <li className='list-item-style'><span className='flex items-center gap-1'><Js/> <span className='w-[120px] text-left'>JavaScript</span></span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/> <BiStar className='text-[#000] dark:text-white'/></span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><Ts/> <span className='w-[120px] text-left'>TypeScript</span> </span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BiStar className='text-[#000] dark:text-white'/></span></li>
                {/* <li className='list-item-style'><span className='flex items-center gap-1'><Jq/> <span className='w-[120px] text-left'>jQuery</span> </span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BiStar /></span></li> */}
                <li className='list-item-style'><span className='flex items-center gap-1'><ReactL/> <span className='w-[120px] text-left'>React Js</span> </span><span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarHalf className='text-[#000] dark:text-white'/></span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' />  <span className='w-[120px] text-left'>Next Js</span> </span> <span className='hidden sm:block sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarFill className='text-[#000] dark:text-white'/><BsStarHalf className='text-[#000] dark:text-white'/></span></li>
            </ul>
            </div>
            <h3 className='text-[#fa043d] text-2xl mt-6'>Activities Outside Of Coding</h3>
            <ul className='list-disc text-left sm:text-center sm:list-none pl-4'>
              <li>Playing Chess</li>
              <li>Watching movies</li>
              <li>Reading novels</li>
            </ul>
        </div>
    </div>
  )
}

export default About
//To consist of education bg, technologies worked with, hobbies, tech aspiration.