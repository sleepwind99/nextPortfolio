import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};
const Button = ({
  title,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) => {
  return (
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
