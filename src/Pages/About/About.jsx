import React from "react";
import rifat from "../../assets/rifat.jpg";
import resume from "../../assets/resume.pdf";

const About = () => {
   return (
      <section className="" id="about">
         <h4 className="md:text-5xl mt-28 mb-2 text-3xl text-[#eb10bb] font-bold text-center">
            About Me
         </h4>
         <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray-400">
            {"<---"} Some information about me {"--->"}
         </h3>
         <div className="container grid grid-cols-1 md:grid-cols-2 p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
            <div
               data-aos="fade-left"
               className="flex items-center rounded-xl w-full justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-96 lg:h-96 xl:h-112 2xl:h-128"
            >
               <img
                  src={rifat}
                  alt=""
                  className="object-contain rounded-xl bg-transparent w-full h-72 sm:h-80 lg:h-96"
               />
            </div>
            <div data-aos="fade-right" className=" p-6 rounded-sm ">
               <p className="mt-6 mb-5 text-base text-gray-100 md:pr-8">
                  Hello! I am Md Ripas Sorker Rifat. I am twenty years old. I am
                  doing my Bachelor in Dhaka International University right now.
                  I am passionate about entering the world of websites and
                  contributing towards making a social impact on users. I have
                  been following various technology magazines and pages to
                  escalate my growth and understanding of this field. I believe
                  in evolving my knowledge and learning continuously every day.
               </p>

               <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
                  <a
                     href={resume}
                     download
                     className="block text-center w-full rounded bg-[#eb10bb] px-12 py-3 font-medium text-white shadow hover:bg-[#10eb1f] duration-300 hover:text-gray-800 focus:outline-none  sm:w-auto"
                  >
                     Get Resume
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
