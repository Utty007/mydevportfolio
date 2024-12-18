'use client'

import Main from "./Sections/Main";
import { UiFunctions } from "@/Store/UiFunctions";
import MobileNav from "@/app/Sections/MobileNav";
import Overlay from "@/app/UI/Overlay";

export default function Home() {

  const [modal] = UiFunctions(state => [state.modal])

  return (
    <main className={`${modal? "overH" : ""} relative`}>
     <Main />
    </main>
  );
}
