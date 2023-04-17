import React from "react";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import Bannar from "../Bannar/Bannar";
import Services from "../../Services/Services";

const Home = () => {
   return (
      <div>
         <Bannar />
         <Services />
         <Skills />
         <Projects />
         <About />
         <Contact />
      </div>
   );
};

export default Home;
