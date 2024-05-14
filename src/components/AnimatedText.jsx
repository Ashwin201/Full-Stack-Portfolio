"use client";
import React from "react";
import { motion } from "framer-motion";
const AnimatedText = (props) => {
  return (
    <div>
      <motion.h1
        className="text-center dark:text-gray-200 text-gray-900 font-bold text-2xl min-[320px]:text-4xl sm:text-[55px] lg:text-[60px]"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {props.text}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
