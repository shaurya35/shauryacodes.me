import React from "react";
import CrossIcon from "@/components/ui/CrossIcon";

const ExperienceDashboard = ({ text }) => {
  return (
    <div className="w-[975px] h-full flex">
      <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
        <div className="pl-4">{text}</div>
        <div className="pl-4 pr-2 border-r border-white h-full flex justify-center items-center">
          <CrossIcon />
        </div>
      </div>
    </div>
  );
};

export default ExperienceDashboard;
