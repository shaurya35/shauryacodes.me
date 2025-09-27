"use client";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const ComponentLoader = ({ 
  loading = true, 
  type = "default", 
  message = "Loading...",
  size = "medium",
  className = ""
}) => {
  if (!loading) return null;

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div className="mb-4">
        <LoadingSpinner type={type} size={size} />
      </div>
      <p className="text-white-custom font-fira-code text-sm text-center">{message}</p>
    </div>
  );
};

export default ComponentLoader;
