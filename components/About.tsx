import { userData } from '@/data';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import animationData from '../data/confetti.json';

const About = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleCopy = () => {
    const text = userData.email;
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div className="py-6" id="about">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center my-10 text-4xl font-semibold text-white"
      >
        About <span className="text-sky-500">Me</span>
      </motion.div>
      <div className="md:flex flex-row gap-4 justify-center max-w-6xl mx-auto items-center">
        {/* About Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full flex items-center justify-center my-8 md:my-0 lg:w-1/2 lg:p-8"
        >
          <div>
            <div className="relative w-72 h-72">
              <Image
                src="/profile.jpeg"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
                alt="Profile-image"
              />
            </div>

            {/* magic Button */}
            <div className="flex justify-center">
              <div className="mt-5 relative">
                {/* button border magic from tailwind css buttons  */}
                {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                {/* add handleCopy() for the copy the text */}
                <div
                  className={`absolute -bottom-5 right-0 ${
                    copied ? 'block' : 'block'
                  }`}
                >
                  {/* <img src="/confetti.gif" alt="confetti" /> */}
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? 'Email is Copied!' : 'Copy my email address'}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* About Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <div className="leading-8 text-md font-mono">{userData.about}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
