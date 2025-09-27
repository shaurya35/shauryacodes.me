"use client";
import React from "react";
import Twitter from "@/components/ui/Twitter";

const BlogsPanel = ({
  blogNumber,
  detail,
  description,
  twitterLink,
}) => {
  return (
    <div className="flex flex-col justify-center items-start w-[400px] h-[250px]">
      <div className="flex flex-row pb-4 lg:pb-3">
        <div className="font-bold text-blue-custom text-[14px] lg:text-[15px] pr-1 lg:pr-3 lg:pl-3">
          Blog {blogNumber}
        </div>
        <div className="text-[14px] lg:text-[15px]">{`// ${detail}`}</div>
      </div>
      <div className="bg-black-500 border-white border rounded-2xl flex-1 flex flex-col">
        <div className="text-[14px] px-6 py-5 flex-1 flex flex-col">
          <div className="mb-5 flex-1">{description}</div>
          
          {twitterLink && (
            <div className="text-white-custom text-[12px] flex gap-2 mt-auto">
              <button
                onClick={() => window.open(twitterLink, "_blank")}
                className="bg-gray-custom3 p-2 rounded-lg flex items-center gap-1"
              >
                <div className="scale-75">
                  <Twitter />
                </div>
                read-on-twitter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsPanel;

