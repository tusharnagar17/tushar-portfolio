'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import { projects } from '@/data';
import { PinContainer } from './ui/Pin';
import { motion } from 'framer-motion';
import { CardSpotlight } from './ui/card-spotlight';
import {
  ProjectListProps,
  reactNativeList,
  web2List,
  web3List,
} from './../constants/projectList';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        <span className="text-purple">Recent projects</span>
      </h1>
      <br />
      <br />
      {/* Web3 Project */}
      <div className="max-w-4xl  mx-auto text-5xl text-sky-500 font-semibold py-10 md:py-0">
        Web3 Projects:
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {web3List.map((item: ProjectListProps, index) => (
          <ProjectDiv item={item} key={index} />
        ))}
      </div>

      <br />
      <br />
      {/* Mern Stack Projects */}
      <div className="max-w-4xl mx-auto text-5xl text-sky-500 font-semibold py-10 md:py-0">
        Mern Stack Projects:
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {web2List.map((item: ProjectListProps, index) => (
          <ProjectDiv item={item} key={index} />
        ))}
      </div>

      <br />
      <br />
      <div className="max-w-4xl mx-auto  text-5xl text-red-400 font-semibold py-10 md:py-0">
        Mobile Apps:
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {reactNativeList.map((item: ProjectListProps, index) => (
          <ProjectDiv item={item} key={index} />
        ))}
      </div>
      {/* Mobile Applications */}
    </div>
  );
};

const ProjectDiv = ({ item }: {item: ProjectListProps}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center m-6 rounded-xl sm:w-96 w-[80vw]"
    >
      <div className="p-8 rounded-3xl bg-[#080826]">
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: '#13162D' }}
          >
            <Image src="/bg.png" alt="bgimg" width={100} height={100} />
          </div>
          <Image
            src={item.imageLink}
            alt="cover"
            fill
            className="object-cover z-10 absolute bottom-0"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {item.title}
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: '#BEC1DD',
            margin: '1vh 0',
          }}
        >
          {item.description}
        </p>

        {/* <div>
          Tech Stack:
          <span className="flex flex-wrap">
            {item.techStack.map((item, index) => (
              <div
                key={index}
                className="px-2 py-1 mx-1 my-1 bg-gray-900 rounded-xl"
              >
                {item}
              </div>
            ))}
          </span>
        </div> */}

        <div className="flex items-center justify-between mt-7 mb-3">
          {/* Icons List */}
          {/* <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div> */}
          <div className="flex justify-center items-center">
            <a
              href={item.githubLink}
              className="flex lg:text-xl md:text-xs text-sm text-purple"
            >
              Check Github
            </a>
            <FaGithub className="ms-3" size={25} color="#CBACF9" />
          </div>

          <div className="flex justify-center items-center">
            <a
              href={item.liveLink}
              className="flex lg:text-xl md:text-xs text-sm text-purple"
            >
              Check Live Site
            </a>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </div>
      {/* </PinContainer> */}
    </motion.div>
  );
};

export default RecentProjects;
