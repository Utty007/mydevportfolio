import React, { lazy } from 'react'

const Experience = lazy(() => import('../Sections/Experience'))

function page() {
  return (
    <Experience />
  )
}

export default page