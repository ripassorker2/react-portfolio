import React from "react";
import { Link, NavLink } from "react-router-dom";
import resume from "../../../assets/resume.pdf";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
   return (
      <div
         className=" py-5 w-full shadow-gray-500 bg-[#262624] text-gray-100 "
         id="home"
      >
         <div className="relative max-w-[1440px]  w-[90%] mx-auto flex items-center justify-between ">
            <Link to="/" className="inline-flex items-center">
               <span className="ml-2 text-2xl font-serif font-bold tracking-wide text-gray-100 uppercase">
                  <span className="text-[#0dccf2] py-1"> L</span> W
                  <span className="text-[#0dccf2] py-1"> C</span>
               </span>
            </Link>
            <ul className="lg:flex items-center hidden space-x-8">
               <li>
                  <NavLink
                     to="/home"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray-00 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/skills"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Skills
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/projects"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Projects
                  </NavLink>
               </li>
               {/* <li>
                  <NavLink
                     to="/blogs"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Blogs
                  </NavLink>
               </li> */}

               <li>
                  <NavLink
                     to="/contact"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     Contact
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     style={({ isActive }) => ({
                        color: isActive && "#0dccf2",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#0dccf2] "
                  >
                     About
                  </NavLink>
               </li>
               <li>
                  <a
                     href={resume}
                     download
                     className="inline-block w-full rounded bg-[#0dccf2] px-3 py-2 font-medium text-gray-800 shadow hover:bg-[#19e126] duration-500 hover:text-gray-900  focus:outline-none  sm:w-auto "
                  >
                     Get Resume
                  </a>
               </li>
            </ul>
         </div>
         <Sidebar resume={resume} />
      </div>
   );
};

export default Navbar;
