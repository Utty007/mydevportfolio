import type { Metadata } from "next";
import "./globals.css";

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
      {children}
    </html>
  );
}
