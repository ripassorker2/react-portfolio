import React, { useEffect, useState } from "react";
import Loader from "../../utilities/Loader";
import Marquee from "react-fast-marquee";
import "../Projects/card.css";

const Skills = () => {
   const [skills, setSkills] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      fetch("skills.json")
         .then((res) => res.json())
         .then((data) => {
            setSkills(data);
            setLoading(false);
         });
   }, []);
   console.log(skills);
   if (loading) {
      return <Loader />;
   }

   return (
      <div className="md:mt-28 mt-16 " id="skill">
         <h3 className="md:text-5xl -z-10 font-bold mt-12 mb-2 text-3xl text-center text-[#0dccf2]">
            My Skills{" "}
         </h3>

         <div className="">
            <h3 className="md:text-2xl text-lg font-semibold  mb-6 text-gray-400 text-center">
               {"<-~-"} For frontend {"-~->"}
            </h3>
            <Marquee delay={0} speed={90} gradient={false} pauseOnHover={true}>
               {skills
                  .filter((skill) => skill.for === "frontend")
                  .map((skill) => (
                     <div className=" flex items-center mr-8 shadoww md:p-6 p-4">
                        <img
                           src={skill?.image}
                           className="md:h-20 md:w-20 h-16 w-16 rounded-full bg-cover"
                           alt=""
                        />
                        <div className="ml-4">
                           <h2 className="md:text-xl text-lg text-[#0dccf2]  font-semibold">
                              {skill.name}
                           </h2>
                           <h2 className="md:text-xl text-lg text-[#19e126]  font-semibold">
                              {skill.lavel}
                           </h2>
                        </div>
                     </div>
                  ))}
            </Marquee>
         </div>
         <div>
            <h3 className="md:text-2xl text-lg font-semibold mb-6 mt-3 text-gray-400 text-center">
               {"<-~-"} For backend{"-~->"}
            </h3>

            <Marquee
               delay={0}
               speed={90}
               gradient={false}
               pauseOnHover={true}
               direction={"right"}
            >
               {skills
                  .filter((skill) => skill.for === "backend")
                  .map((skill) => (
                     <div className=" flex items-center mr-8 shadoww md:p-6 p-4">
                        <img
                           src={skill?.image}
                           className="md:h-20 md:w-20 h-16 w-16 rounded-full bg-cover"
                           alt=""
                        />
                        <div className="ml-4">
                           <h2 className="md:text-xl text-lg text-[#0dccf2]  font-semibold">
                              {skill.name}
                           </h2>
                           <h2 className="md:text-xl text-lg text-[#19e126]  font-semibold">
                              {skill.lavel}
                           </h2>
                        </div>
                     </div>
                  ))}
            </Marquee>
         </div>
      </div>
   );
};

export default Skills;
