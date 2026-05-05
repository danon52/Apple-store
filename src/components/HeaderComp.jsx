import React from 'react'


export default function HeaderComp() {
  return (
    <div>   

      <header className='  mt-5 w-300'>
       <div className='flex justify-between w-auto'>
        <img src="Logo.svg" alt="" />
        <input className= ' ml-10 border-2  w-70 h-13' type="text" placeholder='Search' />
        <div className='flex'>
      <img  className='w-10' src="Vector.svg" alt="" />
      <img className='w-13' src="Favorites.svg" alt="" />
        </div>
      </div>
      </header>
    </div>
  )
}
