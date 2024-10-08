"use client"

import React from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    NumberedListIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

interface IMobileMenu {
    mobileMenuOpen: boolean
    setMobileMenuOpen: (toggle: boolean) => void
}

const navItems = ["home","about", "contact", "blogs"]

const MobileMenu = (props: IMobileMenu) => {
    
  return (
    <Dialog open={props.mobileMenuOpen} onClose={props.setMobileMenuOpen} className="lg:hidden">
    <div className="fixed inset-0 z-10" />
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt=""
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
        </a>
        <button
          type="button"
          onClick={() => props.setMobileMenuOpen(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {
                navItems.map((item: string, index: number) => (
                    <a
                    key={index}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        {item}
                    </a>
                ))
            }
          </div>
          <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
  )
}

export default MobileMenu