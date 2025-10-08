// Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "#" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "App Development", path: "/services/app-development" },
    { name: "Video Development", path: "/services/video-development" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-[25px]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo with text below */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/krilogo.png"
            alt="Logo"
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "h-14" : "h-20"
            }`} // increased size
          />
          {/* Company name */}
          <div className="hidden md:block mt-2 text-left">
            <p
              className={`font-bold tracking-wide ${
                isScrolled
                  ? "text-green-600 text-xl"
                  : "text-blue-800 text-2xl"
              }`}
            >
              KRIWORLD ITECH PRIVATE LIMITED
            </p>
            <p
              className={`text-sm ${
                isScrolled ? "text-gray-500" : "text-gray-700"
              }`}
            >
              SINCE 2016
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 font-medium relative">
          {menuItems.map((item) =>
            item.name === "Services" ? (
              <div
                key={item.name}
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div
                  className={`flex items-center gap-1 ${
                    isScrolled
                      ? "text-lg text-gray-800 hover:text-green-600"
                      : "text-lg text-black hover:text-green-300"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-5 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600 text-lg"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-lg text-gray-800 hover:text-green-600"
                    : "text-lg text-black hover:text-green-300"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className={`hidden md:inline-block rounded-full font-medium transition-all duration-300 ${
            isScrolled
              ? "bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base"
              : "bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base"
          }`}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-50">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item) =>
              item.name === "Services" ? (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full text-gray-800 font-medium"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className="block text-gray-700 hover:text-green-600 text-sm"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-800 hover:text-green-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
