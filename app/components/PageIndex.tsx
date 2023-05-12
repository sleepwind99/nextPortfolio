import React from "react";

type PageIndexProps = {
  title: string;
  subTitle: string;
  className?: string;
  titleClass?: string;
  subClass?: string;
};

const PageIndex = ({
  title,
  subTitle,
  className = "",
  titleClass = "",
  subClass = "",
}: PageIndexProps) => {
  return (
    <div className={`relative z-0 ${className}`}>
      <h1
        className={`text-7xl text-center text-stroke stroke-black font-extrabold font-robo text-light sm:text-9xl md:text-[200px] ${titleClass}`}
      >
        {title}
      </h1>
      <h1
        className={`absolute font-bold font-robo text-point text-xl top-[25px] md:top-[65px] text-center w-full sm:top-[45px] sm:text-3xl md:text-6xl ${subClass}`}
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default PageIndex;
