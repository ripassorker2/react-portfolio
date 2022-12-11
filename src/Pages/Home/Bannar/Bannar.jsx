import React from "react";
import resume from "../../../assets/resume.pdf";
import Typewriter from "typewriter-effect";

const Bannar = () => {
  return (
    <div className="text-white">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://www.thesoftlets.com/wp-content/uploads/2022/07/mern-stack-dev.jpg"
              alt=""
              className="object-contain rounded-lg h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
            <h1 className=" font-bold leading-none sm:text-5xl">
              <span className="text-rose-600 py-1"> Hello</span>! I am <br />
              Ripas <span className="text-rose-600 py-1">Sorker </span>
              <span className="text-rose-600 py-1">Rifat</span>
            </h1>

            <p className="my-3 mb-8 text-2xl flex ">
              I'm a{"  "}
              <span className="text-rose-600 font-semibold">
                <Typewriter
                  options={{
                    strings: ["_ MERN Stack Developer", `_ Frontend Developer`],
                    autoStart: true,
                    loop: true,
                  }}
                />{" "}
              </span>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href={resume}
                download
                className="block w-full rounded bg-rose-600 px-12 py-3 text-b font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannar;
