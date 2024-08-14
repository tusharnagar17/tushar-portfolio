import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion, Variants } from 'framer-motion';
import { FaHardHat } from 'react-icons/fa';

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technology = () => {
  const temp = 3;
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap  items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(temp)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(temp)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2"
        >
          <TbBrandNextjs className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(temp)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2"
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(temp)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2"
        >
          <DiRedis className="text-5xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(temp)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2"
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(temp)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2"
        >
          <BiLogoPostgresql className="text-5xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(temp)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2"
        >
          <FaHardHat className="text-5xl text-yellow-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technology;
