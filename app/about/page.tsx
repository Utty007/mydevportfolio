import React, { lazy } from 'react'

const About = lazy(() => import('../Sections/About'))

function page() {
  return (
    <div>
        <About />
    </div>
  )
}

export default page