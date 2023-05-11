import React from "react";
import PageIndex from "./PageIndex";
import { BsFiletypeCss } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiPython,
  SiGit,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { RiVuejsFill, RiReactjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import Card from "./Card";

const Skills = () => {
  return (
    <div className="w-full md:h-screen p-2 items-center bg-light">
      <div className="max-w-[1600px] m-auto">
        <PageIndex title="SKILLS" subTitle="SKILLS" />
        <Card title="html5" content="" rating={5} />
      </div>
    </div>
  );
};

export default Skills;
