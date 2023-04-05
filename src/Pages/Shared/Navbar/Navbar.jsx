import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import resume from "../../../assets/resume.pdf";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <div
         className=" py-5 w-full shadow-gray-500 bg-[#262624] text-gray-100 "
         id="home"
      >
         <div className="relative mx-auto w-[90%] flex items-center justify-between ">
            <Link to="/" className="inline-flex items-center">
               <span className="ml-2 text-2xl font-serif font-bold tracking-wide text-gray-100 uppercase">
                  <span className="text-[#eb10bb] py-1"> R </span> S
                  <span className="text-[#eb10bb] py-1"> R</span>
               </span>
            </Link>
            <ul className="lg:flex items-center hidden space-x-8">
               <li>
                  <NavLink
                     to="/home"
                     style={({ isActive }) => ({
                        color: isActive && "#eb10bb",
                     })}
                     className="font-medium tracking-wide text-gray-00 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#eb10bb] "
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/skills"
                     style={({ isActive }) => ({
                        color: isActive && "#eb10bb",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#eb10bb] "
                  >
                     Skills
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/projects"
                     style={({ isActive }) => ({
                        color: isActive && "#eb10bb",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#eb10bb] "
                  >
                     Projects
                  </NavLink>
               </li>
               {/* <li>
                  <NavLink
                     to="/blogs"
                     style={({ isActive }) => ({
                        color: isActive && "#eb10bb",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#eb10bb] "
                  >
                     Blogs
                  </NavLink>
               </li> */}

               <li>
                  <NavLink
                     to="/contact"
                     style={({ isActive }) => ({
                        color: isActive && "#eb10bb",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#eb10bb] "
                  >
                     Contact
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     style={({ isActive }) => ({
                        color: isActive && "#eb10bb",
                     })}
                     className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:text-[#eb10bb] "
                  >
                     About
                  </NavLink>
               </li>
               <li>
                  <a
                     href={resume}
                     download
                     className="block w-full rounded bg-[#eb10bb] px-4 py-2  font-medium text-white shadow hover:bg-[#19e126] duration-300 hover:text-gray-800 focus:outline-none  sm:w-auto "
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
