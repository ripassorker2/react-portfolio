import React, { useEffect, useState } from "react";
import Loader from "../../utilities/Loader";
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
    <div className="py-12" id="project">
      <h3 className="md:text-5xl  font-bold mb-9 text-3xl text-center text-rose-600">
        My Projects{" "}
      </h3>

      <div
        data-aos="fade-up"
        className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] md:w-[92%] mx-auto gap-8"
      >
        {projects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
