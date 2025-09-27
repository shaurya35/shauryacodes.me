"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PageTransition = ({ children, pathname }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const router = useRouter();

  useEffect(() => {
    if (pathname) {
      setIsTransitioning(true);
      
      // Start transition
      setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 300);
    }
  }, [pathname, children]);

  return (
    <div className="relative">
      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-black-100 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white-custom font-fira-code text-sm">Loading...</p>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;
