import React from "react";
import PageIndex from "./PageIndex";
import CardCollection from "./CardCollection";

const Skills = () => {
  return (
    <div className="w-full md:h-screen p-2 items-center bg-light">
      <div className="max-w-[1600px] m-auto">
        <PageIndex title="SKILLS" subTitle="SKILLS" className="mb-5" />
        <h1 className="font-nanum text-center text-lg md:text-xl mb-3">
          제가 생각하는 상대적인 점수입니다.
        </h1>
        <CardCollection />
      </div>
    </div>
  );
};

export default Skills;
