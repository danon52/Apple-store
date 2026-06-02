import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'

export default function HeaderComp() {
  return (
    <header className="mt-10 w-full h-20">
      <div className="flex items-center justify-between w-full px-4 lg:px-10">
        {/* Logo */}
        <Link href="/">
          <img className="h-10 w-40 lg:w-30" src="/Logo.svg" alt="Logo" />
        </Link>

        {/* Search - Desktop */}
        <input
          className="hidden lg:flex bg-gray-200 px-3 py-3 rounded-2xl w-96 h-14 focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="text"
          placeholder="Search"
        />

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <img className="w-6 h-6" src="/Burger.svg" alt="Menu" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 mr-4">
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/main" className="w-full">Каталог</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/cart" className="w-full">Корзина</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/like" className="w-full">Избранное</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='hidden lg:block'>
            <Link href="/cart">
              <img className="w-9 h-9 mt-2 hover:opacity-70 transition-opacity" src="/Vector.svg" alt="Cart" />
            </Link>
          </div>


          <Link href="/like" className="hidden lg:block">
            <img className="w-10 h-10 mt-2 hover:opacity-70 transition-opacity" src="/Favorites.svg" alt="Favorites" />
          </Link>
        </div>
      </div>
    </header>
  )
}