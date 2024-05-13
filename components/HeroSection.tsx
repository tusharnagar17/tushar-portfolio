import Image from 'next/image'
import data from '@/constant/data'
import Link from 'next/link'
import SocialIcon from './SocialIcon'

export default function HeroSection() {
  return (
    <div className="max-w-5xl mx-auto my-5 md:my-20">
      <div className="md:flex md:flex-row-reverse justify-around">
        {/* image */}
        <div className="">
          <Image
            src="/profile.jpeg"
            className="hero-img  mx-auto md:m-4 w-4/5 md:w-full object-cover"
            alt=""
            width={200}
            height={100}
          />
        </div>
        {/* detail section */}
        <div>
          <div className="mx-5">
            <div className="text-7xl text-gray-800 text-wrap font-bold my-4">
              {data.job_title}👋🏼
            </div>

            <div className="text-2xl text-gray-700 text-wrap my-14 pr-15">
              {data.description}📍
            </div>
          </div>
          <div className="mx-6">
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
