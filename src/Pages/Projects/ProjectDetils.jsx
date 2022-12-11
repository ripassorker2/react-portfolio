import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProjectDetils = () => {
  const project = useLoaderData()[0];
  console.log(project);
  return (
    <div>
      <div className="w-[80%] md:w-[92%] m-auto text-gray-100">
        <div className="grid md:grid-cols-2 gap-10 ">
          <img
            className="h-72 w-full rounded-xl duration-300 hover:shadow-rose-600 hover:shadow-lg"
            src={project?.picture1}
            alt=""
          />
          <img
            className="h-72 w-full rounded-xl duration-300 hover:shadow-rose-600 hover:shadow-lg"
            src={project?.picture2}
            alt=""
          />
          <img
            className="h-72 w-full rounded-xl duration-300 hover:shadow-rose-600 hover:shadow-lg"
            src={project?.picture3}
            alt=""
          />
          <img
            className="h-72 w-full rounded-xl duration-300 hover:shadow-rose-600 hover:shadow-lg"
            src={project?.picture4}
            alt=""
          />
        </div>
        <div className="mt-6 flex sm:justify-end flex-wrap">
          <a
            className="bg-rose-600 text-sm sm:ml-4 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-xl"
            href={project?.live}
            target="_blank"
          >
            Live site{" "}
          </a>
          <a
            className="bg-green-600 text-sm ml-4 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-xl"
            href={project?.server}
            target="_blank"
          >
            Server site{" "}
          </a>
          <a
            className="bg-purple-600 text-sm ml-4 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-xl"
            href={project?.client}
            target="_blank"
          >
            Client site{" "}
          </a>
        </div>
        <div className="py-6 text-base">
          <h1 className="text-2xl pb-3 font-semibold text-rose-600">
            {project.name}
          </h1>
          {project?.description?.map((detail, index) => (
            <p>
              <BsCircleFill className="inline-block text-xs text-gray-500" />{" "}
              {detail.point}
            </p>
          ))}

          <h4 className="mt-5">
            <span className="font-semibold text-rose-600">
              {" "}
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
