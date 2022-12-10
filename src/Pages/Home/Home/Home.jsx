import React from "react";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import Bannar from "../Bannar/Bannar";

const Home = () => {
  return (
    <div>
      <Bannar />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
