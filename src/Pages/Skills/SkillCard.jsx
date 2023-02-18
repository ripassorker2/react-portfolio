import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "../Projects/card.css";

const SkillCard = ({ skill }) => {
  return (
    <>
      <div
        className=" p-8  rounded-lg hover:shadow-[#eb10bb] duration-1000 shadoww hover:shadow-lg overflow-hidden"
        data-aos={skill.animation}
      >
        <CircularProgressbarWithChildren
          className="h-40"
          value={skill.parcentice}
          text={skill.lavel}
          backgroundPadding={6}
          styles={buildStyles({
            pathColor: "#10eb1f",
            trailColor: "#eb10bb",
            textSize: "12px",
            textColor: "#eb10bb",
          })}
        ></CircularProgressbarWithChildren>
        <h3 className="text-[#10eb1f] mt-1 text-center">{skill.name}</h3>
      </div>
    </>
  );
};

export default SkillCard;
