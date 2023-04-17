import React, { useEffect } from "react";
import { BsCircleFill } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProjectDetils = () => {
   const project = useLoaderData()[0];
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div>
         <div className=" pt-7   w-[90%] mx-auto  text-gray-100">
            <div className="grid md:grid-cols-2 mt-32 gap-10 ">
               <img
                  data-aos="zoom-in-up"
                  className="md:h-72  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                  src={project?.picture1}
                  alt=""
               />
               <img
                  data-aos="zoom-in-up"
                  className="md:h-72  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                  src={project?.picture2}
                  alt=""
               />
               <img
                  data-aos="slide-right"
                  className="md:h-72  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                  src={project?.picture3}
                  alt=""
               />
               <img
                  data-aos="slide-left"
                  className="md:h-72  w-full rounded-xl duration-1000 hover:shadow-[#0dccf2] hover:shadow-md"
                  src={project?.picture4}
                  alt=""
               />
            </div>
            <div className="mt-6 flex sm:justify-end flex-wrap">
               <a
                  className="bg-[#0dccf2] text-gray-100 border  text-sm sm:ml-4 mt-2 sm:mt-0 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-md"
                  href={project?.live}
                  target=" _blank"
               >
                  Live site{" "}
               </a>
               <a
                  className="bg-[#19e126] text-gray-100 border  text-sm sm:ml-4 mt-2 sm:mt-0 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-md ml-3 md:mr-0 mr-3"
                  href={project?.server}
                  target=" _blank"
               >
                  Server site{" "}
               </a>
               <a
                  className="bg-purple-600 text-gray-100 border  text-sm sm:ml-4 mt-2 sm:mt-0 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-md"
                  href={project?.client}
                  target=" _blank"
               >
                  Client site{" "}
               </a>
            </div>
            <div s className="py-6 text-base">
               <h1 className="text-2xl pb-3 font-semibold text-[#0dccf2]">
                  {project.name}
               </h1>
               {project?.description?.map((detail, index) => (
                  <p key={index}>
                     <BsCircleFill className="inline-block text-xs text-gray-500" />{" "}
                     {detail.point}
                  </p>
               ))}

               <h4 className="mt-5">
                  <span className="font-semibold text-[#0dccf2]">
                     Used Technology :
                  </span>{" "}
                  {project?.techonology}
               </h4>
            </div>
         </div>
      </div>
   );
};

export default ProjectDetils;
