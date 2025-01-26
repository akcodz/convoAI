import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full py-4 px-8 z-50">
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide cursor-pointer">
          ConvoAI
        </h1>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-white font-semibold px-5 py-2.5 bg-blue-800 hover:bg-blue-900 transition-all rounded-lg  shadow-md cursor-pointer">
            Login
          </button>
          <button className="text-white font-semibold px-5 py-2.5 bg-amber-500 hover:bg-amber-600 transition-all rounded-lg  shadow-md cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
