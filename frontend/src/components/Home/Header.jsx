import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo5.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) && 
          toggleRef.current && 
          !toggleRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-[#f4eede] text-gray-800">
      <header className="flex justify-between h-[100px] items-center p-6 px-6 md:px-18 relative">
        <div className="text-2xl font-semibold pl-6">
          <span className="text-black">snazzy</span>
          <span className="text-gray-600">lawyer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:justify-center gap-4 space-x-6 text-md">
          <a href="#" className="hover:text-yellow-600">
            About us
          </a>
          <a href="#" className="hover:text-yellow-600">
            Chatbot
          </a>
          <a href="#" className="hover:text-yellow-600">
            Document Interpreter
          </a>
          <a href="#" className="hover:text-yellow-600">
            Case Tracker
          </a>
          <a href="#" className="hover:text-yellow-600">
            Contact
          </a>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded text-sm shadow"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded text-sm shadow"
          >
            Make an appointment
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          ref={toggleRef}
          className="md:hidden pr-6 focus:outline-none" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-[100px] left-0 w-full bg-[#f4eede] z-50 shadow-lg transition-all duration-300`}
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            <a href="#" className="hover:text-yellow-600 text-lg" onClick={() => setIsMenuOpen(false)}>
              About us
            </a>
            <a href="#" className="hover:text-yellow-600 text-lg" onClick={() => setIsMenuOpen(false)}>
              Chatbot
            </a>
            <a href="#" className="hover:text-yellow-600 text-lg" onClick={() => setIsMenuOpen(false)}>
              Document Interpreter
            </a>
            <a href="#" className="hover:text-yellow-600 text-lg" onClick={() => setIsMenuOpen(false)}>
              Case Tracker
            </a>
            <a href="#" className="hover:text-yellow-600 text-lg" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded text-lg shadow mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Make an appointment
            </a>
          </div>
        </div>
      </header>

      <main
        className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 pt-8 md:pl-25 lg:pt-20"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <div className="lg:w-1/2 h-full max-w-xl flex items-start justify-center text-center lg:text-left">
          <div className="py-8">
            <p className="text-md text-yellow-700 leading-tight font-semibold mb-2">
              Law firm
            </p>
            <h1 className="text-4xl md:text-7xl font-medium leading-tight md:leading-[67px]">
              Overcome legal obstacles to your{" "}
              <span className="text-yellow-500 italic">success!</span>
            </h1>
            <p className="mt-6 text-gray-600 text-sm mb-6 md:text-base">
              Law without obstacles for your success. Professional support to
              help you overcome legal difficulties and achieve your goals.
            </p>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded text-sm md:text-base shadow"
            >
              Book a free consultation
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 h-full flex justify-center relative mb-10 lg:mb-0">
          <img
            src={logo}
            alt="Lawyer Woman"
            className="relative z-10 w-64 md:w-96 lg:w-96 object-center content-center object-contain"
          />
        </div>
      </main>
    </div>
  );
};

export default Header;
