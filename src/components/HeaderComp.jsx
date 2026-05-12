import React from 'react'


export default function HeaderComp() {
  return (
    <div>   
      <header className='mt-5 w-screen sm:mt-2'>
          <div className='flex justify-between w-auto  flex justify-between '>
          <img className='ml-40 w-30' src="Logo.svg" alt="" />
      <input className= ' ml-10  bg-gray-200 p-3  rounded-2xl sm:w-70 h-13  w-40 h-5' type="text" placeholder='Search' />
        <div className='flex mr-60'>
      <img className='w-10 'src="Vector.svg" alt="" />  
      <img className='ml-5 w-13' src="Favorites.svg" alt="" />      
      </div>
      </div>
      </header>


    </div>
  )
}
