import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProjectDetils = () => {
  const project = useLoaderData()[0];
  return (
    <div>
      <div className="w-[90%] md:w-[92%] m-auto text-gray-100">
        <div className="grid md:grid-cols-2 mt-10 gap-10 ">
          <img
            data-aos="zoom-in-up"
            className="h-72 w-full rounded-xl duration-1000 hover:shadow-[#eb10bb] hover:shadow-lg"
            src={project?.picture1}
            alt=""
          />
          <img
            data-aos="zoom-in-up"
            className="h-72 w-full rounded-xl duration-1000 hover:shadow-[#eb10bb] hover:shadow-lg"
            src={project?.picture2}
            alt=""
          />
          <img
            data-aos="slide-right"
            className="h-72 w-full rounded-xl duration-1000 hover:shadow-[#eb10bb] hover:shadow-lg"
            src={project?.picture3}
            alt=""
          />
          <img
            data-aos="slide-left"
            className="h-72 w-full rounded-xl duration-1000 hover:shadow-[#eb10bb] hover:shadow-lg"
            src={project?.picture4}
            alt=""
          />
        </div>
        <div className="mt-6 flex sm:justify-end flex-wrap">
          <a
            className="bg-[#eb10bb] text-gray-100 border 0 text-sm sm:ml-4 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-xl"
            href={project?.live}
            target=" _blank"
          >
            Live site{" "}
          </a>
          <a
            className="bg-[#10eb1f] text-gray-100 border  text-sm ml-4 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-xl"
            href={project?.server}
            target=" _blank"
          >
            Server site{" "}
          </a>
          <a
            className="bg-purple-600 outline-none text-gray-100 border  text-sm sm:ml-4 mt-2 sm:mt-0 hover:bg-transparent hover:border duration-300 px-3 py-2 rounded-xl"
            href={project?.client}
            target=" _blank"
          >
            Client site{" "}
          </a>
        </div>
        <div data-aos="slide-up" className="py-6 text-base">
          <h1 className="text-2xl pb-3 font-semibold text-[#eb10bb]">
            {project.name}
          </h1>
          {project?.description?.map((detail, index) => (
            <p key={index}>
              <BsCircleFill className="inline-block text-xs text-gray-500" />{" "}
              {detail.point}
            </p>
          ))}

          <h4 className="mt-5">
            <span className="font-semibold text-[#eb10bb]">
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
