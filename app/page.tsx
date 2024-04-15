'use client'
import Main from "./Sections/Main";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import { UiFunctions } from "@/Store/UiFunctions";
import MobileNav from "@/app/Sections/MobileNav";
import Overlay from "@/app/UI/Overlay";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Home() {
      useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [modal] = UiFunctions(state => [state.modal])

  return (
    <body  className={`${modal? "overH" : ""} relative bg-[#eff6ff] text-[#24292c] dark:bg-[#24292c] dark:text-white`}>
    <Header />
        <div className="block sm:hidden">
          {modal && <MobileNav />}
          {modal && <Overlay />}
        </div>
     <Main />
     <Footer />
    </body>
  );
}
