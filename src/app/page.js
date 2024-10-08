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
          <div className="text-[18px] text-white-custom pl-[6px]">
            Hi all, I am
          </div>
          <div className="text-[58px] text-white-custom">Shaurya Jha</div>
          <div className="text-[32px] flex">
            <div className="flex justify-center items-center text-blue-custom">
              <RightIcon />
            </div>
            <div className="text-blue-custom pl-[5px] w-[30rem]">
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
          <div className="pb-[10px] text-[14px]">
            {"// welcome to my portfolio"}
          </div>
          <div className="pb-[10px] text-[14px]">
            {"// explore all my projects on Github"}
          </div>
          <div className="flex">
            <div className="text-blue-custom text-[15px]">const</div>
            <div className="text-green-custom text-[15px] pl-[10px]">
              githubLink
            </div>
            <div className="text-white-custom text-[15px] pl-[10px]">=</div>
            <div className="text-red-custom text-[15px] pl-[10px]">
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
      <div>right</div>
    </main>
  );
}
