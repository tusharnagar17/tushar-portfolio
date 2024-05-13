import ProjectDataTypes from '@/types/interface'
import { useState } from 'react'
import Image from 'next/image'

export default function ProjectCard({
  data,
  dir,
}: {
  data: ProjectDataTypes
  dir: number
}) {
  function flexDir(dir: number) {
    if (dir / 2 === 0) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      {/* Flex here */}
      <div
        className={`p-10 mt-10  flex ${
          flexDir(dir) ? '' : 'md:flex-row-reverse'
        }  justify-center bg-gray-50 rounded-2xl`}
      >
        {/* Box-1 */}
        <div className="w-1/2 p-5">
          <img
            src={`${data.imageLink}`}
            className="rounded-lg bg-contain"
            alt=""
            height={300}
            width={300}
          />
        </div>
        {/* Box-2 */}
        <div className="w-1/2  rounded-2xl p-10 ">
          <div className="text-center font-bold text-xl mt-2">{data.title}</div>
          <div className="text-wrap text-xs px-16 my-2">{data.description}</div>
          <div className="flex gap-2 justify-center">
            {data.techStack &&
              data.techStack.map((item: string) => {
                return (
                  <div className="text-sm rounded-full border-gray-100 bg-gray-100 p-2">
                    {item.toUpperCase()}
                  </div>
                )
              })}
          </div>
          {/* button */}
          <div className="md:flex justify-center">
            <div className="my-2 pt-2 mx-2 px-2 py-2 rounded-full hover:text-sky-600  text-sm">
              <a href={data.githubLink}>
                <Image
                  src="/github-mark.svg"
                  alt="live-link"
                  height={30}
                  width={30}
                />
                <p className="text-center mt-2 font-bold">Code</p>
              </a>
            </div>
            <div className="my-2 mx-2 px-4 py-2 rounded-full hover:text-red-600  text-sm">
              <a href={data.liveLink}>
                <Image
                  src="/resize.png"
                  alt="live-link"
                  height={30}
                  width={30}
                />
                <p className="text-center mt-2 font-bold">Live</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
