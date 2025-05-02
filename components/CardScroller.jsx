import React from "react";

const cards = [
  { src: "/images/card6.png", title: "Lunar Palace:", subtitle: "(ft. Kanye West)" },
  { src: "/images/card1.png", title: "Future Pop Art:", subtitle: "(ft. Travis Scott)" },
  { src: "/images/card2.png", title: "Neon Wreckage:", subtitle: "(ft. Doja Cat)" },
  { src: "/images/card3.png", title: "Ocean Depths:", subtitle: "(ft. The Weeknd)" },
  { src: "/images/card4.png", title: "Solar Kingdom:", subtitle: "(ft. Rihanna)" },
  { src: "/images/card5.png", title: "Electric Eden:", subtitle: "(ft. Tyler, The Creator)" },
];

const CardScroller = () => {
  const allCards = [...cards, ...cards]; // duplicate for loop animation

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <div className="h-full w-[400px] overflow-hidden">
        <div
          className="flex whitespace-nowrap h-full items-center"
          style={{
            animation: "scroll 30s linear infinite",
            width: "fit-content",
          }}
        >
          {allCards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-start mx-2 shrink-0 w-[350px]">
              <div className="text-white text-lg font-semibold leading-5 mb-2">
                {card.title}
                <span className="block text-sm font-normal text-gray-400">{card.subtitle}</span>
              </div>
              <img
                src={card.src}
                alt={`card-${idx}`}
                className="w-full h-[80vh] rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardScroller;
