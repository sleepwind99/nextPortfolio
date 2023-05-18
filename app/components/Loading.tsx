"use client";
import React from "react";
import { motion } from "framer-motion";
type LoadingProps = {
  on: boolean;
  className?: string;
};

const Loading = ({ on, className = "" }: LoadingProps) => {
  return (
    <motion.div
      className={`fixed left-0 top-0 w-screen h-screen z-40 bg-black opacity-60 ${
        on ? "hidden" : "block"
      } ${className}`}
      whileInView={{ opacity: 100 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`fixed left-[49%] top-[49%] w-[2%] h-[@%] z-50 ${
          on ? "hidden" : "inline-block"
        } border-[4px] border-l-light rounded-full animate-spin ${className}`}
      ></motion.div>
    </motion.div>
  );
};

export default Loading;
