import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";

const SkillCard = ({ skill }) => {
  return (
    <>
      <div className="relative h-40 " data-aos={skill.animation}>
        <CircularProgressbarWithChildren
          className="h-36"
          value={skill.parcentice}
          backgroundPadding={4}
          styles={buildStyles({
            pathColor: "#10eb1f",
            trailColor: "#eb10bb",
          })}
        >
          <div className="absolute text-white lg:-bottom-14 md:-bottom-10 sm:-bottom-4 -bottom-24 flex flex-col items-center">
            <img
              className="h-16 w-16 rounded-full"
              src={skill.picture}
              alt=""
            />
            <h4 className="pt-1 text-[#1076eb] text-lg font-semibold">
              <CountUp start={0} end={skill.parcentice} duration={2} />%
            </h4>
          </div>
        </CircularProgressbarWithChildren>
        <h3 className="text-gray-100 text-center">{skill.name}</h3>
      </div>
    </>
  );
};

export default SkillCard;
