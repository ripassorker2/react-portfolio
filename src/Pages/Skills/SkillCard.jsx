import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <>
      <div className="group relative   rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow duration-300 hover:shadow-rose-600 hover:shadow-md">
        <div className="h-40">
          <img
            className="h-full w-full bg-cover  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={skill?.picture}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blac group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">
            {skill?.name}
          </h1>
          <h4 className="font-dmserif text-xl  text-rose-100">
            {skill?.lavel}
          </h4>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
