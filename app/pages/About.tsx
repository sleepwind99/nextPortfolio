import React from "react";
import PageIndex from "../components/PageIndex";
import LGTM from "@/public/images/LGTM.png";
import Image from "next/image";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="w-full xl:h-screen p-2 items-center bg-light" id="About">
      <PageIndex title="ABOUT" subTitle="ABOUT ME" className="mb-10 md:mb-20" />
      <div className="max-w-[1600px] m-auto">
        <div className="m-auto grid grid-cols-3 gap-6">
          <div className="col-span-3 md:col-span-1">
            <div className="justify-center items-center">
              <Image
                src={LGTM}
                alt="LGTM"
                className="w-full max-w-[450px] m-auto"
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <h1 className="font-robo text-center text-3xl my-3 font-bold md:text-left">
              Front-End Developer
            </h1>
            <p className="font-nanum text-center text-sm my-2 text-dark font-bold lg:text-lg md:text-left">
              저를 소개합니다.
            </p>
            <ul className="font-nanum text-center text-sm text-gray-600 my-2 lg:text-lg md:text-left">
              <li className="my-2">
                <span>이름:</span> <span>김정주</span>
              </li>
              <li className="my-2">
                <span>생일:</span> <span>1999년 12월 8일</span>
              </li>
              <li className="my-2">
                <span>이메일:</span> <span>jjugo5331625@gmail.com</span>
              </li>
              <li className="my-2">
                <span>거주지:</span> <span>서울특별시 서대문구</span>
              </li>
              <li className="my-2">
                <span>최종학력:</span>{" "}
                <span>연세대학교 컴퓨터과학과 4-1 재학</span>
              </li>
            </ul>
            <div className="hidden lg:block">
              <p className="font-nanum text-center text-sm my-2 text-dark font-bold lg:text-lg md:text-left">
                저는 다음을 지향하는 개발자입니다.
              </p>
              <ul className="font-nanum text-sm text-gray-600 lg:text-lg">
                <li className="my-2">
                  1. 모듈화와 재사용성: 재사용성이 높은 컴포넌트를 모듈화하여
                  개발하고, 효율적으로 유지보수할 수 있도록 합니다.
                </li>
                <li className="my-2">
                  2. 적극적인 협업: 팀원과 소통하며 문제를 해결하고, 코드 리뷰를
                  통해 서로의 코드를 발전시킵니다.
                </li>
                <li className="my-2">
                  3. 끊임없는 성장: 새로운 기술과 트렌드를 지속적으로 학습하고,
                  개인 프로젝트를 통해 자기 계발에 노력합니다.
                </li>
                <li className="my-2">
                  4. 문제 해결 능력: 빠르게 문제를 파악하고 해결하기 위해
                  디버깅과 문제해결 능력을 향상시키고, 에러를 예방하도록
                  노력합니다.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 md:hidden ">
            <p className="font-nanum text-sm my-2 text-dark font-bold lg:text-lg text-center">
              저는 다음을 지향하는 개발자입니다.
            </p>
            <div className="flex items-center">
              <Button
                title="모듈화와 재사용성"
                className="my-3 mx-auto font-nanum cursor-default"
              />
            </div>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              재사용성이 높은 컴포넌트를 모듈화하여 개발하고,
            </p>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              효율적으로유지보수할 수 있도록 합니다.
            </p>

            <div className="flex items-center">
              <Button
                title="적극적인 협업"
                className="my-3 mx-auto font-nanum cursor-default"
              />
            </div>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              팀원과 소통하며 문제를 해결하고,
            </p>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              코드 리뷰를 통해 서로의 코드를 발전시킵니다.
            </p>

            <div className="flex items-center">
              <Button
                title="끊임없는 성장"
                className="my-3 mx-auto font-nanum cursor-default"
              />
            </div>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              새로운 기술과 트렌드를 지속적으로 학습하고,
            </p>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              개인 프로젝트를 통해 자기 계발에 노력합니다.
            </p>

            <div className="flex items-center">
              <Button
                title="문제 해결 능력"
                className="my-3 mx-auto font-nanum cursor-default"
              />
            </div>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              빠르게 문제를 파악하고 해결하기 위해 디버깅과
            </p>
            <p className="mx-2 font-nanum text-xs sm:text-sm text-gray-600 text-center">
              문제해결 능력을 향상시키고, 에러를 예방하도록 노력합니다.
            </p>
          </div>
          <div className="hidden col-span-3 md:block lg:hidden mx-5">
            <p className="font-nanum text-sm my-2 text-dark font-bold lg:text-lg">
              저는 다음을 지향하는 개발자입니다.
            </p>
            <ul className="font-nanum text-sm text-gray-600 lg:text-lg">
              <li className="my-2">
                1. 모듈화와 재사용성: 재사용성이 높은 컴포넌트를 모듈화하여
                개발하고, 효율적으로 유지보수할 수 있도록 합니다.
              </li>
              <li className="my-2">
                2. 적극적인 협업: 팀원과 소통하며 문제를 해결하고, 코드 리뷰를
                통해 서로의 코드를 발전시킵니다.
              </li>
              <li className="my-2">
                3. 끊임없는 성장: 새로운 기술과 트렌드를 지속적으로 학습하고,
                개인 프로젝트를 통해 자기 계발에 노력합니다.
              </li>
              <li className="my-2">
                4. 문제 해결 능력: 빠르게 문제를 파악하고 해결하기 위해 디버깅과
                문제해결 능력을 향상시키고, 에러를 예방하도록 노력합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
