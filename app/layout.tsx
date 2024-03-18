'use client'

import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import { UiFunctions } from "@/Store/UiFunctions";
import MobileNav from "@/app/Sections/MobileNav";
import Overlay from "@/app/UI/Overlay";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const metadata: Metadata = {
  title: "Utty",
  description: "Uthman's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [modal] = UiFunctions(state => [state.modal])

  return (
    <html lang="en">
      <body className={`${modal? "overH" : ""} relative`}>
        <Header />
        <div className="block sm:hidden">
          {modal && <MobileNav />}
          {modal && <Overlay />}
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
