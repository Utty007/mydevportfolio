import React, { lazy } from 'react'

const Contact = lazy(() => import('../Sections/Contact'))

function page() {
  return (
    <div className='bg-white dark:bg-black h-fit my-auto flex-1'>
        <Contact />
    </div>
  )
}

export default page