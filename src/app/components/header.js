'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">OrderByte</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/menu" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/orders" className="hover:text-blue-600">
            Order
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-blue-600">
            {isMobileMenuOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col items-center space-y-4 py-4 font-medium">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/menu" className="hover:text-blue-600">
              Products
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>

        {/* Cart and Login */}
        <div className="flex items-center gap-4">
          <a href="#cart" className="relative">
            🛒
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">2</span>
          </a>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
