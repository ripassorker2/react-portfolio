import React, { useEffect, useState } from "react";
import Loader from "../../utilities/Loader";
import SkillCard from "./SkillCard";

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
    <div className="mt-32" id="skill">
      <h3 className="md:text-5xl -z-10 font-bold mt-12 mb-2 text-3xl text-center text-[#eb10bb]">
        My Skills{" "}
      </h3>
      <h3 className=" -z-10 font-bold mb-12 text-xl text-center text-gray-100">
        Technologies that I work with
      </h3>

      <div className="mt-7  grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3  items-center grid-cols-1 w-[80%] md:w-[92%] m-auto  gap-11">
        {skills?.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
