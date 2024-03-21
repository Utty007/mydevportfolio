/* eslint-disable react/jsx-key */
import React from 'react'
import C360Image from '@/app/Assets/C360-Active.png'
import PiggyVestImage from '@/app/Assets/Piggyvest-Home.png'
import TrelloImage from '@/app/Assets/trello-clone-home.png'
import ShopifyImage from '@/app/Assets/ShopifyDb.png'
import Image from 'next/image'
import { TbBrandNextjs, TbBrandTypescript, TbBrandTailwind, TbBrandSpotify, TbBrandReact, TbBrandCss3, TbBrandRedux, TbBrandHtml5, TbBrandJavascript } from 'react-icons/tb'
import Link from 'next/link'

function Portfolio() {
  return (
    <div id="Portfolio" className='mt-16 px-12'>
        <h1 className='text-center text-5xl text-[#fa043d]' data-aos="zoom-in">Recent Projects</h1>
        <div className='flex flex-col gap-7 lg:flex-row justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image data-aos="zoom-in-up" data-aos-duration="2000" src={C360Image} alt='C360 Homepage Image'/>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> C360 MUSIC APP</h2>
                  <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> This Project was built to display my skills with APIs. The API used here is the Spotify API.
                  You can search and play songs of your favorite artists, however, restrictions from Spotify only allows access to a 30 seconds version of it. All media functionalities are Implemented.
                  </h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTypescript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTailwind className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandSpotify className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' />
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <Link href='https://c360-music.netlify.app' className='bg-[#fa043d] text-white p-3 rounded-xl hover:bg-transparent hover:text-white border-[#fa043d] hover:border-solid border transition-all'>Live Demo</Link> <Link href="https://github.com/Utty007/C360-Music-App" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
        </div>
        
        <div className='flex flex-col gap-7 lg:flex-row-reverse justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image data-aos="zoom-in-left" data-aos-duration="2000" src={TrelloImage} alt='Trello Image' />
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> Trello Clone</h2>
                <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> This was built as a project to replicate the Trello Ui. It also interacts with a backend. The react drag and drop library is also Implemented. Zustand was used for state management.</h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' />
                    <TbBrandTypescript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTailwind className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <Link href='https://trello-clone-bu.netlify.app' className='bg-[#fa043d] text-white p-3 rounded-xl hover:bg-transparent hover:text-white border-[#fa043d] hover:border-solid border transition-all'>Live Demo</Link> <Link href="https://github.com/Utty007/Trello-clone" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
        </div>
        
        <div className='flex flex-col gap-7 lg:flex-row justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image data-aos="zoom-in-left" data-aos-duration="2000" src={PiggyVestImage} alt='PiggyVest Clone Homepage Image' />
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> PiggyVest Clone</h2>
                <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> This Project was built as a practice project, to recreate the slick, and beautiful user interface of the Piggyvest landing page.</h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandReact className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandRedux className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandCss3 className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    {/* <TbBrandSpotify className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> */}
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <Link target='_blank' href='https://piggy-vest-clone.netlify.app' className='bg-[#fa043d] text-white p-3 rounded-xl hover:bg-transparent hover:text-white border-[#fa043d] hover:border-solid border transition-all'>Live Demo</Link> <Link target='_blank' href="https://github.com/Utty007/Piggyvest-Clone" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
          </div>
      {/*
        <div className='flex flex-col gap-7 lg:flex-row-reverse justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image data-aos="zoom-in-down" data-aos-duration="2000" src={ShopifyImage} alt='Shopify Homepage Image' />
            </div>
            <div data-aos="fade-right" data-aos-duration="2000" className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> Shopify Dashboard</h2>
                <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> I built this as my submission for a Hackathon that required us using only Html, Css and JavaScript to build the Spotify Dashboard. We were also to focus on Web Inclusivity.</h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandHtml5 className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandCss3 className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandJavascript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <Link href='https://trello-clone-bu.netlify.app' className='bg-[#fa043d] text-white p-3 rounded-xl hover:bg-transparent hover:text-white border-[#fa043d] hover:border-solid border transition-all'>Live Demo</Link> <Link href="https://github.com/Utty007/Trello-clone" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
        </div>
        */}
        {/* <Link target='_blank' href="https://github.com/Utty007" className='bg-black p-3 rounded-xl flex justify-center max-w-[100px] mx-auto my-6'>See More</Link>   */}
    </div>
  )
}

export default Portfolio
