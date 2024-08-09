"use client";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/home">Student Union Election</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        <ul
          className={`md:flex space-x-8 hidden ${isOpen ? "block" : "hidden"}`}
        >
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/candidates" className="hover:text-gray-300">
              Candidates
            </Link>
          </li>
          <li>
            <Link href="/registers" className="hover:text-gray-300">
              Registers
            </Link>
          </li>
          <li>
            <Link href="/voterlist" className="hover:text-gray-300">
              Voters List
            </Link>
          </li>
          <li>
            <Link href="/results" className="hover:text-gray-300">
              Results
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
             About Us
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 space-y-4 p-4">
          <li>
            <Link href="/" className="block hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/candidates" className="block hover:text-gray-300">
              Candidates
            </Link>
          </li>
          <li>
            <Link href="registers" className="hover:text-gray-300">
              Registers
            </Link>
          </li>
          <li>
            <Link href="/voters" className="hover:text-gray-300">
              Voters List
            </Link>
          </li>
          <li>
            <Link href="/results" className="block hover:text-gray-300">
              Results
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:text-gray-300" >
             About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
