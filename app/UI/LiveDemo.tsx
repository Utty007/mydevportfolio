import Link from 'next/link';
import React from 'react'

type liveDemoProps = {
  link: string;
  showDemo?: boolean;
}

function LiveDemo({ link, showDemo=true}: liveDemoProps) {
  return (
    <Link target='_blank' href={link} className='bg-[#fa043d] text-white p-3 rounded-xl hover:bg-transparent hover:text-black border-[#fa043d] hover:border-solid border transition-all'>Live <span>{showDemo && "Demo"}</span></Link>
  )
}

export default LiveDemo;