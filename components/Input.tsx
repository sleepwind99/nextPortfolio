"use client";
import React from "react";

type FormProps = {
  placeholder: string;
  className?: string;
  inputClass?: string;
  value: string;
  type: string;
  onChange?: (event: any) => void;
};

const Input = ({
  placeholder,
  className = "",
  inputClass = "",
  value,
  type,
  onChange,
}: FormProps) => {
  return (
    <div className={`w-full ${className}`}>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            maxHeight: "250px",
          }}
          rows={5}
          className={`py-4 px-8 border rounded-xl border-gray-300 text-xl w-full focus:border-point focus:border-[2px] focus:ring-point focus:outline-none ${inputClass}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`py-4 px-8 rounded-full border border-gray-300 text-xl w-full focus:border-point focus:border-[2px] focus:ring-point focus:outline-none ${inputClass}`}
        />
      )}
    </div>
  );
};

export default Input;
