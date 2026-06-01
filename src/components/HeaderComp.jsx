import Link from 'next/link'
import React from 'react'



export default function HeaderComp() {
  // сделать активный поиск 
  return (
    <div >
      <div>
        <header className=" w-full lg:w-full  h-20 mt-5 ">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <img className="h-25 w-40 lg:w-30 ml-40" src="/Logo.svg" alt="Logo" />
            </Link>
            <input
              className="hidden lg:flex bg-gray-200 px-3 mt-5 mr-25 rounded-2xl w-100 h-14"
              type="text"
              placeholder="Search" />
            <div className="flex items-center gap-4 lg: mr-20 ">
              <img className="w-10 lg:hidden" src="/Burger.svg" alt="Menu" />
              <Link href="/cart">
                <img className="hidden md:block w-9 mt-2 " src="/Vector.svg" alt="Cart" />
              </Link>
              <Link href="/like">
                <img className="hidden lg:block w-10 ml-2 mt-2" src="/Favorites.svg" alt="Favorites" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
