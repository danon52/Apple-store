import React from 'react'


export default function HeaderComp() {
  return (
    <div>   
      <header className='mt-5 w-[390px] h-20  flex justify-between'>
          <div className='flex justify-between w-auto'>
         <img className=' h-25   w-30 ml-40 lg:bg-red-500 ' src="Logo.svg" alt="" />
      <input className= 'hidden  ml-10  bg-gray-200 p-3  rounded-2xl  md:block w-100' type="text" placeholder='Search' />
        <div className=' h-25 w-screen flex justify-between mr-60'>
            {/* сделать бургер  выпадающий элемент   */}
            <img className='w-30 lg:hidden md:hidden' src="Burger.svg" alt="" />
      <img className=' hidden lg: ml-10 w-17 'src="Vector.svg" alt="" />  
      <img className=' hidden lg: ml-5 w-13' src="Favorites.svg" alt="" />      
      </div>
      </div>
      </header>


    </div>
  )
}
