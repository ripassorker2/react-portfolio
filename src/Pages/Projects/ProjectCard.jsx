import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./card.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="shadoww overflow-hidden" data-aos={project.animation}>
      <div className=" p-4 ">
        <Link to={`/project-details/${project._id}`}>
          <figure className="h-[200px] w-full overflow-hidden">
            <img
              src={project.picture1}
              className="hover:scale-125 hover:skew-x-1 rounded-lg duration-300 h-full  "
              alt=""
            />
          </figure>
        </Link>

        <div className="py-4">
          <h4 className="font-semibold text-lg text-gray-100 mb-2">
            {project.name}
          </h4>

          <p className="text-gray-100 mb-2">
            {project?.description[2].point.slice(0, 55)}....
          </p>

          <Link
            to={`/project-details/${project._id}`}
            className="inline-block w-full text-center  duration-300 rounded bg-[#eb10bb] px-6 py-3 text-b font-medium text-white shadow "
          >
            Details
            <AiOutlineArrowRight className="inline-block font-semibold" />
          </Link>
        </div>
      </div>
    </div>
    // <div className="card  mt-5 " >
    //   <figure>
    //     <img
    //       className="hover:scale-125 duration-300 scale-105 max-h-[230px] w-full"
    //       src={project.picture1}
    //       alt=""
    //     />
    //   </figure>
    //   <div className="card-body text-white glass rounded-b">
    //     <h2 className="card-title mb-1">{project?.name}</h2>
    //     <div className="flex justify-end md:justify-start">
    //       <a
    //         className="bg-[#10eb1f] text-sm text-gray-800 hover:bg-transparent hover:border border hover:text-gray-100 duration-300 px-3 py-2 rounded-xl "
    //         href={project?.live}
    //         target="_blank"
    //       >
    //         Live site{" "}
    //       </a>
    //     </div>

    //     <div className="card-actions justify-end flex ">
    //       <Link
    //         to={`/project-details/${project._id}`}
    //         className="block w-full text-center hover:scale-105 duration-300 rounded bg-[#eb10bb] px-6 py-3 text-b font-medium text-white shadow  focus:outline-none f  sm:w-auto"
    //       >
    //         Details
    //         <AiOutlineArrowRight className="inline-block font-semibold" />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
