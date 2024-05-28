'use client'
// import ProjectCard from './ProjectCard'
import DataTypes from '@/types/interface'
import projectList from '@/constant/projectList'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { DiVim } from 'react-icons/di'
import { VscGithub } from 'react-icons/vsc'
import { RxOpenInNewWindow } from 'react-icons/rx'

const categories: string[] = [
  'all',
  'web2',
  'react-native',
  'landing Page',
  // 'web3',
]

export default function Projects() {
  const [selectedId, setSelectedId] = useState<null | string>(null)
  const [category, setCategory] = useState('all')
  const modalRef = useRef(null)

  const newList = projectList.filter((item) => {
    return item.category?.includes(category.toLocaleLowerCase())
  })

  return (
    <div id="projects" className="max-w-6xl mx-auto p-4 md:p-10 my-2">
      <div className="">
        <div className="text-6xl text-sky-500 font-bold  antialiased">
          Project
        </div>
        <p className="mt-2 font-semibold text-gray-800 antialiased underline">
          Each project is a unique piece of development 🚀
        </p>
        <div className="my-4 flex flex-wrap text-lg">
          <div className=" font-semibold">Category:</div>
          <div className="flex flex-wrap gap-1">
            {categories.map((item: string, index: number) => (
              <div
                className={
                  category.toLocaleLowerCase() == item.toLocaleLowerCase()
                    ? `mx-2 border-2 px-4 bg-sky-300 font-semibold rounded-full`
                    : `mx-2 border-2 px-4 font-semibold rounded-full`
                }
                key={index}
                onClick={() => setCategory(item)}
              >
                {item.toLocaleLowerCase()}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="">
          {newList.map((item, index) => (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? `border-2 p-6 my-6 md:flex gap-10 bg-blue-200 md:w-full justify-around rounded-3xl`
                  : `border-2 p-6 my-6 md:flex md:flex-row-reverse gap-10 bg-red-100 md:w-full justify-around rounded-3xl`
              }
            >
              <Image
                src={item.imageLink || '/profile.jpeg'}
                alt="profile"
                width={500}
                height={500}
                className="rounded-xl object-cover h-auto"
              />

              <div className="my-auto text-center">
                <div className="text-lg md:text-2xl  font-bold">
                  {item.title.toUpperCase()}
                </div>
                <div className="text-sm font-semibold my-4">
                  {item.description}
                </div>
                <div className="my-4">
                  <span className="font-bold">Tech Stack :</span>
                  <span className="flex flex-wrap justify-center gap-2 my-2">
                    {item.techStack?.map((itemPtr: string, ind) => (
                      <span
                        className={
                          index % 2 == 0
                            ? ` rounded-full font-semibold px-2 bg-sky-300`
                            : ` rounded-full font-semibold px-2 bg-red-300`
                        }
                        key={`${itemPtr}-${ind}`}
                      >
                        {itemPtr}
                      </span>
                    ))}
                  </span>
                  <div className="flex justify-center gap-2 my-6">
                    <div className="bg-red-400 text-white font-semibold rounded-3xl px-4 py-1">
                      <a
                        href={item.liveLink}
                        className="flex items-center gap-2"
                      >
                        Live <RxOpenInNewWindow size={25} />
                      </a>
                    </div>
                    <div className="bg-gray-800 text-white font-semibold rounded-3xl px-4 py-1">
                      <a
                        href={item.githubLink}
                        className="flex items-center gap-2"
                      >
                        Github <VscGithub size={25} />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
