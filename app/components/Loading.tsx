"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollLock from "react-scrolllock";
type LoadingProps = {
  on: boolean;
  className?: string;
};

const Loading = ({ on, className = "" }: LoadingProps) => {
  return (
    <AnimatePresence>
      {on && (
        <motion.div
          key="loading"
          className={`fixed left-0 top-0 w-screen h-screen z-40 bg-black `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`fixed left-[47%] top-[47%] w-[60px] h-[60px] z-50 border-[4px] border-l-light border-r-gray-600 rounded-full animate-spin ${className}`}
          ></div>
          <ScrollLock />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
