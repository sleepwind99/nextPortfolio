import Image from "next/image";
import React from "react";
import profile from "@/public/images/profile.jpg";
import Button from "@/components/Button";

const Main = () => {
  return (
    <div
      className="w-full min-h-screen text-center bg-point flex items-center"
      id="Main"
    >
      <div className=" max-w-[1600px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex justify-center items-center flex-wrap md:justify-between">
          <div className="flex-grow mx-10 justify-center md:flex-grow-0 md:mx-auto">
            <Image
              src={profile}
              alt="profile"
              className="rounded-full p-10 sm:p-[100px] md:w-[230px] md:h-[230px] md:p-0 md:mx-5 lg:w-[300px] lg:h-[300px] lg:mx-10 xl:w-[350px] xl:h-[350px]"
            />
          </div>
          <div className="mx-0 flex-grow md:mx-2 md:flex-grow-0 md:w-[55%] xl:w-[60%]">
            <h1 className="py-3 text-center text-sm xl:text-4xl lg:text-2xl md:text-xl sm:text-xl font-nanum md:text-left">
              Front-End Developer 김정주의
            </h1>
            <h1 className="py-3 text-center text-sm xl:text-4xl lg:text-2xl md:text-xl sm:text-xl font-nanum md:text-left">
              Portfolio page에 방문하신 것을 환영합니다!
            </h1>
            <div className="w-full px-12 md:pl-0">
              <p className="text-center text-xs text-gray-600 font-nanum md:text-left md:text-sm">
                저는 뛰어난 디지털 경험을 구축/설계하는 front-end
                developer입니다. 현재는 back-end 기술을 배우면서, 탁월한
                반응성의 front-end web application 개발에 집중하고 있습니다.
              </p>
            </div>
            <div className="flex items-center">
              <Button
                title="Contact"
                className="my-3 font-mont mx-auto md:ml-1"
                to="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
