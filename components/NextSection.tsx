import React, { useState } from "react";
import CardScroller from "./CardScroller";

function NextSection() {
  const [activeSection, setActiveSection] = useState<"events" | "collection">(
    "collection"
  );

  return (
    <div className="flex min-h-screen w-full bg-[#020202] text-white">
      {/* Left column - Bundesen section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 relative">
        <div className="relative flex flex-row items-center w-full h-[500px]">
          {/* Static image on the left */}
          <img
            src="/images/astrixevents.png"
            alt="Astrix Events"
            className="w-[260px] h-[450px] rounded-lg object-cover z-0"
          />
          {/* CardScroller on the right */}
          <div className="relative flex-1 flex justify-start items-center h-full -ml-20">
            <CardScroller />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center mt-10 z-10">
      <div className="relative flex bg-[#1e1e1e] rounded-full p-1">
        {/* Moving background indicator */}
        <div
          className={`absolute top-1 left-1 h-10 w-32 bg-[#3a3a3a] rounded-full transition-all duration-300 ${
            activeSection === "collection" ? "translate-x-32" : ""
          }`}
        ></div>

        {/* Buttons */}
        <button
          className={`relative z-10 w-32 h-10 rounded-full font-semibold transition-colors duration-300 ${
            activeSection === "events" ? "text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveSection("events")}
        >
          Events
        </button>
        <button
          className={`relative z-10 w-32 h-10 rounded-full font-semibold transition-colors duration-300 ${
            activeSection === "collection" ? "text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveSection("collection")}
        >
          Collections
        </button>
      </div>
    </div>

        <div className="absolute right-0 top-0 bottom-0 w-[70px] bg-[#B9A0FF] hidden md:flex items-center justify-center overflow-hidden">
          <div className="absolute animate-scroll-up flex flex-col items-center text-[#000000] text-xs font-bold tracking-widest [writing-mode:vertical-rl]">
            <span className="flex items-center -ml-2">
              <p className="text-xl whitespace-nowrap">Oasis Bus tour , JLN Stadium , Delhi</p>
              <img
                src="/images/uplogo.png"
                alt="separator"
                className="mx-2 w-4 h-4 inline-block"
              />
              <p className="text-xl whitespace-nowrap">Collection Live: Meta Lives, live on astrix</p>
            </span>
          </div>
        </div>

        {/* Heading next to the purple line */}
      </div>

      {/* Right column - only show if a section is active */}
      {activeSection === "collection" && (
        <div className="hidden md:flex md:w-1/2 p-4">
          <div className="flex flex-col w-full -mt-24">
            <h2 className="text-3xl ml-2 mt-14 font-bold text-white origin-left whitespace-nowrap">
              <span className="block"> EXPLORE YOUR FIRST </span>
              <span className="block"> EVENT</span>
            </h2>
            <h2 className="text-6xl font-semibold ml-10 text-white mt-10 origin-left whitespace-nowrap">
              <span className="block">Meta</span>
              <span className="block">Lives</span>
            </h2>
            <p className="ml-10 text-lg text-white mt-4">Live in Astrix</p>
            <p className="ml-10 text-sm text-white mt-2">
              Lorem ipsum dolor sit
              <br />
              amet consectetur. Ac
              <br />
              lorem massa in morbi
              <br />
              et sed ipsum.
              <br />
              Pellentesque mattis
              <br />
              condimentum ut nulla.
            </p>
            <div className="flex items-center ml-10 mt-2">
              <img
                src="/images/frame.png"
                alt="small"
                className="w-24 h-6 inline-block"
              />
              <span className="ml-2 text-white text-xs font-medium">
                22k people interested
              </span>
            </div>
            <h3 className="ml-10 mt-10 text-2xl font-bold text-white">
              Collection
            </h3>
            <div className="flex ml-10 mt-4 gap-4">
              <div className="w-32 h-44 rounded-lg overflow-hidden bg-gray-700">
                <img
                  src="/images/CardSmall.png"
                  alt="Card 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-44 rounded-lg overflow-hidden bg-gray-700">
                <img
                  src="/images/CardSmall.png"
                  alt="Card 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-44 rounded-lg overflow-hidden bg-gray-700">
                <img
                  src="/images/CardSmall.png"
                  alt="Card 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "events" && (
        <div className="hidden md:flex md:w-1/2 p-4">
          <div className="flex flex-col w-full -mt-20">
            <h2 className="text-3xl ml-2 mt-14 font-bold text-white origin-left whitespace-nowrap">
              <span className="block"> EXPLORE YOUR FIRST </span>
              <span className="block"> EVENT</span>
            </h2>
            <h2 className="text-6xl font-semibold ml-10 text-white mt-10 origin-left whitespace-nowrap">
              <span className="block">Event Name</span>
            </h2>
            <div className="ml-10 text-lg text-white mt-4 flex items-center">
              <img
                src="/images/location_on.png"
                alt="location"
                className="w-5 h-5 mr-2 inline-block"
              />
              Venue
              <img
                src="/images/Icons.png" // <-- replace with your clock image path
                alt="clock"
                className="w-5 h-5 ml-6 mr-2 inline-block"
              />
              04/3/2024 @19:00
            </div>
            <p className="ml-10 text-sm text-white mt-2">
              Lorem ipsum dolor sit
              <br />
              amet consectetur. Ac
              <br />
              lorem massa in morbi
              <br />
              et sed ipsum.
              <br />
              Pellentesque mattis
              <br />
              condimentum ut nulla.
            </p>

            <h3 className="ml-10 mt-10 text-2xl font-bold text-white">
              Artist Lineup
            </h3>
            <div className="flex ml-10 mt-4 gap-4 items-end">
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-700">
                <img
                  src="/images/image1.png"
                  alt="Card 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-44 rounded-lg overflow-hidden bg-gray-700 shadow-lg z-10">
                <img
                  src="/images/image3.png"
                  alt="Card 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-700">
                <img
                  src="/images/image2.png"
                  alt="Card 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <img
            src="/images/qr.png" // <-- replace with your image path
            alt="Bottom Left Card"
            className="fixed md:absolute bottom-1  w-32 h-32 rounded-lg object-cover shadow-lg z-50"
          />
          <button className="fixed md:absolute bottom-8 right-8 bg-[#FFCA5F] text-black font-bold rounded-full px-8 py-4 shadow-lg hover:bg-[#a088e6] transition-all z-50">
            Join Waitlist
          </button>
        </div>
      )}
    </div>
  );
}

export default NextSection;
