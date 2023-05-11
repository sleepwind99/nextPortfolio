"use client";
import React, { ReactNode } from "react";
import { MdImageNotSupported } from "react-icons/md";
import type { IconType } from "react-icons";

type CardProps = {
  title: string;
  rating: number;
  content: string;
  className?: string;
  icons?: ReactNode;
};

const Card = ({
  title,
  rating,
  content,
  className = "",
  icons = <MdImageNotSupported />,
}: CardProps) => {
  return (
    <div className="flex max-w-[200px] border-gray-300 border-[1px] shadow-lg justify-between rounded-md">
      <div className="">{title}</div>
      <div className="">{icons}</div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Card;
