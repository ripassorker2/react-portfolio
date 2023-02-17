import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className="card  mt-5 " data-aos={project.animation}>
      <figure>
        <img
          className="hover:scale-125 duration-300 scale-105 max-h-[230px] w-full"
          src={project.picture1}
          alt=""
        />
      </figure>
      <div className="card-body text-white bg-black rounded-b">
        <h2 className="card-title mb-1">{project?.name}</h2>
        <div className="flex flex-wrap">
          <a
            className="bg-[#10eb1f] text-sm text-gray-800 hover:bg-transparent hover:border border hover:text-gray-100 duration-300 px-3 py-2 rounded-xl "
            href={project?.live}
            target="_blank"
          >
            Live site{" "}
          </a>
        </div>

        <div className="card-actions justify-end flex ">
          <Link
            to={`/project-details/${project._id}`}
            className="block w-full text-center hover:scale-105 duration-300 rounded bg-[#eb10bb] px-6 py-3 text-b font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto"
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
