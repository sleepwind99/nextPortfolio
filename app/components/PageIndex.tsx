import React from "react";

type PageIndexProps = {
  title: string;
  subTitle: string;
  className?: string;
};

const PageIndex = ({ title, subTitle, className = "" }: PageIndexProps) => {
  return (
    <div className={`relative z-0 ${className}`}>
      <h1 className="text-7xl text-center text-stroke stroke-black font-extrabold font-robo text-light sm:text-9xl md:text-[200px]">
        {title}
      </h1>
      <h1 className="absolute font-bold font-robo text-point text-xl top-[25px] md:top-[65px] text-center w-full sm:top-[45px] sm:text-3xl md:text-6xl">
        {subTitle}
      </h1>
    </div>
  );
};

export default PageIndex;
