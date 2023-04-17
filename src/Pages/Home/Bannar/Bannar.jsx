import React from "react";
import resume from "../../../assets/resume.pdf";
import coding from "../../../assets/coding.json";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";

const Bannar = () => {
   return (
      <div className="text-white md:-mt-0 mt-20">
         <div className="container flex flex-col justify-center p-6  mx-auto sm:py-12 lg:flex-row lg:justify-between">
            <div
               data-aos="fade-left"
               className="flex items-center md:ml-16 justify-center md:p-6 md:mt-8 mt-4  "
            >
               <Lottie
                  className="object-contain rounded-lg  md:w-[500px] w-[320px]"
                  animationData={coding}
                  loop={true}
               />
            </div>
            <div
               data-aos="fade-right"
               className="flex flex-col justify-center  text-center md:mt-0 mt-14  rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left"
            >
               <h1 className=" font-bold leading-none md:text-5xl text-3xl">
                  <span className="text-[#0dccf2] py-1"> Hello</span>! I am{" "}
                  <br />
                  Ripas <span className="text-[#0dccf2] py-1">Sorker </span>
                  <span className=" py-1">Rifat</span>
               </h1>

               <p className="my-3 mb-8 md:text-2xl text-xl md:justify-start justify-center flex ">
                  I'm a{"  "}
                  <span className="text-[#19e126] font-semibold">
                     <Typewriter
                        options={{
                           strings: [
                              "_ MERN Stack Developer",
                              `_ Frontend Developer`,
                              "_ Full Stack Developer",
                              "_ Backend Developer",
                           ],
                           autoStart: true,
                           loop: true,
                        }}
                     />{" "}
                  </span>
               </p>
               <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                     href={resume}
                     download
                     className="inline-block w-full rounded bg-[#0dccf2] px-6 py-2.5 font-medium text-gray-800 shadow hover:bg-[#19e126] duration-500 hover:text-gray-900  focus:outline-none  sm:w-auto"
                  >
                     Get Resume
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Bannar;
