"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { Loader2, LogOut, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, loading, error } = useAuth();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Student Union Election</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        <ul className={`lg:flex space-x-8 hidden`}>
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
          {!user && (
            <li>
              <Link
                href="/signin?type=register"
                className="hover:text-gray-300"
              >
                Register
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link href="/voters" className="hover:text-gray-300">
                Voters List
              </Link>
            </li>
          )}
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

          {user ? (
            <li>
              <Button variant="link" onClick={() => logout()}>
                {!loading ? (
                  <LogOut className="h-8 w-8 rounded full p-2" />
                ) : (
                  <Loader2 className="animate-spin h-8 w-8" />
                )}
              </Button>
            </li>
          ) : null}
        </ul>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden bg-blue-600 space-y-4 p-4">
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
            <Link href="/signin?type=register" className="hover:text-gray-300">
              Register
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
            <Link href="/about" className="block hover:text-gray-300">
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
