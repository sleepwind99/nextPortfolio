"use client";
import React, { ReactNode, useState } from "react";
import ProjectImage from "./ProjectImage";
import Image from "next/image";
import adminPage1 from "@/public/images/adminPage1.png";
import adminPage2 from "@/public/images/adminPage2.png";
import clone1 from "@/public/images/clone1.jpg";
import clone2 from "@/public/images/clone2.jpg";
import portfolio1 from "@/public/images/portfolio1.png";
import portfolio2 from "@/public/images/portfolio2.png";
import todoList1 from "@/public/images/todoList1.png";
import todoList2 from "@/public/images/todoList2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

type ProjectImageProps = {
  className?: string;
  images: ReactNode[];
  title: string;
  content: string;
  skills: string[];
};

const ProjectCollection = () => {
  const projects: ProjectImageProps[] = [
    {
      title: "clone",
      className: "",
      images: [
        <Image
          src={clone1}
          key={"clone1"}
          alt="clone1"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
        <Image
          src={clone2}
          key={"clone2"}
          alt="clone2"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
      ],
      content:
        "처음 web 개발을 시작할 때, 순수한 HTML5, CSS, JS만을 사용해서 만들어 본 클론 사이트입니다. 이 프로젝트를 통해 웹 개발에서 사용하는 기본적인 언어에 대해서 배울 수 있었습니다.",
      skills: ["HTML5", "CSS", "JavaScript"],
    },
    {
      title: "todoList",
      className: "",
      images: [
        <Image
          src={todoList1}
          key={"todoList1"}
          alt="todoList1"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
        <Image
          src={todoList2}
          key={"todoList2"}
          alt="todoList2"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
      ],
      content:
        "web 개발 프레임워크를 배우고 직접 적용해본 프로젝트입니다. 기본적인 프레임워크의 사용법과 버전 관리 시스템, node를 사용한 back-end server의 구축과 db연동, 로그인 api 등과 같은 많은 내용을 배울 수 있었습니다.",
      skills: [
        "React",
        "JavaScript",
        "RESTapi",
        "Node.js",
        "Bootstrap",
        "MySQL",
        "Git",
      ],
    },
    {
      title: "adminPage",
      className: "",
      images: [
        <Image
          src={adminPage1}
          key={"adminPage1"}
          alt="adminPage1"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
        <Image
          src={adminPage2}
          key={"adminPage2"}
          alt="adminPage2"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
      ],
      content:
        "인턴으로 입사해서 관리자 페이지의 유지/보수/운영을 맡았습니다. back-end가 없는 service에서의 front와 동기/비동기 처리, firebase/functions의 사용법 noSQL 기반의 DB를 직접 사용해볼 수 있었습니다.",
      skills: [
        "Vue",
        "Typescript",
        "Firebase",
        "noSQL",
        "functions",
        "Element-plus",
        "Git",
      ],
    },
    {
      title: "portfolio",
      className: "",
      images: [
        <Image
          src={portfolio1}
          key={"portfolio1"}
          alt="portfolio1"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
        <Image
          src={portfolio2}
          key={"portfolio2"}
          alt="portfolio2"
          className={`rounded-lg shadow-md col-span-6 md:col-span-3`}
        />,
      ],
      content:
        "여러 프레임워크와 새로 알게된 next.js로 portfolio 사이트를 구현했습니다.",
      skills: ["Next.js", "React", "Typescript", "framer-motion", "Git"],
    },
  ];
  const [select, setSelect] = useState<ProjectImageProps | null>(null);
  return (
    <div className="grid grid-cols-6 gap-6 max-w-[1100px] items-center mx-auto">
      <AnimatePresence>
        {select && (
          <motion.div
            className="fixed w-screen h-screen z-20 bg-black/70 top-0 left-0"
            onClick={() => setSelect(null)}
          >
            <motion.div
              layoutId={select.title}
              className={`col-span-6 border border-gray-400 shadow-xl rounded-xl relative mt-[30%] md:mt-[10%] mx-[10%] md:mx-[15%] bg-light`}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <motion.button
                className="absolute top-2 right-2"
                onClick={() => setSelect(null)}
              >
                <AiFillCloseCircle size={20} color="gray" />
              </motion.button>
              <div className="m-10">
                <motion.div className="grid grid-cols-6 gap-6">
                  {select.images.map((image) => image)}
                </motion.div>
                <div className="bg-gray-300 w-full h-[1px] mx-auto my-5"></div>
                <h1 className="font-mont text-2xl mb-3">{`${select.title} Project`}</h1>
                <p className="font-nanum text-sm">{select.content}</p>
                <div className="bg-gray-300 w-full h-[1px] mx-auto my-5"></div>
                {select.skills.map((skill) => (
                  <CustomTag title={skill} key={skill} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {projects.map((proejct) =>
        select?.title === proejct.title ? (
          <></>
        ) : (
          <ProjectImage
            key={proejct.title}
            title={proejct.title}
            image={proejct.images[0]}
            className={
              proejct.className +
              `${
                select
                  ? select.title === proejct.title
                    ? " hidden"
                    : " col-span-6 md:col-span-2"
                  : " col-span-6 md:col-span-3 "
              }`
            }
            onClick={() => setSelect(proejct)}
          />
        )
      )}
    </div>
  );
};

type TagProps = {
  title: string;
  className?: string;
};

const CustomTag = ({ title, className = "" }: TagProps) => {
  return (
    <span
      className={`inline-block px-1 bg-point border-[2px] border-yellow-600 rounded-xl mr-1 ${className}`}
    >
      {title}
    </span>
  );
};

export default ProjectCollection;
