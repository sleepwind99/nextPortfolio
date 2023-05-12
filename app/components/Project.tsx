import React from "react";
import PageIndex from "./PageIndex";
import ProjectCollection from "./ProjectCollection";

const Projects = () => {
  return (
    <div className="w-full md:h-screen p-2 items-center bg-light">
      <PageIndex
        title="PROJECTS"
        subTitle="PROJECTS"
        titleClass="text-5xl lg:text-[170px] md:text-[145px] sm:text-7xl"
        subClass="top-[10px] lg:top-[55px] md:top-[45px] sm:top-[20px]"
        className="mb-10"
      />
      <ProjectCollection />
    </div>
  );
};

export default Projects;
