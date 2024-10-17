"use client";
import React, { useEffect } from "react";
import RightIcon from "../components/ui/RightIcon";
import Typewriter from "typewriter-effect";
// import Image from "next/image";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const tl = gsap.timeline();

      tl.from(".gsap-left-t1", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".gsap-left-t2",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".gsap-left-t3",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".gsap-left-t4",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".gsap-left-t5",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".gsap-left-t6",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".gsap-right",
          {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex justify-evenly items-center">
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>
      <div className="h-[355px]">
        <div className="h-[194px] flex flex-col justify-start">
          <div className="text-[18px] text-white-custom pb-1 lg:pb-0 pl-4 lg:pl-[6px] gsap-left-t1">
            Hi all, I am
          </div>
          <div className="text-[45px] lg:text-[58px] pl-2 lg:pl-0 text-white-custom gsap-left-t2">
            Shaurya Jha
          </div>
          <div className="text-[22px] lg:text-[32px] flex gsap-left-t3">
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
          <div className="pb-[10px] pl-3 lg:pl-0 text-[15px] lg:text-[14px] gsap-left-t4">
            {"// welcome to my portfolio"}
          </div>
          <div className="pb-[20px] lg:pb-[10px] pl-3 lg:pl-0 text-[15px] lg:text-[14px] gsap-left-t5">
            {"// explore all my projects on Github"}
          </div>
          <div className="flex flex-wrap gsap-left-t6">
            <div className="text-blue-custom pl-4 lg:pl-0 text-[15px]">
              const
            </div>
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
      {/* <div className="gsap-right hidden lg:flex items-center justify-center relative bg-gradient-to-b from-[#237b6d] to-[rgba(67,217,173,0.13)] border border-black rounded-lg xl:h-[475px] xl:w-[530px] h-[370px] w-[420px] py-6 px-10 pointer-events-auto">
        <Image
          src="/icons/bolt.svg"
          alt="bolt"
          width={24}
          height={24}
          className="absolute top-2 left-2"
        />
        <Image
          src="/icons/bolt.svg"
          alt="bolt"
          width={24}
          height={24}
          className="absolute top-2 right-2"
        />
        <Image
          src="/icons/bolt.svg"
          alt="bolt"
          width={24}
          height={24}
          className="absolute bottom-2 left-2"
        />
        <Image
          src="/icons/bolt.svg"
          alt="bolt"
          width={24}
          height={24}
          className="absolute right-2 bottom-2"
        />
        <div
          className="w-[900px] h-96 rounded-xl flex justify-center items-center overflow-auto"
          style={{
            background: "rgba(1, 22, 39, 0.84)", 
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.44)", 
          }}
        >
          <Image
            src="/photos/photo3.jpg"
            alt="photo"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </div>
      </div> */}
    </main>
  );
}
