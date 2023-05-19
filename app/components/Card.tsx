import React, { ReactNode, useRef } from "react";
import { MdImageNotSupported } from "react-icons/md";
import { motion, useInView } from "framer-motion";

type CardProps = {
  title: string;
  barClass?: string;
  content: string;
  rating?: number;
  className?: string;
  icons?: ReactNode;
  onClick?: () => void;
};

const Card = ({
  title,
  barClass = "bg-blue-500 w-[80%]",
  rating,
  content,
  className = "",
  icons = <MdImageNotSupported size={40} />,
  onClick,
}: CardProps) => {
  const ratingRef = useRef(null);

  return (
    <motion.div
      className={`sm:border-gray-300 sm:border-[1px] sm:shadow-lg block sm:rounded-md items-center bg-light h-auto m-3 font-mont cursor-pointer relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      layoutId={title}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
    >
      <motion.div className="flex sm:justify-between justify-center m-3 items-center">
        <motion.div className="hidden sm:inline-block">{title}</motion.div>
        <motion.div className="">{icons}</motion.div>
      </motion.div>
      <motion.div
        key="rating"
        ref={ratingRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-1 sm:h-2 w-auto bg-gray-300 rounded-full overflow-hidden m-3"
      >
        {useInView(ratingRef) && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${rating}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full ${barClass}`}
          ></motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;
