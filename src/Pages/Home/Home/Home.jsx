import React from "react";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import Bannar from "../Bannar/Bannar";

const Home = () => {
  return (
    <div>
      <Bannar />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
