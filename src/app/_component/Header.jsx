'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false); // Ensure menu is closed on initial render
    console.log('Initial log: Menu is closed');
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;

    if (aboutSection) {
      const sectionPosition = aboutSection.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    } else {
      console.error('Error: About section not found');
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.jpg" alt="Talvine Logo" className="h-15 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/partner" className="text-gray-600 hover:text-blue-600">Partner</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <a href="/LoginSignup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login/Signup</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                console.log('Menu state changed:', !isMenuOpen);
              }}
              className="text-gray-600 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50">About</a>
            <a href="/partner" className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50">Partner</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50">Contact</a>
            <a href="/LoginSignup" className="block px-3 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700">Login/Signup</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;