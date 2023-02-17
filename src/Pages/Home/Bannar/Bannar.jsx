import React from "react";
import resume from "../../../assets/resume.pdf";
import coding from "../../../assets/coding.json";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";

const Bannar = () => {
  return (
    <div className="text-white z-10">
      <section>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div
            data-aos="fade-left"
            className="flex items-center md:ml-16 justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          >
            {/* <img
              src="https://www.thesoftlets.com/wp-content/uploads/2022/07/mern-stack-dev.jpg"
              alt=""
              className="object-contain rounded-lg h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            /> */}
            <Lottie
              className="object-contain rounded-lg  md:w-[500px]"
              animationData={coding}
              loop={true}
            />
          </div>
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center  text-center mt-16  rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left"
          >
            <h1 className=" font-bold leading-none md:text-5xl text-3xl">
              <span className="text-[#eb10bb] py-1"> Hello</span>! I am <br />
              Ripas <span className="text-[#eb10bb] py-1">Sorker </span>
              <span className="text-[#eb10bb] py-1">Rifat</span>
            </h1>

            <p className="my-3 mb-8 md:text-2xl text-xl md:justify-start justify-center flex ">
              I'm a{"  "}
              <span className="text-[#10eb1f] font-semibold">
                <Typewriter
                  options={{
                    strings: [
                      "_ MERN Stack Developer",
                      `_ Frontend Developer`,
                      "_ Full Stack Developer",
                      "_ Backend Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />{" "}
              </span>
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                href={resume}
                download
                className="block w-full rounded bg-[#eb10bb] px-12 py-3 text-b font-medium text-white shadow hover:bg-[#10eb1f] duration-300 hover:text-gray-800 focus:outline-none  sm:w-auto"
              >
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannar;
