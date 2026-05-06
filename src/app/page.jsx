import React from 'react'
import HeaderComp from '../components/HeaderComp';

export default function page() {
  return (
    <div>
        <HeaderComp/>


      <div className=' mt-10 w-screen h-auto bg-[#211C24]'>
<div className='flex justify-center '>
    <div className='flex'>
      <div className='mt-60 mr-40'>
          <p className='text-3xl text-gray-500'>
            Pro.Beyond.
          </p>
          <div className='text-7xl text-white'>
            Iphone 14 Pro 
          </div>
          <p className='text-gray-500'>Created to change everything for the better. For everyone</p>

          <button className='w-50 text-white border mt-5  rounded-xl h-13 bg-none'>Shop Now</button>
      </div>
      <div className='flex '>
            <img className='w-130' src="iphone.svg" alt="" />
            </div>
    </div>
            
      
      </div>
      </div>
      </div>
  )
}
