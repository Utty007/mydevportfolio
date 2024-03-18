/* eslint-disable react/no-unescaped-entities */

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";


function Main() {
  return (
    <main className='px-12 mt-16'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main;