import data from '@/constant/data'
import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { SiTicktick } from 'react-icons/si'

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto my-2 md:flex gap-4">
      <div className="bg-violet-200 flex justify-center w-1/2 items-center md:px-20 rounded-3xl m-2">
        <div className="">
          <Image
            src="/profile.jpeg"
            className="rounded-full border-2 border-yellow-300"
            width={300}
            height={300}
            alt="Profile"
          />

          <div className="text-center my-4">
            <div className="my-2 text-xl font-bold">{data.name}</div>
            <div className="my-2 text-md text-gray-700">{data.email}</div>
            <div className="mt-6 py-2 w-fit px-10 mx-auto  bg-violet-900 rounded-3xl text-white font-bold">
              Download CV
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-violet-200 rounded-xl p-4 md:p-12 m-2">
          <div className="text-2xl font-bold">About Me</div>
          <div className="text-green-600 font-bold flex items-center gap-4 my-2">
            <SiTicktick />
            Open to work
          </div>
          <div className="text-md">
            As a full-stack developer, I specialize in crafting end-to-end
            solutions that bring ideas to life. From conceptualization to
            deployment, I'm involved in every stage of the development process,
            ensuring that projects are delivered on time and to the highest
            standards.
          </div>
        </div>
        <div className="bg-violet-200 rounded-xl py-4 md:px-12 m-2">
          <div className="text-2xl font-bold">What can i do?</div>

          <div className="">
            <div className="text-green-600 font-bold flex items-center gap-4 my-2">
              <SiTicktick />
              Web:
            </div>
            <div className="text-md">
              I specialize in building dynamic web and mobile apps, seamlessly
              integrating frontend and backend functionalities. With React.js
              for intuitive UIs and Node.js/Express for robust servers, I
              deliver responsive, scalable applications.
            </div>
            <br />
            <div className="text-green-600 font-bold flex items-center gap-4">
              <SiTicktick />
              Mobile:
            </div>
            <div>
              Proficient in React Native, I develop cross-platform mobile apps,
              leveraging Firebase for seamless backend services. Let me
              efficiently bring your project ideas to life, ensuring a seamless
              user experience across all platforms."
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
