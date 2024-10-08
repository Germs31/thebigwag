"use client"

import { useState } from 'react'
import {
  Bars3Icon,
} from '@heroicons/react/24/outline'
import MobileMenu from '../MobileMenu/MobileMenu'

const navItems = ["home","about", "contact", "blogs"]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <nav
      aria-label="Global"
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">The Big Wag</span>
          <img
            alt=""
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
        </a>
      </div>

      {/* mobile */}
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop & Tablet */}
      <div className="hidden lg:flex lg:gap-x-12">
        {navItems.map((item: string, index: number) => (
          <a href="#" key={index} className="text-sm font-semibold leading-6 text-gray-900">
            {item}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Subscribe <span aria-hidden="true">&rarr;</span>
          </a>
      </div>

      {/* Mobile Menu */}
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </nav>
  );
}

export default Navbar