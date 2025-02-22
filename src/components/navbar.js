'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-black">YASH <span className="text-yellow-500">Tour & Travels              </span></span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks dropdown={dropdown} toggleDropdown={toggleDropdown} />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-yellow-500">
          <div className="flex flex-col space-y-4 p-4">
            <NavLinks dropdown={dropdown} toggleDropdown={toggleDropdown} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ dropdown, toggleDropdown }) => {
  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'About', href: '/' },
    { name: 'CAR', href: '#', submenu: ['Sedan', 'SUV', 'Luxury'] },
    { name: 'VAN', href: '#', submenu: ['Mini Van', 'Passenger Van'] },
    { name: 'Tour Packages', href: '#', submenu: ['Mini Bus', 'Luxury Bus'] },
    // { name: 'CITYWISE', href: '/citywise' },
    // { name: 'AIRPORT TRANSFER', href: '/airport-transfer' },
    // { name: 'SELF DRIVE CARS', href: '/self-drive-cars' },
    // { name: 'PAY NOW', href: '/pay-now' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  return (
    <>
      {menuItems.map((item, index) => (
        <div key={index} className="relative">
          <Link 
            href={item.href}
            className="text-black hover:text-yellow-500 font-medium flex items-center"
            onClick={() => item.submenu && toggleDropdown(item.name)}
          >
            {item.name} {item.submenu && <ChevronDown size={16} className="ml-1" />}
          </Link>
          {item.submenu && dropdown === item.name && (
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md border border-yellow-500 rounded-md">
              {item.submenu.map((subItem, subIndex) => (
                <Link key={subIndex} href="#" className="block px-4 py-2 text-black hover:bg-yellow-100">
                  {subItem}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Navbar;
