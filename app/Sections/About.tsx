/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import DevImage from '@/app/Assets/Utty.jpeg'
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
// import Link from 'next/link';

function About() {
  return (
    <div className={`mt-16 text-center bg-white dark:bg-black p-4`}>
        <h1 data-aos="fade-up" className=' text-5xl text-[#fa043d] mb-10'>About Uthman</h1>
        <div className='flex gap-5 flex-col md:flex-row items-center justify-center m-auto'>
          <div className='w-[320px] h-[350px] border-[#fa043d] border-4 rounded-full overflow-hidden bg-[#fa043d] flex items-center'>
            <Image data-aos="zoom-in" data-aos-duration="2000" className='mx-auto' src={DevImage} width={320} height={300} alt='An Image of Kayode Uthman'/>
          </div>
          <div className='max-w-[600px]'>
            <p data-aos="fade-right" className='text-left text-xl'>I'm a developer with a keen ability to seamlessly merge diverse front-end technologies. My passion lies in crafting intuitive user interfaces that captivate audiences across all devices. <br /> Are you looking to enhance your online presence and embark on a digital transformation journey? I'm here to collaborate with you and bring your vision to life. Let's connect and explore how we can leverage innovative web solutions to propel your business forward. </p>
          </div>
        </div>
        
        <div className='mt-10'>
            <h3 data-aos="fade-up" className=' text-[#fa043d] text-2xl'>Education </h3>
            {/* <p className='text-left mb-3 sm:mb-0 sm:text-center'><span>Secondary School Education:</span>  Attended Ansar-Ud-Deen Grammar School, AUDGS, Surulere.</p> */}
            <p data-aos="fade-right" className='text-left sm:text-center'> {/* <span>University Education:</span>*/} In my third year, Currently studying Information Technology (B.sc) in the University of Ilorin.</p>
            <h3 data-aos="fade-up" className='text-[#fa043d] text-2xl mt-6 mb-2 '>Languages And Frameworks Learnt</h3>
            <div className='flex flex-wrap items-start gap-5 justify-center'>
              <ul data-aos="flip-right" data-aos-duration="1000" className='flex flex-col border bg-blue-50 border-black dark:border-white dark:bg-black items-start rounded-md shadow-sm shadow-white gap-2 flex-wrap justify-center p-2'>
                <li className='list-item-style'><span className='flex items-center gap-1'><Html /> <span className='w-[120px] text-left'>Html</span> </span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/> </span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><Css/> <span className='w-[120px] text-left'>CSS</span> </span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/> </span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><Scss/> <span className='w-[120px] text-left'>SCSS</span> </span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/> </span></li>
                {/* <li className='list-item-style'><span className='flex items-center gap-1'><Bs/> <span className='w-[120px] text-left'>Bootstrap</span> </span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/> </span></li> */}
                <li className='list-item-style'><span className='flex items-center gap-1'><Tailwind/> <span className='w-[120px] text-left'>Tailwind Css </span></span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/></span></li>
            </ul>
            <ul data-aos="flip-left" data-aos-duration="1000" className='flex flex-col border bg-blue-50 border-black dark:border-white dark:bg-black items-start rounded-md shadow-sm shadow-white gap-2 flex-wrap justify-center p-2'>
                <li className='list-item-style'><span className='flex items-center gap-1'><Js/> <span className='w-[120px] text-left'>JavaScript</span></span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/> <BsStarHalf className='text-[#FFD700] dark:text-white'/></span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><Ts/> <span className='w-[120px] text-left'>TypeScript</span> </span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BiStar /></span></li>
                {/* <li className='list-item-style'><span className='flex items-center gap-1'><Jq/> <span className='w-[120px] text-left'>jQuery</span> </span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span> <span className='flex items-center gap-1'><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BiStar /></span></li> */}
                <li className='list-item-style'><span className='flex items-center gap-1'><ReactL/> <span className='w-[120px] text-left'>React Js</span> </span><span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarHalf className='text-[#FFD700] dark:text-white'/></span></li>
                <li className='list-item-style'><span className='flex items-center gap-1'><Next/> <span className='w-[120px] text-left'>Next Js</span> </span> <span className='w-[50px] sm:w-[150px] mr-6 bg-[#fa043d] rounded-sm h-1'></span><span className='flex items-center gap-1'> <BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarFill className='text-[#FFD700] dark:text-white'/><BsStarHalf className='text-[#FFD700] dark:text-white'/></span></li>
            </ul>
            </div>
            <h3 className='text-[#fa043d] text-2xl mt-6' data-aos="fade-down">Activities Outside Of Coding</h3>
            <ul className='list-disc text-left sm:text-center sm:list-none pl-4'>
              <li data-aos="fade-right" data-aos-duration="500">School Work</li>
              <li data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">Playing Chess</li>
              <li data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500">Watching movies</li>
              <li data-aos="fade-right" data-aos-delay="1500" data-aos-duration="500">Reading novels</li>
              <li data-aos="fade-right" data-aos-delay="2000" data-aos-duration="500">Hanging out with friends.</li>
            </ul>
        </div>
    </div>
  )
}

export default About
//To consist of education bg, technologies worked with, hobbies, tech aspiration.