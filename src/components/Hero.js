import React from "react";
import { TypeAnimation } from "react-type-animation";
import image from "./yp.jpeg";
import DownloadCVButton from "./download cv";


const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="w-[300px] h-auto lg:w-[427px] my-auto mx-auto ">
        <img src={image} alt="Profile pic" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="bg-gradient-to-r text-transparent from-gray-300 to-blue-400 bg-clip-text">
            I`m a
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Video Editor",
              1000,
              
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className=" text-white font-sans sm:text-lg my-6 font-semibold ">
          My name is Yashbir pal and I have 3 month experience in web
          development.
        </p>
        <div className="my-8">
            <DownloadCVButton/>
          <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4  border-emerald-300 border  hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white ">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
