import Link from 'next/link'
import React from 'react'
import { DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { DropdownMenu } from 'radix-ui'


export default function HeaderComp() {
  return (
    <div >   
    <div>   
     <header className=" w-full">
  <div className="flex items-center justify-between w-full">
    <Link href="/">
      <img className="h-25 w-40 lg:w-80" src="/Logo.svg" alt="Logo" />
    </Link>
    <input
      className="hidden lg:flex bg-gray-200 p-3 rounded-2xl w-80 h-14"
      type="text"
      placeholder="Search"
    />
    <div className="flex items-center gap-4">
      <img className="w-10 lg:hidden" src="/Burger.svg" alt="Menu" />
      <Link href="/cart">
        <img className="hidden md:block w-15 mt-6" src="/Vector.svg" alt="Cart" />
      </Link>
      <img className="hidden lg:block w-20 ml-5" src="/Favorites.svg" alt="Favorites" />
    </div>
  </div>
</header>
    </div>
     </div>
  )
}
