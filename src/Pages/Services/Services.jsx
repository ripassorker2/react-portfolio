import React from "react";
import "./services.css";
import { AiFillEdit, AiFillThunderbolt } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";

const Services = () => {
   return (
      <section
         className=" text-gray-800 md:pt-24 pt-16  w-[90%] mx-auto "
         id="contact"
      >
         <h4 className="md:text-5xl mb-2 text-3xl text-[#0dccf2] font-bold text-center">
            My Services
         </h4>
         <h3 className="md:text-2xl text-lg font-semibold mb-11 text-gray-400 text-center">
            {"<-~-"} Which services I provied. {"-~->"}
         </h3>
         <div className="contain">
            <div className="box" data-aos="fade-up-right">
               <div className="content">
                  <AiFillEdit className="icon" />
                  <div className="text">
                     <h4 className="text-2xl mt-3 font-semibold">Frontend</h4>
                     <p>I will design or redesign your website from Scratch.</p>
                     <a href="https://wa.me/+8801744876681" target="_blank">
                        <button className="inline-block w-full rounded bg-[#0dccf2] px-5 py-2 font-medium text-gray-800 shadow duration-500 hover:text-gray-900  focus:outline-none  sm:w-auto ">
                           Hire Me
                        </button>
                     </a>
                  </div>
               </div>
            </div>
            <div className="box" data-aos="slide-up">
               <div className="content">
                  <TiWorld className="icon" />
                  <div className="text">
                     <h4 className="text-2xl mt-3 font-semibold">Full Stack</h4>
                     <p>
                        I will provide you a complete website with frontend and
                        backend.
                     </p>
                     <a href="https://wa.me/+8801744876681" target="_blank">
                        <button className="inline-block w-full rounded bg-[#0dccf2] px-5 py-2 font-medium text-gray-800 shadow duration-500 hover:text-gray-900  focus:outline-none  sm:w-auto ">
                           Hire Me
                        </button>
                     </a>
                  </div>
               </div>
            </div>
            <div className="box" data-aos="fade-up-left">
               <div className="content">
                  <AiFillThunderbolt className="icon" />
                  <div className="text">
                     <h4 className="text-2xl mt-3 font-semibold">Backend</h4>
                     <p>I will develop your backend from Scratch using MERN.</p>
                     <a href="https://wa.me/+8801744876681" target="_blank">
                        <button className="inline-block w-full rounded bg-[#0dccf2] px-5 py-2 font-medium text-gray-800 shadow duration-500 hover:text-gray-900  focus:outline-none  sm:w-auto ">
                           Hire Me
                        </button>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
