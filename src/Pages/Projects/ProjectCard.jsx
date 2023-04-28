import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./card.css";
import { BiWorld } from "react-icons/bi";

const ProjectCard = ({ project }) => {
   return (
      <div className="shadoww overflow-hidden" data-aos={project.animation}>
         <div className=" p-5 ">
            <Link className="relative" to={`/project-details/${project._id}`}>
               <figure className="h-[200px] w-full overflow-hidden">
                  <img
                     src={project.picture1}
                     className="hover:scale-125 hover:skew-x-1 rounded-lg duration-300 h-full overflow-hidden "
                     alt=""
                  />
               </figure>
               <a
                  className="absolute top-1 right-1 z-50"
                  href={project?.live}
                  target={"_blank"}
               >
                  <BiWorld size={25} className="bg-slate-300 rounded-full " />
               </a>
            </Link>

            <div className="py-4">
               <h4 className="font-semibold text-lg text-gray-100 mb-2">
                  {project.name}
               </h4>

               <p className="text-gray-100 mb-2 font-serif">
                  {project?.description[2].point.slice(0, 75)}.................
               </p>

               <Link
                  to={`/project-details/${project._id}`}
                  className="inline-block w-full text-center  rounded-md bg-[#0dccf2] hover:bg-[#19e126] px-6 py-3 text-b font-semibold text-white hover:pr-2 duration-500 "
               >
                  Details
                  <AiOutlineArrowRight className="inline-block font-semibold " />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
