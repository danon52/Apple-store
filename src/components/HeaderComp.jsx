import Link from 'next/link'
import React from 'react'


export default function HeaderComp() {
  return (
    <div >   
      <header className=' py-10 w-345 h-20 lg: flex py-0 px-0 '>
          <div className=' flex justify-between
           lg:w-screen h-30 flex justify-between'>
         <img className=' h-25   w-60 ml-40 ' src="Logo.svg" alt="" />
         <div className='lg:ml-70 flex justify-center '>
      <input className= 'hidden  ml-10  bg-gray-200 p-3  rounded-2xl  lg:flex w-70 h-14 mt-7' type="text" placeholder='Search' />
         </div>
        <div className=' h-25 w-screen flex justify-between lg:flex mr-20 justify-end'>
            {/* сделать бургер  выпадающий элемент   */}
            <img className='w-60 lg:hidden md:hidden' src="Burger.svg" alt="" />
            <div className='flex lg:  '>
            <Link href='/cart'>
      <img className= 'hidden md:block w-15 mt-6'src="Vector.svg" alt="" />  
            </Link>
      <img className=' hidden lg:block w-20 ml-10 ' src="Favorites.svg" alt="" />      
            </div>
      </div>
      </div>
      </header>


    </div>
  )
}
