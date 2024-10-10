"use client";
import React from "react";
import ProjectsGithub from "@/components/ui/ProjectsGithub";

const ProjectsPanel = ({
  projectNumber,
  detail,
  image,
  description,
  liveSiteLink,
  githubLink,
}) => {
  return (
    <div className="flex flex-col justify-center items-start w-[400px]">
      <div className="flex flex-row pb-4 lg:pb-3">
        <div className="font-bold text-blue-custom text-[14px] lg:text-[15px] pr-1 lg:pr-3 lg:pl-3">
          Project {projectNumber}
        </div>
        <div className="text-[14px] lg:text-[15px]">{`// ${detail}`}</div>
      </div>
      <div className="bg-black-500 border-white border rounded-2xl">
        <div>{image}</div>
        <div className="text-[14px] px-6 py-5">
          <div className="mb-5">{description}</div>
          <div className="text-white-custom text-[12px] flex">
            <button
              onClick={() => window.open(liveSiteLink, "_blank")}
              className="bg-gray-custom3 p-2 rounded-lg"
            >
              live-project
            </button>
            <button
              onClick={() => window.open(githubLink, "_blank")}
              className="bg-gray-custom3 p-2 rounded-lg ml-2"
            >
              <ProjectsGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPanel;
