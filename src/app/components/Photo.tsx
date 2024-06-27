/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <motion.div className="w-[298px] h-[298px] xl:w-[800px] xl:h-[600px]  absolute xl:-ml-24">
          <Image
            src="/assets/alternativa.svg"
            priority
            quality={100}
            fill
            alt="Marketisa"
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        ></motion.svg>
      </motion.div>
    </div>
  );
}
