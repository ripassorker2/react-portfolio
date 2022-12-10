import React from "react";
import About from "../../About/About";
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
      <About />
      <Contact />
    </div>
  );
};

export default Home;
