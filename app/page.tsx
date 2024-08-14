'use client';

import { navItems } from '@/data';

import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import Approach from '@/components/Approach';
import Experience from '@/components/Experience';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import About from '@/components/About';
import Technology from '@/components/Technology';
import LampDemo from '@/components/ui/lamp';
import { socialMedia } from '@/data';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <About />
        <Technology />
        {/* <Grid /> */}
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        {/* <Approach /> */}
        <Footer />

        {/* fixed social media */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
          {socialMedia.map(info => (
            <a
              href={info.link}
              target="blank"
              key={info.id}
              className="w-14 h-14 my-2 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={30} height={30} />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
