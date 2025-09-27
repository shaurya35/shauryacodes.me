"use client";
import React, { useState, useEffect } from "react";

const ProgressBar = ({ 
  progress = 0, 
  label = "", 
  showPercentage = true, 
  color = "blue",
  animated = true,
  height = "h-2"
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(progress);
    }
  }, [progress, animated]);

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-exclusive";
      case "purple":
        return "bg-purple-500";
      case "red":
        return "bg-red-500";
      case "white":
        return "bg-white";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300 font-fira-code">{label}</span>
          {showPercentage && (
            <span className="text-sm text-gray-400 font-fira-code">{displayProgress}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-700 rounded-full ${height} overflow-hidden`}>
        <div
          className={`h-full ${getColorClasses()} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: `${displayProgress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
