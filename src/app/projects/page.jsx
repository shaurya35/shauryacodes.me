"use client";
import React, { useState, useEffect } from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import Image from "next/image";
import Loader from "@/components/loader/Loader";

import "../scrolls.css";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex ">
      <div className="border-r border-white w-[391px] hidden lg:block">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">projects</div>
        </div>
        <div className="flex flex-col px-[25px] py-[10px] border-b border-white">
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Nextjs</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Reactjs</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Tailwind</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Nodejs</div>
          </div>
          <div className="flex flex-row py-2 hover:text-white-custom cursor-pointer">
            <div>
              <Right />
            </div>
            <div className="pl-1">Expressjs</div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="hidden lg:flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-4">page.tsx</div>
          <div className="pl-4 pr-2 border-r border-white h-full flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-10 flex flex-wrap justify-evenly items-start gap-8 scrollable-div">
              <ProjectsPanel
                projectNumber={1}
                detail="Next.js, Firebase"
                image={
                  <Image
                    src="/projects/hms.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="Mednex is an AI-powered system that streamlines hospital operations."
                liveSiteLink="https://github.com/shaurya35/Hospital-Management-System"
                githubLink="https://github.com/shaurya35/Hospital-Management-System"
              />
              <ProjectsPanel
                projectNumber={2}
                detail="React.js, Express.js"
                image={
                  <Image
                    src="/projects/stockwise.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="Stockwise is a Web-app for Inventory management using demand forecasting."
                liveSiteLink="https://stockwise.shauryacodes.me/"
                githubLink="https://github.com/shaurya35/Stockwise-Inventory-Manager"
              />
              <ProjectsPanel
                projectNumber={3}
                detail="React.js, Express.js"
                image={
                  <Image
                    src="/projects/greenglide.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="GreenGlide is an Web-app addressing Inefficiencies in Urban Waste Management."
                liveSiteLink="https://greenglide-smartwaste-management-system.vercel.app/"
                githubLink="https://github.com/shaurya35/GreenGlide-SmartWaste-Management-System"
              />
              <ProjectsPanel
                projectNumber={4}
                detail="React.js, Tailwind"
                image={
                  <Image
                    src="/projects/motionarteffect.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="MotionArtEffect is a replica of an existing website built with React.js"
                liveSiteLink="https://heliverse-task-rose.vercel.app/"
                githubLink="https://github.com/shaurya35/Heliverse-task"
              />
              <ProjectsPanel
                projectNumber={5}
                detail="Express.js, EJS"
                image={
                  <Image
                    src="/projects/yelpcamp.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="Yelpcamp is a campsite finder Web-app with Search and Filtering features."
                liveSiteLink="https://yelp-camp-taqn.onrender.com/"
                githubLink="https://github.com/shaurya35/Yelp-Camp"
              />
              <ProjectsPanel
                projectNumber={6}
                detail="React.js"
                image={
                  <Image
                    src="/projects/coffee.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="A Sleek React coffee landing page showcasing varieties and reviews."
                liveSiteLink="https://coffeeinseconds.netlify.app/"
                githubLink="https://github.com/shaurya35/OCTANET_APRIL"
              />
              <ProjectsPanel
                projectNumber={7}
                detail="HTML, CSS"
                image={
                  <Image
                    src="/projects/landingpage1.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="A Responsive landing page built with HTML, CSS, and JavaScript."
                liveSiteLink="https://prodigy-wd-01-sigma.vercel.app/"
                githubLink="https://github.com/shaurya35/PRODIGY_WD_01"
              />
              <ProjectsPanel
                projectNumber={8}
                detail="HTML, CSS"
                image={
                  <Image
                    src="/projects/amazonclone.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="An Amazon clone created with HTML and CSS."
                liveSiteLink="https://amazonbyshaurya.netlify.app/"
                githubLink="https://github.com/shaurya35/Amazon-Clone"
              />
              <ProjectsPanel
                projectNumber={9}
                detail="Nextjs, Firebase"
                image={
                  <Image
                    src="/projects/calendar.png"
                    alt="Stockwise project"
                    width={400}
                    height={500}
                    className="rounded-t-2xl border-b border-white"
                  />
                }
                description="An Interactive calendar developed with Next.js, PostgreSQL."
                liveSiteLink="https://github.com/shaurya35/Interactive-Nextjs-Calendar"
                githubLink="https://github.com/shaurya35/Interactive-Nextjs-Calendar"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
