import Link from 'next/link'
import React from 'react'


export default function HeaderComp() {
  return (
    <div>   
      <header className='py-10 w-345 h-20   '>
          <div className='  flex justify-between '>
         <img className=' h-25   w-60 ml-40 ' src="Logo.svg" alt="" />
      <input className= 'hidden  ml-10  bg-gray-200 p-3  rounded-2xl  md:block w-100' type="text" placeholder='Search' />
        <div className=' h-25 w-screen flex justify-between '>
            {/* сделать бургер  выпадающий элемент   */}
            <img className='w-60   lg:hidden md:hidden' src="Burger.svg" alt="" />
            <Link href='/cart'>
      <img className= 'hidden md:block w-17 ml-10'src="Vector.svg" alt="" />  
            </Link>
      <img className=' hidden md:block ml-5 w-13 ' src="Favorites.svg" alt="" />      
      </div>
      </div>
      </header>


    </div>
  )
}
