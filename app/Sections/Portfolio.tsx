/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from 'react'
import C360Image from '@/app/Assets/C360-Active.png'
import PiggyVestImage from '@/app/Assets/Piggyvest-Home.png'
import TrelloImage from '@/app/Assets/trello-clone-home.png'
import ShopifyImage from '@/app/Assets/ShopifyDb.png'
import artsyImage from '@/app/Assets/image.png'
import KekeImage from '@/app/Assets/kekecruiseScreenshot.png'
import VertexImage from "@/app/Assets/vertexScreenshot.png"
import EngageAmImage from "@/app/Assets/EngageAm.png"
import Image from 'next/image'
import { TbBrandNextjs, TbBrandTypescript, TbBrandTailwind, TbBrandSpotify, TbBrandReact, TbBrandCss3, TbBrandRedux, TbBrandHtml5, TbBrandJavascript, TbBrandFirebase } from 'react-icons/tb'
import Link from 'next/link'
import LiveDemo from '../UI/LiveDemo'

function Portfolio() {
  return (
    <div id="Portfolio" className='px-12 bg-white pt-4 dark:bg-black'>
        <h1 className='text-center text-5xl text-[#fa043d]'>Recent Projects</h1>
        <div className='flex flex-col gap-7 lg:flex-row justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image src={VertexImage} alt='Vertex Screenshot'/>
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> Vertex</h2>
                  <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> I was contracted by the sales and marketing startup Vertex to design, develop, and deploy a high-converting landing page, combining UI/UX design and SEO optimization to elevate their brand's online visibility and drive engagement.
                  </h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandTypescript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTailwind className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <LiveDemo showDemo={false} link='https://vertexglobal.org'/>
                </div> 
            </div>
        </div>
        <div className='flex flex-col gap-7 lg:flex-row-reverse justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image src={EngageAmImage} alt='EngageAm Image' />
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> Engage Am</h2>
                <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> EngageAm is a community-driven platform designed to help you grow your social media engagement while rewarding genuine actions. Whether you’re looking for likes, comments, views, or followers, we make it effortless to connect with others for mutual growth.</h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' />
                    <TbBrandTypescript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTailwind className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <LiveDemo showDemo={false} link='https:engageam.app/dashboard'/>
                </div> 
            </div>
          </div>
          
        <div className='flex flex-col gap-7 lg:flex-row justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image src={KekeImage} alt='Keke Homepage Image'/>
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> KekeCruise</h2>
                  <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> I was contracted by the startup KekeCruise to design, develop, and deploy their landing page, handling both the UI/UX design and SEO optimization to enhance their online presence and visibility.
                  </h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandTypescript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTailwind className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <LiveDemo showDemo={false} link='https://kekecruise.com'/>
                </div> 
            </div>
          </div>
          
        <h2 className='text-2xl text-[#fa043d] font-semibold mt-8 mb-5 bg-[#eff6ff] dark:bg-gray-900 p-2 text-center'>Some Personal Projects</h2>
        
        <div className='flex flex-col gap-7 lg:flex-row-reverse justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image src={artsyImage} alt='Artsy Ecommerce Homepage'/>
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span>Artsy Ecommerce</h2>
                  <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> This e-commerce website has two main parts: a client side for customers and a merchant side for sellers. Both parts include user authentication to keep everything secure. All product information is stored in a Firebase database, ensuring fast and reliable access. This project showcases my ability to create a complete and functional online store.
                  </h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTailwind className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandFirebase className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' />
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <LiveDemo link='https://artsy-ecom.netlify.app/'/>
                    <Link target='_blank' href="https://github.com/Utty007/artsy" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
        </div>
        
        <div className='flex flex-col gap-7 lg:flex-row justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image src={C360Image} alt='C360 Homepage Image'/>
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> C360 MUSIC</h2>
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
                    <LiveDemo link='https://c360-music.netlify.app' />
                    <Link target='_blank' href="https://github.com/Utty007/C360-Music-App" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
        </div>
        
        <div className='flex flex-col gap-7 lg:flex-row-reverse justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image src={TrelloImage} alt='Trello Image' />
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> Trello Clone</h2>
                <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> This was built as a project to replicate the Trello Ui. It also interacts with a backend. The react drag and drop library is also Implemented. Zustand was used for state management.</h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandNextjs className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' />
                    <TbBrandTypescript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandTailwind className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <LiveDemo link='https://trello-clone-bu.netlify.app'/>
                    <Link target='_blank' href="https://github.com/Utty007/Trello-clone" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
        </div>
        
        <div className='flex flex-col gap-7 lg:flex-row justify-evenly items-center mt-12'>
            <div className='max-w-[500px]'>
                <Image src={PiggyVestImage} alt='PiggyVest Clone Homepage Image' />
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> PiggyVest Clone</h2>
                <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span> This Project was built as a practice project, to recreate the slick, and beautiful user interface of the Piggyvest landing page.</h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandReact className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandRedux className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandCss3 className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <LiveDemo link='https://piggy-vest-clone.netlify.app'/>
                    <Link target='_blank' href="https://github.com/Utty007/Piggyvest-Clone" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
          </div>
      
        <div className='flex flex-col gap-7 lg:flex-row-reverse justify-evenly items-center mt-12 pb-5'>
            <div className='max-w-[500px]'>
                <Image src={ShopifyImage} alt='Shopify Homepage Image' />
            </div>
            <div className='max-w-[500px]'>
                <h2 className='text-lg'><span className='text-[#fa043d]'>Name:</span> Shopify Dashboard</h2>
                <h4 className='text-lg'><span className='text-[#fa043d]'>About:</span>This project focuses on Web Inclusivity. The project was optimized to be accessible by keyboard and screen reader users.</h4>
                <h6 className='flex items-center gap-2 mt-3 text-lg'><span className='text-[#fa043d]'>Technologies used:</span> 
                    <TbBrandHtml5 className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandCss3 className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                    <TbBrandJavascript className='w-10 h-10 p-1 bg-white shadow-sm dark:bg-black' /> 
                </h6>  

                <div className='flex gap-3 items-center mt-3'>
                    <LiveDemo link='https://shopify-db.netlify.app' />
                    <Link target='_blank' href="https://github.com/Utty007/Shopify-Dashboard" className='bg-sky-50 dark:bg-black p-3 rounded-xl shadow-sm'>Source Code</Link>
                </div> 
            </div>
        </div>
       
        {/* <Link target='_blank' href="https://github.com/Utty007" className='bg-black p-3 rounded-xl flex justify-center max-w-[100px] mx-auto my-6'>See More</Link>   */}
    </div>
  )
}

export default Portfolio;
