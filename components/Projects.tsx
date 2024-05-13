import ProjectCard from './ProjectCard'
import DataTypes from '@/types/interface'
import projectList from '@/constant/projectList'

export default function Projects() {
  return (
    <div id="projects" className="max-w-5xl mx-auto p-10 my-1">
      <div className="">
        <div className="text-6xl text-sky-500 font-bold  antialiased">
          Project
        </div>
        <p className="mt-2 font-semibold text-gray-800 antialiased underline">
          Each project is a unique piece of development 🚀
        </p>
      </div>
      {projectList &&
        projectList.map((item, idx) => {
          return <ProjectCard data={item} dir={idx} />
        })}
    </div>
  )
}
