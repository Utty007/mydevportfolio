'use client'

import { lazy } from "react";
import { UiFunctions } from "@/Store/UiFunctions";

const Main = lazy(() => import('./Sections/Main'))

export default function Home() {
  const [modal] = UiFunctions(state => [state.modal])

  return (
    <main className={`${modal? "overH" : ""} relative`}>
     <Main />
    </main>
  );
}
