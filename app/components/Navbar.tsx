"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-black to-black text-white p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Owais Tech Expert</h1>

        {/* Hamburger menu button for mobile */}
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">My Projects</Link>
        </div>
      </div>

       {/* Mobile Menu  */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/Contact" className="block py-2">Contact</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/projects" className="block py-2">My Projects</Link>
        </div>
      )}
    </nav>
  );
}
