import React from 'react'
import Image from 'next/image'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="min-h-screen bg-[#FFF4DF] text-black font-sans relative">
        <header className="absolute top-[88px] left-[50px] flex items-center gap-[20px] w-[406px] h-[51px]">
          <Image
            src="/images/Emlblem.png"
            alt="Astrix Logo"
            width={40}
            height={40}
            className="w-[40px] h-[40px]"
          />
          <Image
            src="/images/astrix.png"
            alt="Astrix Logo"
            width={139}
            height={31}
            className="w-[139px] h-[31px]"
          />
        </header>
        <main>
            {children}
        </main>
      </section>
    );
  };
  

export default Layout