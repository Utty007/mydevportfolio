/* eslint-disable react/no-unescaped-entities */

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";


function Main() {
  return (
    <main className='mt-16 bg-[#eff6ff] text-[#24292c] dark:bg-[#24292c] dark:text-white'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main;