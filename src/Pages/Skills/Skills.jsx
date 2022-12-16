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

  if (loading) {
    return <Loader />;
  }

  return (
    <div id="skill">
      <h3 className="md:text-5xl -z-10 font-bold my-12 text-3xl text-center text-rose-600">
        My Skills{" "}
      </h3>

      <div
        data-aos="fade-up"
        className="mt-7  grid lg:grid-cols-3 md:grid-cols-2 items-center grid-cols-1 w-[80%] md:w-[92%] m-auto  gap-11"
      >
        {skills?.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
