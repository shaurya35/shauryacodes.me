"use client";
import React, { useState, useEffect, useRef } from "react";
import TerminalIcon from "../../components/ui/TerminalIcon";
import SquareUserIcon from "../../components/ui/SquareUserIcon";
import JoystickIcon from "../../components/ui/JoystickIcon";
import ProfessionalInfo from "@/components/panels/ProfessionalInfo";
// import Image from "next/image";
// import pencil from "../../../public/photos/pencil.jpg";

const Page = () => {
  const [activePanel, setActivePanel] = useState("experience");
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [hoveredPosition, setHoveredPosition] = useState(null);
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    if (scrollContainer) {
      const initialTimeout = setTimeout(() => {
        scrollContainer.scrollTo({
          left: 1000, 
          behavior: "smooth", 
        });

        const timeoutId = setTimeout(() => {
          scrollContainer.scrollTo({
            left: 0, 
            behavior: "smooth", 
          });
        }, 700); 

        return () => clearTimeout(timeoutId); 
      }, 300); 

      return () => clearTimeout(initialTimeout); 
    }
  }, []);


  return (
    <div
      ref={scrollContainerRef}
      className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex overflow-x-auto"
    >
      <div className="border-r border-white w-[1300px] flex flex-row h-full">
        <div className="w-[64px] border-r border-white flex flex-col justify-start items-center relative">
          <div
            className={`mt-6 cursor-pointer ${
              activePanel === "experience"
                ? "text-white-custom"
                : "hover:text-white-custom"
            }`}
            onClick={() => setActivePanel("experience")}
            onMouseEnter={(e) => {
              setHoveredIcon("professional-info");
              setHoveredPosition(e.target.getBoundingClientRect());
            }}
            onMouseLeave={() => setHoveredIcon("")}
          >
            <TerminalIcon />
          </div>

          <div
            className={`mt-6 cursor-pointer ${
              activePanel === "bio"
                ? "text-white-custom"
                : "hover:text-white-custom"
            }`}
            onClick={() => setActivePanel("bio")}
            onMouseEnter={(e) => {
              setHoveredIcon("personal-info");
              setHoveredPosition(e.target.getBoundingClientRect());
            }}
            onMouseLeave={() => setHoveredIcon("")}
          >
            <SquareUserIcon />
          </div>

          <div
            className={`mt-6 cursor-pointer ${
              activePanel === "sports"
                ? "text-white-custom"
                : "hover:text-white-custom"
            }`}
            onClick={() => setActivePanel("sports")}
            onMouseEnter={(e) => {
              setHoveredIcon("hobbies-info");
              setHoveredPosition(e.target.getBoundingClientRect());
            }}
            onMouseLeave={() => setHoveredIcon("")}
          >
            <JoystickIcon />
          </div>

          {hoveredIcon && hoveredPosition && (
            <div
              className="absolute bg-gray-800 text-white px-3 py-1 rounded shadow-lg"
              style={{
                left: hoveredPosition.left + hoveredPosition.width - 10,
                top: hoveredPosition.top + window.scrollY,
                transform: `translateY(${hoveredPosition.height / 2 - 100}px)`,
                width: "150px",
              }}
            >
              {hoveredIcon}
            </div>
          )}
        </div>

        <div className="h-full">
          {activePanel === "experience" && (
            <ProfessionalInfo
              category="professional-info"
              h1="experience"
              h2="hard_skills"
              h3="soft_skills"
            />
          )}
          {activePanel === "bio" && (
            <ProfessionalInfo
              category="personal-info"
              h1="bio"
              h2="interests"
              h3="qualifications"
            />
          )}
          {activePanel === "sports" && (
            <ProfessionalInfo
              category="hobbies-info"
              h1="sports"
              h2="favourite_games"
              h3="favourite_movies"
            />
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="text-white-custom border-b border-white w-full h-[35px]"></div>
        {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7217964089887612928" height="692" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}
        {/* <Image src={pencil} alt="pencil" /> */}
      </div>
    </div>
  );
};

export default Page;
