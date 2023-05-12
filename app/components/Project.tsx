import React from "react";
import PageIndex from "./PageIndex";
import ProjectCollection from "./ProjectCollection";

const Projects = () => {
  return (
    <div className="w-full xl:h-screen p-2 items-center bg-light">
      <PageIndex
        title="PROJECTS"
        subTitle="PROJECTS"
        titleClass="!text-[60px] sm:!text-8xl md:!text-[140px] lg:!text-[170px] "
        subClass="!top-[15px] sm:!top-[25px] md:!top-[40px] lg:!top-[55px] "
        className="mb-10"
      />
      <ProjectCollection />
    </div>
  );
};

export default Projects;
