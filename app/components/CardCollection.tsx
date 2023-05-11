"use client";
import React, { ReactNode, useState, useRef } from "react";
import Card from "./Card";
import { BsFiletypeCss } from "react-icons/bs";
import { AiFillHtml5, AiFillCloseCircle } from "react-icons/ai";
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
import { AnimatePresence, motion, useInView } from "framer-motion";

type CardProps = {
  title: string;
  barClass?: string;
  content: string;
  rating?: number;
  className?: string;
  icons?: ReactNode;
};

const CardCollection = () => {
  const cards: CardProps[] = [
    {
      title: "HTML5",
      content:
        "web 프로그래밍을 처음 할 때 접해보고 지금은 vue, react와 같은 JSX를 통해서 더 많이 사용합니다.",
      barClass: "bg-[#E34F26] w-[100%]",
      icons: <AiFillHtml5 size={40} color="#E34F26" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 100,
    },
    {
      title: "CSS",
      content:
        "원하는 디자인을 직접 코드로 작성할 수 있고, css in js도 잘 활용합니다.",
      barClass: "bg-[#1572B6] w-[85%]",
      icons: <BsFiletypeCss size={40} color="#1572B6" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 85,
    },
    {
      title: "JavaScript",
      content:
        "web 개발을 할 때에는 항상 사용하며 동기/비동기 처리에 대한 이해를 가지고 있습니다.",
      barClass: "bg-[#F7DF1E] w-[100%],",
      icons: <IoLogoJavascript size={40} color="#F7DF1E" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 100,
    },
    {
      title: "TypeScript",
      content:
        "JavaScript에서 type/interface를 지정하여 프로젝트 유지/보수에 기여할 수 있습니다.",
      barClass: "bg-[#3178C6] w-[90%]",
      icons: <SiTypescript size={40} color="#3178C6" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 90,
    },
    {
      title: "Next.js",
      content:
        "CSR, SSR, SGR과 같은 여러 rendering 방식을 이해하고 있으며, 이 사이트도 Next.js로 만들어졌습니다.",
      barClass: "bg-[#000000] w-[60%]",
      icons: <SiNextdotjs size={40} color="#000000" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 60,
    },
    {
      title: "Firebase",
      content:
        "인턴으로 일할 때 사용하면서 functions, database, realtime db에 대한 이해를 가지고 활용할 수 있습니다. ",
      barClass: "bg-[#FFCA28] w-[70%]",
      icons: <SiFirebase size={40} color="#FFCA28" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 70,
    },
    {
      title: "Tailwind",
      content:
        "사전적으로 정의된 여러 class 이름에 대한 이해를 가지고 있으며, 이 사이트도 tailwindcss로 구현 되었습니다.",
      barClass: "bg-[#38B2AC] w-[60%]",
      icons: <SiTailwindcss size={40} color="#38B2AC" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 60,
    },
    {
      title: "Bootstrap",
      content:
        "다양한 종류의 ui를 익히고 있으며, 실제 프로젝트에서 사용한 적이 있습니다.",
      barClass: "bg-[#563D7C] w-[70%]",
      icons: <SiBootstrap size={40} color="#563D7C" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 70,
    },
    {
      title: "Material-UI",
      content:
        "여러 종류의 ui를 알고 있으며, ui만을 가져와 요구하는 디자인으로 수정할 수 있습니다.",
      barClass: "bg-[#0081CB] w-[70%]",
      icons: <SiMui size={40} color="#0081CB" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 70,
    },
    {
      title: "Python",
      content:
        "학생시절에 ai수업을 들으면서 많이 사용한 언어로서 numpy, pandas와 같은 유틸리티 라이브러리도 함께 사용할 수 있습니다.",
      barClass: "bg-[#3776AB] w-[90%]",
      icons: <SiPython size={40} color="#3776AB" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 90,
    },
    {
      title: "Git",
      content: "협업과 형상관리를 위해서 많이 사용해 보았습니다.",
      barClass: "bg-[#F05032] w-[70%]",
      icons: <SiGit size={40} color="#F05032" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 70,
    },
    {
      title: "MySQL",
      content: "RDB의 대표적인 시스템이며, 프로젝트에 적용해 본 적이 있습니다.",
      barClass: "bg-[#4479A1] w-[80%]",
      icons: <SiMysql size={40} color="#4479A1" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 80,
    },
    {
      title: "PostgreSQL",
      content:
        "RDB의 대표적인 시스템이며, 프로젝트에 활용/적용해 본 적이 있습니다.",
      barClass: "bg-[#336791] w-[70%]",
      icons: <SiPostgresql size={40} color="#336791" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 70,
    },
    {
      title: "React",
      content:
        "메인으로 사용한 프레임워크로서 생명주기와 가상DOM에 대한 이해를 가지고 있습니다.",
      barClass: "bg-[#61DAFB] w-[70%]",
      icons: <RiReactjsFill size={40} color="#61DAFB" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 70,
    },
    {
      title: "Vue",
      content:
        "메인으로 사용하는 프레임워크로서 생명주기와 composition api에 대한 이해를 가지고 있습니다.",
      barClass: "bg-[#4FC08D] w-[90%]",
      icons: <RiVuejsFill size={40} color="#4FC08D" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 90,
    },
    {
      title: "Node.js",
      content:
        "여러 toy project로 활용한 적이 있으며, api 서버 구축/db 연동과 같은 기본적인 서버 구축에 대한 경험이 있습니다.",
      barClass: "bg-[#339933] w-[60%]",
      icons: <FaNode size={40} color="#339933" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 60,
    },
    {
      title: "C/C++",
      content:
        "학교 프로젝트와 알고리즘을 하면서 가장 많이 사용한 언어로 포인터, 메모리 활용에 대한 이해를 가지고 있습니다.",
      barClass: "bg-[#00599C] w-[90%]",
      icons: <TbBrandCpp size={40} color="#00599C" />,
      className: "col-span-3 sm:col-span-6 md:col-span-4 xl:col-span-3",
      rating: 90,
    },
  ];
  const [select, setSelect] = useState<CardProps | null>(null);
  const ratingRef = useRef(null);

  return (
    <div className="grid grid-cols-12 m-auto">
      {cards.map((card) => (
        <Card
          title={card.title}
          barClass={card.barClass}
          content={card.content}
          rating={card.rating}
          icons={card.icons}
          key={card.title}
          className={card.className}
          onClick={() => setSelect(card)}
        />
      ))}
      <AnimatePresence>
        {select && (
          <motion.div
            className="fixed w-screen h-screen z-20 bg-black/70 top-0 left-0"
            onClick={() => setSelect(null)}
          >
            <motion.div
              ref={ratingRef}
              layoutId={select.title}
              className={`fixed top-[200px] left-[10%] w-[80%] sm:left-[15%] sm:w-[70%] md:left-[20%] md:w-[60%] lg:left-[30%] lg:w-[40%] z-10 bg-light border-gray-300 border-[1px] shadow-lg block rounded-md items-center`}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-2 right-2"
                onClick={() => setSelect(null)}
              >
                <AiFillCloseCircle size={20} color="gray" />
              </motion.button>
              <motion.div className="flex justify-between m-3 items-center">
                <motion.div className="block font-nanum text-sm text-gray-600 mx-5">
                  {select.content}
                </motion.div>
                <motion.div className="mt-7">{select.icons}</motion.div>
              </motion.div>
              <motion.div
                key="rating"
                className="h-1 sm:h-2 w-auto bg-gray-300 rounded-full overflow-hidden m-3"
              >
                <motion.div
                  className={`h-full ${select.barClass}`}
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardCollection;
