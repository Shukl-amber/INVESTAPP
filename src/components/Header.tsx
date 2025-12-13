"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const Header = () => {
  type NavItem = { text: string; href: string };
  const navItems: NavItem[] = [
    { text: "Perks", href: "/#perks" },
    { text: "How it Works", href: "/#how-it-works" },
    { text: "Milestones", href: "/#milestones" },
    { text: "Testimonials", href: "/#testimonials" },
    { text: "Gallery", href: "/#gallery" },
  ];

  // Import user data directly
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const userData = require("../lib/userData.ts").default;
  const [isLoggedIn] = useState(true);
  const [user] = useState<{ name: string; imageUrl: string } | null>({
    name: userData.name,
    imageUrl: userData.imageUrl,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Determine if nav item is active based on hash
  const isActive = (href: string) => {
    if (typeof window === "undefined") return false;
    return window.location.hash === href;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    setIsMenuOpen(false);
    // Smooth scroll for hash links on home page
    if (href.startsWith("#")) {
      const isHomePage = window.location.pathname === "/";
      if (isHomePage) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          (element as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        // Update hash in URL
        window.history.replaceState(null, "", href);
      }
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 top-0 font-sans px-4 md:px-6 lg:px-16 xl:px-30">
      <div className="mx-auto">
        <div className="flex flex-row justify-end items-center py-3 md:py-4">
          {/* Logo or Brand (optional) */}
          <div className="shrink-0">
            {/* <div className="font-bold text-lg text-gray-900">InvestApp</div> */}
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-8">
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-base transition-colors duration-200 text-[#171717]  ${
                    isActive(item.href)
                      ? "font-semibold"
                      : "font-medium hover:font-semibold"
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>

            {/* Desktop User/Profile or Login Button */}
            <div className="hidden md:flex items-center">
              {isLoggedIn && user ? (
                <button
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f7ff] hover:bg-[#e6eaff] transition-colors"
                  onClick={() => router.push("/profile")}
                >
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="font-medium text-base text-[#171717]">
                    {user.name}
                  </span>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="#171717"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <Button label="Log in" />
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            {!isMenuOpen && isLoggedIn && user && (
              <button
                className="flex items-center px-4 py-1 rounded-full bg-[#f5f7ff] min-w-[64px] focus:outline-none"
                onClick={() => router.push('/profile')}
                type="button"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3887FF] overflow-hidden">
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </span>
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="ml-1">
                  <path
                    d="M9 10l3 3 3-3"
                    stroke="#171717"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
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
        <div className="fixed inset-0 bg-white z-40 flex flex-col md:hidden overflow-y-auto">
          <div className="px-4 sm:px-6 pt-6 pb-2 flex flex-col gap-6">
            {isLoggedIn && user ? (
              <button
                className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#f5f7ff] w-full"
                style={{ alignSelf: 'flex-start' }}
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/profile");
                }}
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3887FF] overflow-hidden">
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </span>
                <span className="font-bold text-xl text-[#171717]" style={{lineHeight:1}}>
                  {user.name.split(' ')[0]}
                </span>
              </button>
            ) : (
              <Button label="Log in" />
            )}
          </div>
          <nav className="flex flex-col gap-8 px-4 sm:px-6 py-4 font-sans">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base transition-colors duration-200 text-[#171717]  ${
                  isActive(item.href)
                    ? "font-semibold"
                    : "font-medium hover:font-semibold"
                }`}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
