import React, { useEffect, useState } from "react";
import Loader from "../../utilities/Loader";
import SkillCard from "./SkillCard";
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
      <div className="mt-32 " id="skill">
         <h3 className="md:text-5xl -z-10 font-bold mt-12 mb-2 text-3xl text-center text-[#eb10bb]">
            My Skills{" "}
         </h3>
         {/* <h3 className=" -z-10 font-bold md:text-xl text-lg text-center text-gray-100">
            Technologies that I work with
         </h3> */}

         {/* <div className="mt-7  grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  items-center grid-cols-1 w-[80%] md:w-[92%] m-auto  gap-11">
            {skills
               ?.slice(0)
               .reverse()
               .map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
               ))}
         </div> */}

         <div className="">
            <h4 className="text-gray-400 text-center text-3xl my-5 font-semibold">
               {"<---"} For frontend {"--->"}
            </h4>
            <Marquee delay={0} speed={90} gradient={false} pauseOnHover={true}>
               {skills
                  .filter((skill) => skill.for === "frontend")
                  .map((skill) => (
                     <div className=" flex items-center mr-8 shadoww p-6">
                        <img
                           src={skill?.image}
                           className="h-20 w-20 rounded-full bg-cover"
                           alt=""
                        />
                        <div className="ml-4">
                           <h2 className="text-xl text-[#eb10bb]  font-semibold">
                              {skill.name}
                           </h2>
                           <h2 className="text-xl text-[#10eb1f]  font-semibold">
                              {skill.lavel}
                           </h2>
                        </div>
                     </div>
                  ))}
            </Marquee>
         </div>
         <div>
            <h4 className="text-gray-400 text-center text-3xl my-5  font-semibold">
               {"<---"} For backend {"--->"}
            </h4>
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
                     <div className=" flex items-center mr-8 shadoww p-6">
                        <img
                           src={skill?.image}
                           className="h-20 w-20 rounded-full bg-cover"
                           alt=""
                        />
                        <div className="ml-4">
                           <h2 className="text-xl text-[#eb10bb]  font-semibold">
                              {skill.name}
                           </h2>
                           <h2 className="text-xl text-[#10eb1f]  font-semibold">
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
