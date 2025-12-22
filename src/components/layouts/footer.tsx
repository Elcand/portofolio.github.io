function Footer() {
  return (
    <footer className="w-full bg-gray-200">
      <div className="mx-auto max-w-[1356px] px-6 py-10 md:px-10">
        
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Identity */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-black">
              Mikhael C. Raharja
            </h2>
            <p className="text-sm text-gray-600">
              Full-Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            <a
              href="#projects"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gray-300" />

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} — Built with React & Tailwind
        </div>
      </div>
    </footer>
  )
}

export default Footer
