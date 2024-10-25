'use client'
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="h-14 flex items-center justify-between px-6 md:px-28">
        <div className="text-white font-bold text-lg">ALBIN JOHN</div>

        <div className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </div>

        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-14 left-0 w-full bg-gray-500 md:bg-transparent md:flex md:relative md:top-0 md:w-auto md:gap-14 text-white font-semibold`}
        >
          <li className="py-2 px-4 md:py-0 md:px-0 hover:text-gray-300 hover:underline">
            Home
          </li>
          <li className="py-2 px-4 md:py-0 md:px-0 hover:text-gray-300 hover:underline">
            About
          </li>
          <li className="py-2 px-4 md:py-0 md:px-0 hover:text-gray-300 hover:underline">
            Projects
          </li>
          <li className="py-2 px-4 md:py-0 md:px-0 hover:text-gray-300 hover:underline">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
