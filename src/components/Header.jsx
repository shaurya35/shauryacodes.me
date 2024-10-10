"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AlignJustify from "@/components/ui/AlignJustify";

const Header = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;

    switch (pathname) {
      case "/":
        setActiveButton("_home");
        break;
      case "/about-me":
        setActiveButton("about-me");
        break;
      case "/projects":
        setActiveButton("projects");
        break;
      case "/contact-me":
        setActiveButton("contact-me");
        break;
      default:
        setActiveButton("_home");
        break;
    }
  }, []);

  const handleButtonClick = (path, buttonName) => {
    setActiveButton(buttonName);
    setDropdownOpen(false);
    router.push(path);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="h-[64px] lg:h-[50px] border-white border-b font-fira-code text-[19px] lg:text-[16px] text-gray-custom flex justify-between">
      <div className="flex items-center h-full">
        <div
          className="lg:pr-48 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:bg-black-400 hover:text-white-custom"
          onClick={() => handleButtonClick("/", "_home")}
        >
          <button className={`w-full h-full`}>shaurya-jha</button>
        </div>

        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom">
          <button
            className={`w-full h-full px-6 hover:text-white ${
              activeButton === "_home"
                ? "border-b-2 border-yellow-exclusive text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/", "_home")}
          >
            _home
          </button>
        </div>

        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom">
          <button
            className={`w-full h-full px-6 hover:text-white ${
              activeButton === "about-me"
                ? "border-b-2 border-yellow-exclusive text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/about-me", "about-me")}
          >
            _about-me
          </button>
        </div>

        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom">
          <button
            className={`w-full h-full px-6 hover:text-white ${
              activeButton === "projects"
                ? "border-b-2 border-yellow-exclusive text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/projects", "projects")}
          >
            _projects
          </button>
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center pr-7 relative">
        <div onClick={toggleDropdown} className="cursor-pointer">
          <AlignJustify />
        </div>

        <div
          className={`absolute top-16 right-0 bg-black-100 text-gray-custom w-40 rounded-lg shadow-lg transition-all duration-200 ease-[cubic-bezier(0.16, 1, 0.3, 1)] transform-gpu origin-top-right text-[17px] ${
            dropdownOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <button
            className={`block px-4 py-2 w-full text-left ${
              activeButton === "_home"
                ? "bg-black-400 text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/", "_home")}
          >
            _home
          </button>
          <button
            className={`block px-4 py-2 w-full text-left ${
              activeButton === "about-me"
                ? "bg-black-400 text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/about-me", "about-me")}
          >
            _about-me
          </button>
          <button
            className={`block px-4 py-2 w-full text-left ${
              activeButton === "projects"
                ? "bg-black-400 text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/projects", "projects")}
          >
            _projects
          </button>
          <button
            className={`block px-4 py-2 w-full text-left ${
              activeButton === "contact-me"
                ? "bg-black-400 text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/contact-me", "contact-me")}
          >
            _contact-me
          </button>
        </div>
      </div>

      <div className="hidden lg:flex lg:border-white lg:border-l h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom">
        <button
          className={`w-full h-full px-6 hover:text-white ${
            activeButton === "contact-me"
              ? "border-b-2 border-yellow-exclusive text-white-custom"
              : ""
          }`}
          onClick={() => handleButtonClick("/contact-me", "contact-me")}
        >
          _contact-me
        </button>
      </div>
    </header>
  );
};

export default Header;
