import React from 'react'
import Image from 'next/image'

const SecondLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen bg-[#020202] text-white font-sans relative">
      {/* Header */}
      <header className="absolute top-[15px] left-[31.78px] flex items-center gap-[20px] w-[406px] h-[51px] z-10">
        <Image
          src="/images/Astrix Branding.png"
          alt="Astrix Logo"
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
        <Image
          src="/images/yellowlogo.png"
          alt="Astrix Logo"
          width={163}
          height={64}
          className="w-[163px] h-[64px]"
        />
      </header>

      {/* Main content area */}
      <main className="flex min-h-screen pt-[80px]">
        {children}
      </main>
    </section>
  );
};

export default SecondLayout;
