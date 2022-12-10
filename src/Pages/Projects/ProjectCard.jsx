import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card  glass mt-5">
      <figure>
        <img
          className="hover:scale-110 duration-200"
          src={project?.picture}
          alt="car!"
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title mb-4 ">{project?.name}</h2>

        <div className="card-actions justify-end">
          <a
            href={project?.link}
            target="_blank"
            className="block w-full text-center rounded bg-rose-600 px-7 py-3 text-b font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Live Demo{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
