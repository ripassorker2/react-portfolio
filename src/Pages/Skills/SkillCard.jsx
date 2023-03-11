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
            className=" p-8  rounded-lg group- hover:shadow-[#eb10bb] shadoww hover:shadow-md  !duration-1000 !hover:-skew-y-12 !hover:scale-125 "
            data-aos={skill.animation}
         >
            <CircularProgressbarWithChildren
               className="h-32"
               value={skill.parcentice}
               text={skill.name}
               backgroundPadding={6}
               styles={buildStyles({
                  pathColor: "#10eb1f",
                  trailColor: "#eb10bb",
                  textSize: "12px",
                  textColor: "#eb10bb",
               })}
            ></CircularProgressbarWithChildren>
         </div>
      </>
   );
};

export default SkillCard;
