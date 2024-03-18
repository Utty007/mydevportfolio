import { UiFunctions } from '@/Store/UiFunctions';
import React from 'react';

function Overlay() {
  const [toggleModal] = UiFunctions(state => [state.toggleModal])
  return (
      <div data-aos="fade-right" onClick={() => {toggleModal(false)}} className='bg-white dark:bg-black opacity-70 top-0 left-0 fixed w-full h-[100%] z-20'/>
  )
}

export default Overlay;