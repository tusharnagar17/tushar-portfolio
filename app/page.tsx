import AboutSection from '@/components/AboutSection'
import ContactMe from '@/components/ContactMe'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  // THINGS TO DO
  // 1. PROJECT PAGE
  // 2. Contact Page
  // 3. add all icons
  // 4. Check responsiveness of page
  // 5. Upload to vercel.

  return (
    <main>
      <HeroSection />
      <AboutSection />

      <Projects />
      <ContactMe />
    </main>
  )
}
