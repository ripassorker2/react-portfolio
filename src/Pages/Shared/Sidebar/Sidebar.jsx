import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
// import moduleName from 'module';

const Sidebar = ({ resume }) => {
   const [open, setOpen] = useState(true);
   return (
      <div className="md:hidden block">
         <>
            {!open && (
               <div
                  className="text-3xl fixed right-4 top-5 z-[60]"
                  onClick={() => setOpen(!open)}
               >
                  <HiBars3 />
               </div>
            )}

            <div
               className={`top-0 right-0 w-[300px] ease-in-out duration-300
               bg-[#222222]  text-white fixed h-full z-[100] ${
                  open ? "translate-x-0 " : "translate-x-full"
               }`}
            >
               <button
                  className="flex text-3xl font-serif font-semibold h-10 w-10 rounded-full text-gray-100 items-center cursor-pointer fixed right-[240px] top-6 z-[120]"
                  onClick={() => setOpen(!open)}
               >
                  <RxCross2 />
               </button>

               <div className="flex relative list-none -mt-24  flex-col justify-center items-center w-full h-full">
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#eb10bb] mt-7 text-[24px] hover:text-[#eb10bb]"
                              : "text-white  mt-7 text-[24px] hover:text-[#eb10bb] duration-500 "
                        }
                        to="/"
                     >
                        Home
                     </NavLink>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#eb10bb] mt-7 text-[24px] hover:text-[#eb10bb]"
                              : "text-white  mt-7 text-[24px] hover:text-[#eb10bb] duration-500 "
                        }
                        to="/skills"
                     >
                        Skills
                     </NavLink>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#eb10bb] mt-7 text-[24px] hover:text-[#eb10bb]"
                              : "text-white  mt-7 text-[24px] hover:text-[#eb10bb] duration-500 "
                        }
                        to="/projects"
                     >
                        Projects
                     </NavLink>
                  </div>

                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#eb10bb] mt-7 text-[24px] hover:text-[#eb10bb]"
                              : "text-white  mt-7 text-[24px] hover:text-[#eb10bb] duration-500 "
                        }
                        to="/about"
                     >
                        About Me
                     </NavLink>
                  </div>
                  <div className=" w-full text-center mb-2">
                     <NavLink
                        className={({ isActive }) =>
                           isActive
                              ? "  text-[#eb10bb] mt-7 text-[24px] hover:text-[#eb10bb]"
                              : "text-white  mt-7 text-[24px] hover:text-[#eb10bb] duration-500 "
                        }
                        to="/contact"
                     >
                        Contact Me
                     </NavLink>
                  </div>
                  <div className=" w-full text-center mb-2 mt-3 ">
                     <li>
                        <a
                           href={resume}
                           download
                           className="block w-full text-lg !mr-4 rounded bg-[#eb10bb] px-4 py-2  font-semibold text-white shadow hover:bg-[#19e126] duration-300 hover:text-gray-800 focus:outline-none "
                        >
                           Get Resume
                        </a>
                     </li>
                  </div>
               </div>
            </div>
         </>
      </div>
   );
};

export default Sidebar;
