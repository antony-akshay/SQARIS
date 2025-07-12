import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/image/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Profile', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const navbarStyles = {
    background: `linear-gradient(172.57deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(to left, #000000, #000000)`,
    borderRadius: '50px',
    border: '1px solid #002725',
    boxShadow: 'inset 0px 7px 17px 0px rgba(255, 255, 255, 0.6)',
  };

  return (
    <div className="w-full bg-black py-4 px-4">
      <div 
        className="max-w-[1132px] mx-auto px-14 py-2 flex items-center justify-between relative overflow-hidden"
        style={navbarStyles}
      >
        {/* Logo Section */}
        <div className="flex items-center p-2.5">
          <img 
            src={logo}
            alt="Soaris Logo" 
            className="h-20 w-auto object-cover"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white text-base font-medium leading-6 hover:text-gray-300 transition-colors duration-200"
              style={{ fontFamily: 'Inter-Medium, sans-serif', fontWeight: 500 }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200 z-10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black bg-opacity-95 rounded-3xl border border-gray-800 p-6 z-20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white text-base font-medium leading-6 hover:text-gray-300 transition-colors duration-200 py-2"
                  style={{ fontFamily: 'Inter-Medium, sans-serif', fontWeight: 500 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;