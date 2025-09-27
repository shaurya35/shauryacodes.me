"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GitHubRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("https://github.com/shaurya35/")
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">Redirecting to GitHub...</p>
      </div>
    </div>
  );
};

export default GitHubRedirect;
