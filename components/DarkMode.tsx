export default function DarkMode() {
  return (
    <div className="relative group z-10 ">
      <a href="#" className="text-gray-800 hover:text-blue-500">
        Mode
      </a>
      <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
        <a
          href="#contact"
          className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
        >
          Light
        </a>
        <a
          href="#contact"
          className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
        >
          Dark
        </a>
      </div>
    </div>
  )
}
