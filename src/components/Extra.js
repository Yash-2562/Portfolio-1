import React from "react";
import proj1 from "./proj1.png";
import proj2 from "./proj2.png";
import proj3 from "./proj3.png";
import proj4 from "./proj4.png";
import proj5 from "./proj5.png";
import proj6 from "./proj6.png";
import ScrollReveal from "./ScrollReveal";
const Extra = () => {
  return (
    <ScrollReveal>
    <div className="max-w-[1200px]  mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold text-transparent  bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text">Works</p>
        <p className="text-gray-400">Check out some of my recent Projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
          shadow- [#040c16] group container rounded-md flex justify-center items-center
          mx-auto content-div h-[200px] bg-cover relative"
          >
          <img src={proj1} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span
              className="text-2xl font- bold
              text-white  tracking-wider"
              ></span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" bg-white text-center rounded-lg px-4 py-3 m-2 font-bold text-gray-700 text-lg ">
                  
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
      
      
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
          shadow- [#040c16] group container rounded-md flex justify-center items-center
          mx-auto content-div h-[200px] bg-cover relative"
          >
          <img src={proj6} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span
              className="text-2xl font-bold
              text-white  tracking-wider"
              ></span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" bg-white text-center rounded-lg px-4 py-3 m-2 font-bold text-gray-700 text-lg ">
                  
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
      

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
          shadow- [#040c16] group container rounded-md flex justify-center items-center
          mx-auto content-div h-[200px] bg-cover relative"
          >
          <img src={proj5} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span
              className="text-2xl font- bold
              text-white  tracking-wider"
              ></span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" bg-white text-center rounded-lg px-4 py-3 m-2 font-bold text-gray-700 text-lg ">
                  
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
      
      
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
          shadow- [#040c16] group container rounded-md flex justify-center items-center
          mx-auto content-div h-[200px] bg-cover relative"
          >
          <img src={proj4} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span
              className="text-2xl font- bold
              text-white  tracking-wider"
              ></span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" bg-white text-center rounded-lg px-4 py-3 m-2 font-bold text-gray-700 text-lg ">
                  
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
      
  
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
          shadow- [#040c16] group container rounded-md flex justify-center items-center
          mx-auto content-div h-[200px] bg-cover relative"
          >
          <img src={proj2} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span
              className="text-2xl font- bold
              text-white  tracking-wider"
              ></span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" bg-white text-center rounded-lg px-4 py-3 m-2 font-bold text-gray-700 text-lg ">
                  
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
          
        
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
          shadow- [#040c16] group container rounded-md flex justify-center items-center
          mx-auto content-div h-[200px] bg-cover relative"
          >
          <img src={proj3} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span
              className="text-2xl font- bold
              text-white  tracking-wider"
            ></span>

            <div className="pt-8 text-center">
              <a href="/">
                <button className=" bg-white text-center rounded-lg px-4 py-3 m-2 font-bold text-gray-700 text-lg ">
                  
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
      
    </div>
    </div>
              </ScrollReveal>
  );
};

export default Extra;