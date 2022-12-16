import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import resume from "../../../assets/resume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="px-4  py-5 mx-auto sm:max-w-xl md:max-w-full sticky  md:px-8  shadow-2xl  text-white"
      id="home"
    >
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <span className="ml-2 text-xl font-serif font-bold tracking-wide text-gray-100 uppercase">
            <span className="text-rose-600 py-1"> Ripas </span> Sorker{" "}
            <span className="text-rose-600 py-1">Rifat </span>
          </span>
        </Link>
        <ul className="lg:flex items-center hidden space-x-8">
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => ({
                color: isActive && "#f43f5e",
              })}
              className="font-medium tracking-wide text-gray-00 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              style={({ isActive }) => ({
                color: isActive && "#f43f5e",
              })}
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive && "#f43f5e",
              })}
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) => ({
                color: isActive && "#f43f5e",
              })}
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive && "#f43f5e",
              })}
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive && "#f43f5e",
              })}
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href={resume}
              download
              className="block w-full rounded bg-rose-600  px-4 py-2 font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Resume
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 text-gray-100 text-2xl" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0  z-[1000] left-0 w-full">
              <div className="p-5  border bg-gray-900 rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-serif font-bold tracking-wide text-gray-100 uppercase">
                        <span className="text-rose-600 py-1"> Ripas </span>{" "}
                        Sorker{" "}
                        <span className="text-rose-600 py-1">Rifat </span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        style={({ isActive }) => ({
                          color: isActive && "#f43f5e",
                        })}
                        className="font-medium tracking-wide text-gray-00 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/skills"
                        style={({ isActive }) => ({
                          color: isActive && "#f43f5e",
                        })}
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
                      >
                        Skills
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects"
                        style={({ isActive }) => ({
                          color: isActive && "#f43f5e",
                        })}
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
                      >
                        Projects
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/contact"
                        style={({ isActive }) => ({
                          color: isActive && "#f43f5e",
                        })}
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                          color: isActive && "#f43f5e",
                        })}
                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-rose-600 "
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <a
                        href={resume}
                        download
                        className="block w-full rounded bg-rose-600   px-4 py-2 font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                      >
                        Get Resume
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
