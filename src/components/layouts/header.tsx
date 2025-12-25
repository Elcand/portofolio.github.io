import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="sticky w-full">
      <div className="mx-auto flex h-[75px] max-w-[1356px] items-center justify-between px-6 md:px-10">
        
        {/* Logo */}
        <div className="h-[53px] w-[77px] bg-[#FF9B9B] rounded-md" />

        {/* Navigation */}
        <nav className="flex gap-6 md:gap-10">
          <Link
            to="#home"
            className="text-lg font-bold text-black transition-colors hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            to="#projects"
            className="text-lg font-bold text-black transition-colors hover:text-gray-600"
          >
            Project
          </Link>

          <Link
            to="#contact"
            className="text-lg font-bold text-black transition-colors hover:text-gray-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
