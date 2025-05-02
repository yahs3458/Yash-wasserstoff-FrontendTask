'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const lines = [
  ['WE', { image: '/images/balloons.png' }, 'ORGANIZE THE'],
  ['CONNECTION', { image: '/images/flowers.jpg' }],
  [{ image: '/images/crowd.png' }, 'BETWEEN', { image: '/images/singer.png' }, 'MUSIC'],
  ['ARTIST', { image: '/images/stage.png' }, 'CULTURE'],
  [{ image: '/images/art.png' }, 'ART', '& COLLECTIONS', { image: '/images/dress.png' }],
];


const AnimatedImage = ({ src }: { src: string }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setExpanded((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
<motion.div
      className="overflow-hidden rounded"
      animate={{
        width: expanded ? 271 : 100, // Expand to 371px, contract to 100px
        height: 61,
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
      }}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#fff2dd]  text-3xl md:text-6xl leading-tight space-y-6">
      {lines.map((line, i) => (
        <div key={i} className="flex flex-wrap justify-center gap-3 items-center">
          {line.map((segment, idx) =>
            typeof segment === 'string' ? (
              <span
              key={idx}
              className="text-black font-bold text-6xl md:text-6xl whitespace-nowrap "
            >
              {segment}
            </span>
            
            ) : (
              <AnimatedImage key={idx} src={segment.image} />
            )
          )}
        </div>
      ))}
    </section>
  );
};

export default Hero;
