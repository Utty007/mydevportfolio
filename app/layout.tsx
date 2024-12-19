import type { Metadata } from "next";
import "./globals.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";

export const metadata: Metadata = {
  title: "Utty",
  description: "Uthman's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className='bg-[#eff6ff] text-gray-900 min-h-[100vh] flex flex-col justify-between dark:text-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
