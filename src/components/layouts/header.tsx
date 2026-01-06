import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll for anchor links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-neutral-900/95 backdrop-blur-sm shadow-lg" : "bg-neutral-900"
      }`}
    >
      <div className="mx-auto flex h-[75px] max-w-[1356px] items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-[53px] w-[77px] bg-gradient-to-r from-[#FF9B9B] to-[#FF6B6B] rounded-md flex items-center justify-center font-bold text-white text-xl shadow-md">
            Logo
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 md:flex md:gap-10">
          <Link
            to="/"
            className="relative text-lg font-bold text-white transition-colors hover:text-gray-300 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9B9B] transition-all group-hover:w-full"></span>
          </Link>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="relative text-lg font-bold text-white transition-colors hover:text-gray-300 group"
          >
            Project
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9B9B] transition-all group-hover:w-full"></span>
          </a>
          <Link
            to="/contact"
            className="relative text-lg font-bold text-white transition-colors hover:text-gray-300 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9B9B] transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6 bg-neutral-900/95 backdrop-blur-sm">
          <Link
            to="/"
            className="py-2 text-lg font-bold text-white transition-colors hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="py-2 text-lg font-bold text-white transition-colors hover:text-gray-300"
          >
            Project
          </a>
          <Link
            to="/contact"
            className="py-2 text-lg font-bold text-white transition-colors hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;