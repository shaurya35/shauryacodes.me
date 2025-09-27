"use client";
import React, { useState, useEffect } from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import BlogsPanel from "@/components/panels/BlogsPanel";
import ComponentLoader from "@/components/ui/ComponentLoader";
import { blogPosts, blogCategories } from "@/data/blogData";

import "../scrolls.css";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex flex-col lg:flex-row">
      <div className="border-r border-white w-[391px] hidden lg:block">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">blogs</div>
        </div>
        <div className="flex flex-col px-[25px] py-[10px] border-b border-white">
          {blogCategories.map((category, index) => (
            <div 
              key={index}
              className={`flex flex-row py-2 hover:text-white-custom cursor-pointer ${
                selectedCategory === category ? 'text-white-custom' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <div>
                <Right />
              </div>
              <div className="pl-1">{category}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        {/* Mobile Category Filter */}
        {/* <div className="lg:hidden w-full p-4 border-b border-white">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-black-500 border border-white text-white-custom p-2 rounded"
          >
            {blogCategories.map((category) => (
              <option key={category} value={category} className="bg-black-500">
                {category}
              </option>
            ))}
          </select>
        </div> */}
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
                  message="Loading Blogs..." 
                  size="large"
                  className="w-full"
                />
              ) : (
                filteredPosts.map((post, index) => (
                  <BlogsPanel
                    key={post.id}
                    blogNumber={index + 1}
                    detail={`${post.category}, ${post.readTime}`}
                    description={post.excerpt}
                    twitterLink={post.twitterLink}
                  />
                ))
              )}
            </div>
      </div>
    </div>
  );
};

export default Page;

