import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Navigation items based on your original Header
const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Deteksi Benda', href: '/deteksi-benda' },
  { name: 'Quiz', href: '/quiz' },
  { name: 'Artikel', href: '/artikel' },
  { name: 'Tentang', href: '/tentang' },
];

// Approximate height of the header when not scrolled (py-5 + logo height)
// py-5 is 1.25rem top + 1.25rem bottom = 2.5rem. Logo h-8 is 2rem. Total = 4.5rem = 72px
const HEADER_UNSCROLLED_HEIGHT_PX = 72;

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Effect for handling scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close menu on scroll if it's open
      // if (isOpen && window.scrollY > 50) { 
      //   setIsOpen(false);
      // }
      // The target example closes menu on any scroll if open, let's keep that.
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]); // Dependency on isOpen to re-evaluate if menu should close

  // Effect for preventing body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-50 py-3 shadow-lg backdrop-blur-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between relative px-6"> {/* Added px-6 for consistency */}
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => isOpen && setIsOpen(false)}>
            <img
              src="/nihonme/img/icon/nihonme-icon.svg" // Ensure this path is correct
              alt="NihonMe Logo"
              className="h-8 w-auto"
            />
            {/* Optional: Add text logo part if desired, e.g., <span className="font-bold text-xl text-primary-600">NihonMe</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end items-center">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`font-medium text-sm lg:text-base transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-600 hover:after:w-full after:transition-all after:duration-300 ${
                      isActive(item.href)
                        ? 'text-primary-600 after:w-full' // Active link has underline
                        : 'text-gray-500 hover:text-primary-600' // Inactive link is gray
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-500 p-2 z-50 relative" // Changed text color for visibility
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {/* Conditional rendering for Menu/X icon with transition */}
            <Menu size={28} className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 absolute' : 'opacity-100'}`} />
            <X size={28} className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 absolute'}`} />
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-0 bg-surface-50 z-30 h-screen transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: `${HEADER_UNSCROLLED_HEIGHT_PX}px` }} // Add padding to push content below the fixed header space
      >
         {/* Optional: Explicit Close Button inside mobile menu, if desired on top of the toggle and overlay click */}
         {/* <div className="flex justify-end p-4">
            <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-surface-700 hover:text-primary-600"
            >
                <X size={28} />
            </button>
        </div> */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-8 pb-16"> {/* pb-16 to avoid overlap with bottom elements if any */}
            {navItems.map((item) => (
            <Link
                key={item.name}
                to={item.href}
                className={`text-xl font-medium transition-colors ${ // Increased font size for mobile
                isActive(item.href) ? 'text-primary-600' : 'text-surface-700 hover:text-primary-600'
                }`}
                onClick={() => setIsOpen(false)}
            >
                {item.name}
            </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Header;