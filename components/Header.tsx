import DarkMode from './DarkMode'

export default function Header() {
  return (
    <>
      <div className="flex justify-around p-5 shadow-lg rounded-lg">
        <div className="hover:text-red-500 text-2xl font-bold">
          <a href="/">Tushar Nagar</a>
        </div>
        <div className="hidden md:flex justify-around gap-10">
          <div className="hover:text-sky-500 font-semibold">
            <a href="/">Home</a>
          </div>
          <div className="hover:text-sky-500 font-semibold">
            <a href="#about">About</a>
          </div>
          <div className="hover:text-sky-500 font-semibold">
            <a href="#projects">Projects</a>
          </div>
          <div className="hover:text-sky-500 font-semibold">
            <a href="#contact">Contact</a>
          </div>
          {/* <DarkMode /> */}
        </div>

        <div className="relative group z-10 md:hidden">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Menu
          </a>
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
            <a
              href="/"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              Contact
            </a>
          </div>
          {/* <DarkMode /> */}
        </div>
      </div>
    </>
  )
}
