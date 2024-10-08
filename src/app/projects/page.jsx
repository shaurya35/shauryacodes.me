import React from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import FolderIcon from "@/components/ui/FolderIcon";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import Image from "next/image";

import "../scrolls.css";

const page = () => {
  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex ">
      <div className="border-r border-white w-[391px]">
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
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-4">page.tsx</div>
          <div className="pl-4 pr-2 border-r border-white h-full flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-10 flex flex-wrap justify-evenly items-start gap-8 scrollable-div">
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
          <ProjectsPanel
            projectNumber={1}
            detail="Nextjs"
            image={
              <Image
                src="/projects/stockwise.png"
                alt="Stockwise project"
                width={400}
                height={500}
                className="rounded-t-2xl border-b border-white"
              />
            }
            description="Stockwise is a stock market app bla bla bla bla bla bla bla bla bla bla bla bla "
            liveSiteLink="https://nextjs.org/"
            githubLink="https://github.com/gg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
