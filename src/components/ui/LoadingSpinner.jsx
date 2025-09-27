"use client";
import React from "react";

const LoadingSpinner = ({ type = "default", size = "medium" }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-6 h-6";
      case "large":
        return "w-16 h-16";
      default:
        return "w-12 h-12";
    }
  };

  const getTypeClasses = () => {
    switch (type) {
      case "dots":
        return "flex space-x-1";
      case "pulse":
        return "animate-pulse";
      case "bounce":
        return "animate-bounce";
      case "spin":
        return "animate-spin";
      case "code":
        return "font-mono text-2xl";
      default:
        return "animate-spin";
    }
  };

  if (type === "dots") {
    return (
      <div className={`flex space-x-1 ${getSizeClasses()}`}>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="flex items-center space-x-2">
        <div className="animate-pulse text-white-custom font-fira-code">
          <span className="text-yellow-exclusive">&lt;</span>
          <span className="text-blue-400">loading</span>
          <span className="text-yellow-exclusive">/&gt;</span>
        </div>
      </div>
    );
  }

  if (type === "terminal") {
    return (
      <div className="bg-black-500 border border-white rounded-lg p-4 font-fira-code text-sm">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-white-custom">
          <div className="animate-pulse">$ loading portfolio...</div>
          <div className="animate-pulse" style={{ animationDelay: "0.5s" }}>✓ initializing components</div>
          <div className="animate-pulse" style={{ animationDelay: "1s" }}>✓ loading content</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${getSizeClasses()} ${getTypeClasses()}`}>
      <div className="w-full h-full border-4 border-white border-t-transparent rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
