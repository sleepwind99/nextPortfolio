"use client";
import React from "react";
import { scroller } from "react-scroll";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  to?: string;
};
const Button = ({
  title,
  onClick,
  className = "",
  type = "button",
  to,
}: ButtonProps) => {
  const scrollComponent = (id: string) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 50,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };
  return to ? (
    <button
      className={`border-2 border-dark bg-point px-3 py-1 rounded-lg hover:border-light hover:text-light cursor-pointer transition duration-300 ease-in-out ${className}`}
      onClick={() => scrollComponent(to)}
      type={type}
    >
      {title}
    </button>
  ) : (
    <button
      className={`border-2 border-dark bg-point px-3 py-1 rounded-lg hover:border-light hover:text-light cursor-pointer transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
