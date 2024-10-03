import React from 'react'

const navItems = ["home","about", "contact", "blogs"]

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-transparent">
        <h1 className="text-xl text-gray-800 font-bold">The Big Wag</h1>
        <div className="flex justify-between items-center">
            {navItems.map((item: string) => (
                <div className='mx-2'>{item}</div>
            ))} 
        </div>
    </nav>
  )
}

export default Navbar