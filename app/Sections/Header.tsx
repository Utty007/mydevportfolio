"use client"
import { UiFunctions } from "@/Store/UiFunctions";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "../UI/ThemeToggle";

const Header = () => {
  const [modal, toggleModal] = UiFunctions((state) => [state.modal, state.toggleModal])
  const toggleHandler = (prop: boolean) => {
    toggleModal(prop)
  }

  return (
    <header className="flex items-center justify-between px-5 sm:px-8 bg-[#eff6ff] text-[#24292c] dark:bg-[#24292c] dark:text-white py-4 sticky top-0 shadow-md z-30">
      <div className="text-3xl animate-pulse"> Utty </div>
      <div className="hidden sm:block">
        <ul className="flex gap-5">
            <li><Link  className="border-b-2 border-transparent hover:border-[#fa043d] cursor-pointer pb-1 transition-all" href='#Home'>HOME</Link></li>
            <li><Link  className="border-b-2 border-transparent hover:border-[#fa043d] cursor-pointer pb-1 transition-all" href="#About">ABOUT</Link></li>
            <li><Link  className="border-b-2 border-transparent hover:border-[#fa043d] cursor-pointer pb-1 transition-all" href="#Portfolio">PORTFOLIO</Link></li>
            {/* <li><Link  className="border-b-2 border-transparent hover:border-[#fa043d] cursor-pointer pb-1 transition-all" href="#Resume">RESUME</Link></li> */}
            <li><Link  className="border-b-2 border-transparent hover:border-[#fa043d] cursor-pointer pb-1 transition-all" href="#Contact">CONTACT</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      <div className="flex items-center md:hidden">
        {!modal ? <FaBars className="cursor-pointer" onClick={() => { toggleHandler(true) }} /> : <IoMdClose className="cursor-pointer" onClick={() => { toggleHandler(false) }} />}
      </div>
      </div>
    </header>
  )
}

export default Header;