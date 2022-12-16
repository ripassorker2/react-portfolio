import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

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
        <div className="flex flex-wrap">
          <a
            className="bg-green-600 text-sm  hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-xl"
            href={project?.live}
            target="_blank"
          >
            Live site{" "}
          </a>
        </div>

        <div className="card-actions justify-end flex ">
          <Link
            to={`/project-details/${project._id}`}
            className="block w-full text-center hover:scale-105 duration-300 rounded bg-rose-600 px-7 py-3 text-b font-medium text-white shadow  hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Details
            <AiOutlineArrowRight className="inline-block font-semibold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
