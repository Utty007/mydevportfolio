import React, { lazy } from 'react'

const Portfolio = lazy(() => import('../Sections/Portfolio'))

function page() {
  return (
    <Portfolio />
  )
}

export default page