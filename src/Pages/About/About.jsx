import React from "react";
import rifat1 from "../../assets/rifat1.png";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <section className="bg-gray-900" id="about">
      <h1 className="md:text-5xl mt-9 text-3xl text-rose-600 font-bold text-center">
        About Me
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
        <div
          data-aos="fade-left"
          className="flex items-center rounded-xl w-full justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        >
          <img
            src={rifat1}
            alt=""
            className="object-contain rounded-xl bg-transparent w-full h-72 sm:h-80 lg:h-96"
          />
        </div>
        <div data-aos="fade-right" className=" p-6 rounded-sm ">
          <p className="mt-6 mb-5 text-base text-gray-100 md:pr-8">
            Hello! I am Md Ripas Sorker Rifat. I am twenty years old. I am doing
            my Bachelor in Dhaka International University right now and I
            specialize in Web Designing and Development. I am working as a
            full-stack developer for the past years, and I have extensive
            experience with both front-end and back-end development. I have a
            deep interest in Web Development and I made some full-stack projects
            using React, Node, Express, and MongoDB.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href={resume}
                download
                className="block w-full rounded text-center bg-rose-600 px-12 py-3 text-b font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
