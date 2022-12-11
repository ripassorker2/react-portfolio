import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <div className="card  glass mt-5 ">
      <figure>
        <img
          className="hover:scale-125 duration-300 hover:"
          src={project?.picture1}
          alt="car!"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title mb-4 ">{project?.name}</h2>

        <div className="card-actions justify-end flex hover:scale-105 duration-300">
          <a
            href={`/project-details/${project._id}`}
            className="block w-full text-center rounded bg-rose-600 px-7 py-3 text-b font-medium text-white shadow  hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Details
            <AiOutlineArrowRight className="inline-block font-semibold" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
