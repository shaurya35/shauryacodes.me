"use client";
import React, { useState, useEffect } from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import Image from "next/image";
import ComponentLoader from "@/components/ui/ComponentLoader";
import { projectsData } from "@/data/projectsData";

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
            <div className="flex-1 overflow-y-auto p-10 flex flex-wrap justify-evenly items-start gap-8 scrollable-div">
              {loading ? (
                <ComponentLoader 
                  loading={loading} 
                  type="terminal" 
                  message="Loading Projects..." 
                  size="large"
                  className="w-full"
                />
              ) : (
                projectsData.map((project, index) => (
                  <ProjectsPanel
                    key={project.id}
                    projectNumber={index + 1}
                    detail={project.technologies}
                    image={
                      <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        width={400}
                        height={500}
                        className="rounded-t-2xl border-b border-white"
                      />
                    }
                    description={project.description}
                    liveSiteLink={project.liveSiteLink}
                    githubLink={project.githubLink}
                  />
                ))
              )}
            </div>
      </div>
    </div>
  );
};

export default Page;
