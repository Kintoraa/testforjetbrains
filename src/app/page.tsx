import logo from "@/app/logo.webp";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
        className="w-52 h-52 bg-cover bg-center rounded-full"
        style={{ backgroundImage: `url(${logo.src}` }}
      >
        {/*  Here is a vanilla Next.js WebStorm project with no additions. Try*/}
        {/*  running it without the src directory and reload the page; you will see*/}
        {/*  that the logo no longer appears. You must include the src directory*/}
        {/*  because Next.js imports it as an object. You can verify this in the*/}
        {/*  browser inspector. Normally, it should have properties like width and*/}
        {/*  height, among others, which appear correctly in VSCode without any*/}
        {/*  issues, but they are not recognized here.*/}
      </main>
    </div>
  );
}
