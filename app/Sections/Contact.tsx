'use client'

import Link from 'next/link';
import React from 'react';
import { FaMap, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className='px-12 my-[10%]' id="Contact">
      <h1 className='text-center mt-10 mb-5 text-5xl text-[#fa043d]'>Contact Me</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
          <div className='bg-blue-50 dark:bg-gray-900 shadow-sm w-full grid-cols-1 h-40 flex flex-col items-center justify-evenly'>
            <FaMap className='text-3xl'/>
            <h3>Lagos, Nigeria.</h3>
          </div>
          <div className='bg-blue-50 dark:bg-gray-900 shadow-sm w-full grid-cols-1 h-40  flex flex-col items-center justify-evenly'>
            <FaPhone className='text-3xl'/>
            <h3>08165070331</h3>
          </div>
          <div className='bg-blue-50 dark:bg-gray-900 shadow-sm w-full grid-cols-1 h-40  flex flex-col items-center justify-evenly'>
            <MdEmail className='text-3xl'/>
            <Link className='underline' href="mailto:Kayodeuthman001@gmail.com?subject=Contact%20Request&body=Hello%20Kayode,">Kayodeuthman001@gmail.com</Link>
          </div>
        </div>

    </div>
  )
}
//09046169674
export default Contact;
