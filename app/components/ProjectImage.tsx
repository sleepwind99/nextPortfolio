"use client";
import React, { ReactNode } from "react";
import { IoIosAdd } from "react-icons/io";
import { motion } from "framer-motion";

type ProjectImageProps = {
  className?: string;
  image: ReactNode;
  title: string;
  onClick?: () => void;
};

const ProjectImage = ({
  className = "",
  image,
  title = "",
  onClick,
}: ProjectImageProps) => {
  return (
    <motion.div
      layoutId={title}
      className={`relative block w-full rounded-lg ${className}`}
      whileTap={{
        opacity: 0,
        scale: 1,
      }}
    >
      {image}
      <motion.div
        className="absolute opacity-0 flex top-[35%] left-[35%] bg-point shadow-xl z-[5] w-[30%] h-[30%] rounded-sm items-center justify-center cursor-pointer"
        whileHover={{
          opacity: 1,
          scale: 2.5,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={onClick}
      >
        <IoIosAdd size={40} className="m-auto font-bold text-light" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectImage;
