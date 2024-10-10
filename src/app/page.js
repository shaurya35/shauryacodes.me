"use client";
import React from "react";
import RightIcon from "../components/ui/RightIcon";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex justify-evenly items-center">
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>
      <div className="h-[355px]">
        <div className="h-[194px] flex flex-col justify-start">
          <div className="text-[18px] text-white-custom pb-1 lg:pb-0 pl-4 lg:pl-[6px]">
            Hi all, I am
          </div>
          <div className="text-[45px] lg:text-[58px] pl-2 lg:pl-0 text-white-custom">Shaurya Jha</div>
          <div className="text-[22px] lg:text-[32px] flex">
            <div className="flex justify-center items-center text-blue-custom">
              <RightIcon />
            </div>
            <div className="text-blue-custom pl-[5px] w-full lg:w-[30rem]">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "Blockchain Enthusiast",
                    "Open Source Contributor",
                    "Tech Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="h-[161px] flex flex-col justify-center">
          <div className="pb-[10px] pl-3 lg:pl-0 text-[15px] lg:text-[14px]">
            {"// welcome to my portfolio"}
          </div>
          <div className="pb-[20px] lg:pb-[10px] pl-3 lg:pl-0 text-[15px] lg:text-[14px]">
            {"// explore all my projects on Github"}
          </div>
          <div className="flex flex-wrap">
            <div className="text-blue-custom pl-4 lg:pl-0 text-[15px]">const</div>
            <div className="text-green-custom text-[15px] pl-[10px] pb-1 lg:pb-0">
              githubLink
            </div>
            <div className="text-white-custom text-[15px] pl-[10px]">=</div>
            <div className="text-red-custom text-[15px] pl-[10px] z-30">
              <a
                href="https://github.com/shaurya35/"
                target="_blank"
                className="underline underline-offset-4"
              >
                &quot;https://github.com/shaurya35/&quot;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">right</div>
    </main>
  );
}
