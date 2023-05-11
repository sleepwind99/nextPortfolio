import React from "react";
type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};
const Button = ({ title, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`border-2 border-dark bg-point px-3 py-1 rounded-lg hover:border-light hover:text-light cursor-pointer transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
