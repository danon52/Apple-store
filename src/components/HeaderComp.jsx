import Link from 'next/link'
import React from 'react'


export default function HeaderComp() {
  return (
    <div >
      <div>
        <header className=" w-full lg: w-full  h-20 mt-5 ">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <img className="h-25 w-40 lg:w-80" src="/Logo.svg" alt="Logo" />
            </Link>
            <input
              className="hidden lg:flex bg-gray-200 px-3 mt-5 mr-25 rounded-2xl w-80 h-14"
              type="text"
              placeholder="Search"
            />
            <div className="flex items-center gap-4 lg: mr-20 ">
              <img className="w-10 lg:hidden" src="/Burger.svg" alt="Menu" />
              <Link href="/cart">
                <img className="hidden md:block w-15 mt-6 " src="/Vector.svg" alt="Cart" />
              </Link>
              <Link href="/like">
                <img className="hidden lg:block w-20 ml-5 mt-5" src="/Favorites.svg" alt="Favorites" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
