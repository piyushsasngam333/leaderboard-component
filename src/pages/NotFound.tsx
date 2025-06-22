import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#E4EEF5]">404</h1>
        <p className="text-xl text-[#85A8C3] mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-[#28BFFF] hover:text-[#50D5FF] underline transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
