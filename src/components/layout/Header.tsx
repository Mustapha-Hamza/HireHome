"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import SearchBar from "../ui/SearchBar";
import { homeTypes } from "../../data/mockData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node)
      ) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown and menu when route changes
  useEffect(() => {
    setIsExploreOpen(false);
    setIsMenuOpen(false);
  }, [location]);

  // Smooth scroll to contact section
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle home navigation with scroll
  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // ✅ FIXED: Navigate to a home type and close menus properly
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsExploreOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={handleHomeClick}>
            <div className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M20 3L36 15V35H26V25H14V35H4V15L20 3Z"
                  fill="#1F2937"
                />
                <path
                  d="M20 7L32 16V31H28V21H12V31H8V16L20 7Z"
                  fill="#C99A4B"
                />
                <path
                  d="M20 11L28 17V27H24V21H16V27H12V17L20 11Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M20 3L36 15V35H26V25H14V35H4V15L20 3Z"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-medium text-dark-900">
                HireHome
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-dark-800 hover:text-gold-500 transition-colors"
            >
              Home
            </Link>

            {/* Explore Dropdown */}
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center text-dark-800 hover:text-gold-500 transition-colors focus:outline-none"
              >
                Explore
                <FaChevronDown
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    isExploreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isExploreOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {homeTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleNavigate(`/home-types/${type.id}`)}
                        className="block w-full text-left px-4 py-2 text-sm text-dark-800 hover:bg-gold-50 hover:text-gold-500 transition-colors"
                        role="menuitem"
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-dark-800 hover:text-gold-500 transition-colors cursor-pointer"
            >
              Contact
            </a>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-dark-800 hover:text-gold-500 transition-colors"
            >
              <FaSearch />
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 mr-2 text-dark-800"
            >
              <FaSearch />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-dark-800"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-2 text-dark-800 hover:text-gold-500"
                  onClick={handleHomeClick}
                >
                  Home
                </Link>
              </li>

              <li className="py-2">
                <button
                  onClick={() => setIsExploreOpen(!isExploreOpen)}
                  className="flex items-center w-full text-left text-dark-800 hover:text-gold-500 focus:outline-none"
                >
                  Explore
                  <FaChevronDown
                    className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                      isExploreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExploreOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    {homeTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleNavigate(`/home-types/${type.id}`)}
                        className="block w-full text-left px-4 py-2 text-sm text-dark-800 hover:bg-gold-50 hover:text-gold-500 transition-colors"
                        role="menuitem"
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="block py-2 text-dark-800 hover:text-gold-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pt-4 pb-2 border-t mt-4">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
