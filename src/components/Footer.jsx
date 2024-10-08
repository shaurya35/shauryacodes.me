"use client";
import React, { useEffect } from "react";
import Twitter from "./ui/Twitter";
import Instagram from "./ui/Instagram";
import Github from "./ui/Github";

const Footer = () => {
  const handleTwitterRedirecting = () => {
    window.open("https://twitter.com/_shaurya35", "_blank");
  };

  const handleInstagramRedirecting = () => {
    window.open("https://www.instagram.com/_shaurya35/", "_blank");
  };

  const handleGithubRedirecting = () => {
    window.open("https://github.com/shaurya35/", "_blank");
  };

  return (
    <footer className="h-[49px] lg:h-[50px] border-white border-t font-fira-code text-gray-custom flex justify-between items-center">
      <div className="flex items-center h-full">
        <div className="pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer">
          find-me:
        </div>
        <div
          className="pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:text-white-custom"
          onClick={handleTwitterRedirecting}
        >
          <button>
            <Twitter />
          </button>
        </div>
        <div
          className="pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:text-white-custom"
          onClick={handleInstagramRedirecting}
        >
          <button>
            <Instagram />
          </button>
        </div>
      </div>
      <div
        className="cursor-pointer pl-6 pr-6 lg:border-white lg:border-l h-full flex items-center hover:text-white-custom"
        onClick={handleGithubRedirecting}
      >
        <Github />
      </div>
    </footer>
  );
};

export default Footer;
