"use client"
import { useState, useRef, useCallback } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleOutsideClick = useCallback(
    (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    },
    [menuRef]
  );

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-primary text-white font-poppins shadow-black shadow-sm sticky top-0 z-20">
        <div className="container max-w-[1700px] px-6 py-2">
          <div className="flex items-center justify-between">
            <img src="/logo.webp" alt="logo" className="w-[150px] h-[74px]" />
            <div className="hidden md:flex space-x-6">
              <button className="text-h4 font-custom hover:text-secondary transition-colors duration-300" onClick={() => scrollToSection("hem")}>Hem</button>
              <button className="text-h4 font-custom hover:text-secondary transition-colors duration-300" onClick={() => scrollToSection("var-service")}>Vår service</button>
              <button className="text-h4 font-custom hover:text-secondary transition-colors duration-300" onClick={() => scrollToSection("sagt-om-oss")}>Sagt om oss</button>
              <button className="text-h4 font-custom hover:text-secondary transition-colors duration-300" onClick={() => scrollToSection("kontakta-oss")}>Kontakta oss</button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle Mobile Menu"
                className="focus:outline-none"
              >
                {isMobileMenuOpen ? null : <Bars3Icon className="h-7 w-7" />}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div
              ref={menuRef}
              className={`md:hidden fixed top-0 left-0 w-full h-screen bg-primary z-50 ${
                isMobileMenuOpen ? 'animate-slide-in' : 'animate-slide-out'
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-10 font-custom relative">
                <button
                  onClick={toggleMobileMenu}
                  aria-label="Close Mobile Menu"
                  className="absolute top-8 right-11 focus:outline-none hover:text-gray-600 transition-colors duration-300"
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
                <button className="text-h2 font-custom" onClick={() => scrollToSection("hem")}>Hem</button>
                <button className="text-h2 font-custom" onClick={() => scrollToSection("var-service")}>Vår service</button>
                <button className="text-h2 font-custom" onClick={() => scrollToSection("sagt-om-oss")}>Sagt om oss</button>
                <button className="text-h2 font-custom" onClick={() => scrollToSection("kontakta-oss")}>Kontakta oss</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Menu;
