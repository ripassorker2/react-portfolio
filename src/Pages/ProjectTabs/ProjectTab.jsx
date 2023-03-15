import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../utilities/Loader";
import ProjectCard from "../Projects/ProjectCard";

const ProjectTab = () => {
   const [openTab, setOpenTab] = useState(1);
   const [active1, setActive1] = useState(false);
   const [active2, setActive2] = useState(true);

   const [projects, setProjects] = useState([]);
   const [loading, setLoading] = useState(true);

   const path = useLocation();
   const pathname = path.pathname;

   useEffect(() => {
      setLoading(true);
      fetch("https://portfoliyo-server.vercel.app/projects")
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   }, []);

   const handleType = (type) => {
      if (type === "") {
         setLoading(true);
         fetch("https://portfoliyo-server.vercel.app/projects")
            .then((res) => res.json())
            .then((data) => {
               setProjects(data);
               setLoading(false);
            });
      } else setLoading(true);
      fetch(`https://portfoliyo-server.vercel.app/project/${type}`)
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   };

   if (loading) {
      return <Loader />;
   }

   return (
      <div className=" ">
         <div className="container mx-auto ">
            <div className="flex  justify-center px-4 max-w-screen-xl m-auto ">
               <ul className="flex justify-end  space-x-2 no-underline mb-3  ">
                  <li className="-mr-5">
                     <button
                        onClick={() => {
                           handleType("Full-stack");
                           setOpenTab(1);
                           setActive1(true);
                           setActive2(false);
                        }}
                        className={` ${
                           active1 && !active2 === true
                              ? "bg-[#19e126] text-gray-800"
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
                           handleType("");
                           setOpenTab(2);
                           setActive1(false);
                           setActive2(true);
                        }}
                        className={` ${
                           !active1 && active2 === true
                              ? "bg-[#19e126] text-gray-800"
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
                           handleType("Front-end");
                           setOpenTab(3);
                           setActive1(false);
                           setActive2(false);
                        }}
                        className={` ${
                           !active1 && !active2 === true
                              ? "bg-[#19e126] text-gray-800"
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
         <div className="mt-7 w-[80%] md:w-[88%] mx-auto">
            <div
               className={` ${openTab === 1 ? "block" : "hidden "}
                  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-auto gap-14`}
            >
               {pathname !== "/projects" ? (
                  <>
                     {projects?.slice(0, 3)?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                     ))}
                  </>
               ) : (
                  <>
                     {projects?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                     ))}
                  </>
               )}
            </div>
            <div
               className={` ${openTab === 2 ? "block" : "hidden "}
                  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-auto gap-14`}
            >
               {pathname !== "/projects" ? (
                  <>
                     {projects?.slice(0, 3)?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                     ))}
                  </>
               ) : (
                  <>
                     {projects?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                     ))}
                  </>
               )}
            </div>
            <div
               className={` ${openTab === 3 ? "block" : "hidden "}
                  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-auto gap-14`}
            >
               {pathname !== "/projects" ? (
                  <>
                     {projects?.slice(0, 3)?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                     ))}
                  </>
               ) : (
                  <>
                     {projects?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                     ))}
                  </>
               )}
            </div>
            {pathname !== "/projects" && (
               <div className="flex justify-end mt-6">
                  <Link
                     to={`/projects`}
                     className="inline-block  text-center  rounded-md bg-[#eb10bb] hover:bg-[#19e126] px-6 py-3 text-b font-semibold text-white hover:pr-9 duration-500 "
                  >
                     See all
                     <AiOutlineArrowRight className="inline-block font-semibold " />
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
};

export default ProjectTab;
