"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-togle";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background md:pt-10 pt-4 pb-3" aria-label="Primary navigation"> 
      <div className="container flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center w-full" role="navigation">
          <div className="flex space-x-8">
            <Link href="/" className="text-sm hover:text-gray-600 hover:underline" aria-label="Go to homepage" title="Homepage">
              Home
            </Link>
            <Link href="#about-me" className="text-sm hover:text-gray-600 hover:underline" aria-label="Go to about me section" title="About me">
              About me
            </Link>
            <Link href="#works" className="text-sm hover:text-gray-600 hover:underline" aria-label="Go to works section" title="Works">
              Works
            </Link>
            <Link href="#contact" className="text-sm hover:text-gray-600 hover:underline" aria-label="Go to contact section" title="Contact">
              Contact
            </Link>
          </div>
          <div className="ml-auto">
            <ThemeToggle aria-label="Toggle theme" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4 w-full justify-end">
          <ThemeToggle aria-label="Toggle theme" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-50 px-[4.48%] py-4" role="dialog" aria-labelledby="mobile-menu-title" aria-hidden={!isMobileMenuOpen}>
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} aria-label="Go to homepage">
              <h1 id="mobile-menu-title" className="text-xl font-bold">Vitor Antunes</h1>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle aria-label="Toggle theme" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-xl">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 hover:underline" aria-label="Go to homepage" title="Homepage">
              Home
            </Link>
            <Link href="#about-me" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 hover:underline" aria-label="Go to about me section" title="About me">
              About me
            </Link>
            <Link href="#works" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 hover:underline" aria-label="Go to works section" title="Works">
              Works
            </Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 hover:underline" aria-label="Go to contact section" title="Contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;