import React, { useEffect, useState } from "react";
import Loader from "../../utilities/Loader";
import ProjectTab from "../ProjectTabs/ProjectTab";
import ProjectCard from "./ProjectCard";

const Projects = () => {
   const [projects, setProjects] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      fetch("https://portfoliyo-server.vercel.app/projects")
         .then((res) => res.json())
         .then((data) => {
            setProjects(data);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <Loader />;
   }

   return (
      <div className="pt-20" id="project">
         <h3 className="md:text-5xl mb-2 font-bold mt-16 text-3xl text-center text-[#eb10bb]">
            My Projects
         </h3>
         <h3 className="font-bold mb-11 md:text-xl text-lg text-center text-gray-100">
            Some of the projects I have done
         </h3>

         {/* <ProjectTab /> */}

         <div
            data-aos="fade-up"
            className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] md:w-[88%] mx-auto gap-14"
         >
            {projects?.map((project, index) => (
               <ProjectCard key={index} project={project} />
            ))}
         </div>
      </div>
   );
};

export default Projects;
