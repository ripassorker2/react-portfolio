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
      <div id="project">
         <h3 className="md:text-5xl mb-2 font-bold md:mt-28 mt-16 text-3xl text-center text-[#eb10bb]">
            My Projects
         </h3>
         <h3 className="font-semibold mb-4 md:text-xl text-lg text-center w-[90%]  mx-auto text-gray-400">
            {"<---"} Some of the projects I have done {"--->"}
         </h3>

         <ProjectTab />
      </div>
   );
};

export default Projects;
