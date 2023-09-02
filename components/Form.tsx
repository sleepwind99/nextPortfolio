"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import Loading from "./Loading";

const Form = () => {
  const [datas, setDatas] = useState(["", "", "", ""] as string[]);
  const [isLoading, setIsLoading] = useState(false);
  const handleChnage = (event: any, idx: number) => {
    const arr = [...datas];
    arr[idx] = event.target.value;
    setDatas(arr);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("./api/sendmail", {
        file: datas,
      });
      setDatas(["", "", "", ""]);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={(event: any) => handleSubmit(event)}>
        {isLoading && <Loading on={isLoading} />}
        <div className="grid grid-cols-2 mb-3 w-full md:gap-3">
          <Input
            value={datas[0]}
            type="text"
            placeholder="이름"
            className="font-nanum m-2 col-span-2 md:col-span-1"
            onChange={(event: any) => handleChnage(event, 0)}
          />
          <Input
            value={datas[1]}
            type="text"
            placeholder="이메일"
            className="font-nanum m-2 col-span-2 md:col-span-1"
            onChange={(event: any) => handleChnage(event, 1)}
          />
        </div>
        <Input
          value={datas[2]}
          type="text"
          placeholder="제목"
          className="font-nanum m-2 mb-3"
          onChange={(event: any) => handleChnage(event, 2)}
        />
        <Input
          value={datas[3]}
          type="textarea"
          placeholder="내용"
          className="font-nanum m-2 mb-3"
          inputClass="rouned-md"
          onChange={(event: any) => handleChnage(event, 3)}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            title="메일 보내기"
            className="text-xl px-8 py-4 !rounded-full !bg-light text-point font-semibold border-point hover:text-light hover:!bg-point"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
