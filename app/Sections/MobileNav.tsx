import React, { useRef } from 'react'
import Link from "next/link";
import { UiFunctions } from '@/Store/UiFunctions';


function MobileNav() {
  const [toggleModal] = UiFunctions(state => [state.toggleModal])

  const toggleModalHandler = (prop: boolean) => {
    toggleModal(prop)
  }
  return (
    <div data-aos="zoom-in-down" data-aos-duration="2000"  className='bg-[#eff6ff] text-[#24292c] dark:bg-[#24292c] dark:text-white w-4/5 mx-[10%] mt-6 rounded-md p-5 fixed top-[80px] left-0 shadow-md z-30'>
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col gap-5">
            <li onClick={() => { toggleModalHandler(false) }}><Link className="decoration-solid" href="#Home">HOME</Link></li>
            <li onClick={() => { toggleModalHandler(false) }}><Link className="decoration-solid" href="#About">ABOUT</Link></li>
            <li onClick={() => { toggleModalHandler(false) }}><Link className="decoration-solid" href="#Portfolio">PORTFOLIO</Link></li>
            <li onClick={() => { toggleModalHandler(false) }}><Link className="decoration-solid" href="#Contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav;
