import Link from 'next/link'
import React from 'react'


export default function HeaderComp() {
  return (
    <div >   
      <header className='py-10 w-345 h-20   lg: w-50 flex justify-between'>
          <div className=' flex justify-between lg:flex justify-between '>
         <img className=' h-25   w-60 ml-40 ' src="Logo.svg" alt="" />
      <input className= 'hidden  ml-10  bg-gray-200 p-3  rounded-2xl  lg:block  w-100 h-14 mt-7' type="text" placeholder='Search' />
        <div className=' h-25 w-screen flex justify-between lg:flex justify-between '>
            {/* сделать бургер  выпадающий элемент   */}
            <img className='w-60 lg:hidden md:hidden' src="Burger.svg" alt="" />
            <div className='flex lg: '>
            <Link href='/cart'>
      <img className= 'hidden md:block w-15 mt-6 ml-10'src="Vector.svg" alt="" />  
            </Link>
      <img className=' hidden lg:block w-20 ' src="Favorites.svg" alt="" />      
            </div>
      </div>
      </div>
      </header>


    </div>
  )
}
