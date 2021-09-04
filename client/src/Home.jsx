import React from "react";
import { navigate } from "raviger";

const Home = () => {
  return (
    <div className="bg-purple-900 h-full overflow-hidden text-gray-100">
      <header className="bg-purple-900 py-2">
        <nav className="max-w-7xl flex items-center justify-between px-2">
          <div className="text-2xl"></div>
          <div className="flex justify-around gap-x-4 px-5 items-center">
            <button
              onClick={() => navigate("/explore")}
              className="text-base font-medium text-white hover:text-gray-300 cursor-pointer"
            >
              Explore
            </button>
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center px-6 py-1 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign In / Sign Up
            </button>
          </div>
        </nav>
      </header>
      <main className="h-full">
        <div className="flex flex-col mx-auto w-max mt-20">
          <h1 className="w-max mx-auto mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">Opportunities</span>
          </h1>
          <div className="w-max mx-auto">
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl w-max">
              An online portal to manage scholarships
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
