'use client'

import { getNestedTranslation } from '@/utils/get-translation'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-togle'
import { useTranslation } from './translation-provider'
import { Button } from './ui/button'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { translations } = useTranslation()

  return (
    <nav className="bg-background md:pt-10 pt-4 pb-3" aria-label="Primary navigation">
      <div className="container flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center w-full" role="navigation">
          <div className="flex space-x-8">
            <Link
              href="/"
              className="text-sm hover:text-muted-foreground hover:underline"
              aria-label="Go to homepage"
              title={getNestedTranslation(translations, 'navBar.links.home', 'Home')}
            >
              {getNestedTranslation(translations, 'navBar.links.home', 'Home')}
            </Link>
            <Link
              href="#about-me"
              className="text-sm hover:text-muted-foreground hover:underline"
              aria-label="Go to about me section"
              title={getNestedTranslation(translations, 'navBar.links.about', 'About me')}

            >
              {getNestedTranslation(translations, 'navBar.links.about', 'About me')}
            </Link>
            <Link
              href="#works"
              className="text-sm hover:text-muted-foreground hover:underline"
              aria-label="Go to works section"
              title={getNestedTranslation(translations, 'navBar.links.works', 'Works')}
            >
              {getNestedTranslation(translations, 'navBar.links.works', 'Works')}
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-muted-foreground hover:underline"
              aria-label="Go to contact section"
              title={getNestedTranslation(translations, 'navBar.links.contact', 'Contact')}
            >
              {getNestedTranslation(translations, 'navBar.links.contact', 'Contact')}
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle aria-label="Toggle theme" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4 w-full justify-end">
          <LanguageToggle />
          <ThemeToggle aria-label="Toggle theme" />
          <Button
            variant="ghost"
            className="cursor-pointer"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            title={getNestedTranslation(translations, 'navBar.buttons.menu.open', 'Open menu')}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background z-50 px-[4.48%] py-4"
          role="dialog"
          aria-labelledby="mobile-menu-title"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} aria-label="Go to homepage" className='hover:text-muted-foreground'>
              <h1 id="mobile-menu-title" className="text-xl font-bold">
                Vitor Antunes
              </h1>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle aria-label="Toggle theme" />
              <Button
                variant="ghost"
                className="cursor-pointer"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                title={getNestedTranslation(translations, 'navBar.buttons.menu.close', 'Close menu')}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-xl">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-muted-foreground hover:underline"
              aria-label="Go to homepage"
              title={getNestedTranslation(translations, 'navBar.links.home', 'Home')}
            >
              {getNestedTranslation(translations, 'navBar.links.home', 'Home')}
            </Link>
            <Link
              href="#about-me"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-muted-foreground hover:underline"
              aria-label="Go to about me section"
              title={getNestedTranslation(translations, 'navBar.links.about', 'About me')}
            >
              {getNestedTranslation(translations, 'navBar.links.about', 'About me')}
            </Link>
            <Link
              href="#works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-muted-foreground hover:underline"
              aria-label="Go to works section"
              title={getNestedTranslation(translations, 'navBar.links.works', 'Works')}
            >
              {getNestedTranslation(translations, 'navBar.links.works', 'Works')}
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-muted-foreground hover:underline"
              aria-label="Go to contact section"
              title={getNestedTranslation(translations, 'navBar.links.contact', 'Contact')}
            >
              {getNestedTranslation(translations, 'navBar.links.contact', 'Contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar