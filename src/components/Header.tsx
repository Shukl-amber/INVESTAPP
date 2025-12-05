"use client";

import React, { useState } from 'react';
import Button from './Button';

const Header = () => {
  type NavItem = { text: string; href: string };
  const navItems: NavItem[] = [
    { text: 'Perks', href: '#perks' },
    { text: 'How it Works', href: '#how-it-works' },
    { text: 'Milestones', href: '#milestones' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Gallery', href: '#gallery' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine if nav item is active based on hash
  const isActive = (href: string) => {
    if (typeof window === 'undefined') return false;
    return window.location.hash === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll for hash links on home page
    if (href.startsWith('#')) {
      const isHomePage = window.location.pathname === '/';
      if (isHomePage) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          (element as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Update hash in URL
        window.history.replaceState(null, '', href);
      }
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 top-0 font-sans px-6 lg:px-30">
      <div className="mx-auto">
        <div className="flex flex-row justify-end items-center py-4">
          {/* Logo or Brand (optional) */}
          <div className="shrink-0">
            {/* <div className="font-bold text-lg text-gray-900">InvestApp</div> */}
          </div>

          {/* Desktop Navigation */}
          <div className='flex flex-row items-center gap-8'>
            <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                <a
                    key={item.text}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base transition-colors duration-200 text-[#171717]  ${
                    isActive(item.href)
                        ? 'font-semibold'
                        : 'font-medium hover:font-semibold'
                    }`}
                >
                    {item.text}
                </a>
                ))}
            </nav>

            {/* Desktop Login Button */}
            <div className="hidden lg:flex items-center">
                <Button label="Log in" />
            </div>
          </div>
          

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className="text-gray-900 focus:outline-none hover:text-gray-600 transition-colors"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col lg:hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex justify-end items-center">
            <button
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-8 px-4 sm:px-6 py-4 font-sans">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base transition-colors duration-200 text-[#171717]  ${
                    isActive(item.href)
                        ? 'font-semibold'
                        : 'font-medium hover:font-semibold'
                }`}
              >
                {item.text}
              </a>
            ))}
          </nav>
          <div className="px-4 sm:px-6 py-4 border-t border-gray-100">
            <Button label="Log in" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
