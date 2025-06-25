import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-zinc-200 overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl text-black mt-64 font-bold tracking-wide">
          Hi, my name is  
          <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>
        <h1 className="text-6xl text-black font-bold tracking-wide mt-4">{hero.subtitle}</h1>
        <div className="flex flex-row space-x-6 mt-8 text-black ">
          <a href="https://github.com/sanju311" target="_blank"> <img src="/github.png" alt="Github" className="w-6 h-6" /> </a> 
          <a href="https://www.linkedin.com/in/sanjusathya/" target="_blank"> <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" /> </a> 
          <a href="mailto:sanju.moorthy.end@gmail.com" target="_blank"> <img src="/mail.png" alt="Email" className="w-6 h-6" /> </a> 
        </div>
        <a
          href="#About"
          className="text-2xl font-bold mt-6 w-fit  transition-all duration-300 ease-in-out hover:scale-105"
        >
          <div className="border-black px-4 py-2 flex rounded-lg items-center justify-center bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-red-500/50 backdrop-blur-md transition-all duration-200 ease-in-out hover:scale-102">
            <span className="text-black text-lg font-semibold ">
              Learn More
            </span>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Hero;




  