import React, { useState } from "react";

const ProjectTab = () => {
   const [openTab, setOpenTab] = useState(1);
   const [active1, setActive1] = useState(false);
   const [active2, setActive2] = useState(true);
   return (
      <div className="my-8 md:mt-8 mt-14">
         <div className="container mx-auto ">
            <div className="flex  justify-center px-4 max-w-screen-xl m-auto ">
               <ul className="flex justify-end  space-x-2 no-underline mb-3  ">
                  <li className="-mr-5">
                     <button
                        onClick={() => {
                           setOpenTab(1);
                           setActive1(true);
                           setActive2(false);
                        }}
                        className={` ${
                           active1 && !active2 === true
                              ? "bg-[#10eb1f] text-gray-800"
                              : "bg-[#eb10bb]"
                        } inline-block  w-full text-white 
                font-bold py-3 px-6 rounded duration-300`}
                     >
                        Full Stack
                     </button>
                  </li>
                  <li className="!-mr-5 ">
                     <button
                        onClick={() => {
                           setOpenTab(2);
                           setActive1(false);
                           setActive2(true);
                        }}
                        className={` ${
                           !active1 && active2 === true
                              ? "bg-[#10eb1f] text-gray-800"
                              : "bg-[#eb10bb]"
                        } inline-block  w-full text-white 
                font-bold py-3 px-6 rounded duration-300`}
                     >
                        All Project
                     </button>
                  </li>
                  <li className="-mr-4">
                     <button
                        onClick={() => {
                           setOpenTab(3);
                           setActive1(false);
                           setActive2(false);
                        }}
                        className={` ${
                           !active1 && !active2 === true
                              ? "bg-[#10eb1f] text-gray-800"
                              : "bg-[#eb10bb]"
                        } inline-block  w-full text-white 
                font-bold py-3 px-6 rounded duration-300`}
                     >
                        Front-end
                     </button>
                  </li>
               </ul>
            </div>
         </div>
         <div className="">
            <div
               className={` ${openTab === 1 ? "block" : "hidden "}
                 text-yellow-400 text-6xl`}
            >
               Full Stack
            </div>
            <div
               className={` ${openTab === 2 ? "block" : "hidden "}
                 text-yellow-400 text-6xl`}
            >
               All Project
            </div>
            <div
               className={` ${openTab === 3 ? "block" : "hidden "}
                 text-yellow-400 text-6xl`}
            >
               Frontend
            </div>
         </div>
      </div>
   );
};

export default ProjectTab;
