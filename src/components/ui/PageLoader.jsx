"use client";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PageLoader = ({ 
  loading = true, 
  type = "default", 
  message = "Loading...",
  progress = 0,
  showProgress = false 
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (showProgress && progress > 0) {
      const timer = setInterval(() => {
        setDisplayProgress(prev => {
          if (prev >= progress) {
            clearInterval(timer);
            return progress;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(timer);
    }
  }, [progress, showProgress]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black-100 z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Loading Animation */}
        <div className="mb-6">
          <LoadingSpinner type={type} size="large" />
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="mb-6">
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div
                className="bg-yellow-exclusive h-2 rounded-full transition-all duration-300"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
            <p className="text-gray-400 text-sm font-fira-code">{displayProgress}%</p>
          </div>
        )}

        {/* Loading Message */}
        <div className="space-y-2">
          <p className="text-white-custom font-fira-code text-lg">{message}</p>
          {type === "terminal" && (
            <div className="text-gray-400 text-sm font-fira-code space-y-1">
              <div className="animate-pulse">$ initializing portfolio...</div>
              <div className="animate-pulse" style={{ animationDelay: "0.5s" }}>✓ loading components</div>
              <div className="animate-pulse" style={{ animationDelay: "1s" }}>✓ preparing content</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
