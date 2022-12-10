import React, { useEffect, useState } from "react";
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
    return;
  }

  return (
    <div>
      <h3 className="md:text-5xl font-bold mb-12 text-3xl text-center text-rose-600">
        My Skills{" "}
      </h3>

      <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] md:w-[92%] m-auto gap-11">
        {skills?.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
