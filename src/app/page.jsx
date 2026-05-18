'use client'
import React, {useEffect, useState } from 'react'
import HeaderComp from '../components/HeaderComp';
export default function Page() {

  
      // async function  getData() {
      //     const respOblj = await fetch('http://localhost:1452/api/products/1')
      // }


  const [products , setProducts] = useState([])
     useEffect(()=>{

        async function GetProducts() {
              const idProd =  [1,130 , 90 , 8,100 , 95 , 110 ,121 ]
              const  findId = idProd.map(id => fetch(`http://localhost:1452/api/products/${id}`).then(resp => resp.json()) 
              ) 
                const result  = await Promise.all(findId)
                // Promise асинхронная функция  
                setProducts(result)
                console.log(result)
            }
              GetProducts()
          } ,[])
  return (
    <div>
    <div>
        <HeaderComp/>     
  <div className="w-348 mb-0 mt-15 bg-[#211C24] overflow-hidden lg:w-screen">
  <div className=" lg:px-30  lg:h-180 flex flex-col lg:flex-row items-center justify-between">
    <div className="w-full lg:w-1/2 mb-40">
      <div className="flex justify-center lg:justify-start">
        <p className="w-auto text-5xl text-center text-gray-400 lg:text-2xl mt-50">
          Pro.Beyond.
        </p>
      </div>
      <div className="text-center  lg:text-start">
        <p className="text-8xl text-white lg:text-8xl">
          Iphone 14 Pro
        </p>
      </div>
      <div>
        <p className="text-center text-3xl text-gray-400 lg:hidden">
          Created to change everything for the better. <br /> For everyone
        </p>
        <p className="hidden lg:block text-gray-400 lg:block text-xl lg:text-start ">
          Created to change everything for the better. For everyone
        </p>
      </div>
      <div className="flex justify-center mt-5 lg:justify-start">
        <button className="text-white w-60 h-15 rounded-2xl border border-white text-xl">
          Shop Now
        </button>
      </div>
    </div>  
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end min-w-0 mt-8 lg:mt-0">
      <img  className="w-190 mb-0 lg:w-[520px]  shrink-0 h-auto object-contain" src="Iphone.svg"alt="" />
    </div>
  </div>
  </div>
          <div>
        <div className=''>
        <div className='lg:flex'>
      <div className='w-full h-240  lg:flex justify-items-center bg-[#EDEDED]  '>
      <div className='lg:flex'>
        <img className='w-20  lg:hidden w-100 ' src="SizeMax.svg" alt="" />
        <img className='w-130 hidden lg:block lg:w-50 ' src="Max.svg" alt="" />
      </div>
      <div className='text-center mt-10 lg:mt-25'>
        <div className='text-center'>
      <div className='w-auto text-center'>
        <p  className='text-7xl ml-10 lg:text-5xl mt-4 flex '> Apple AirPods Max  </p>
      </div> 
        </div>
      <div className='mt-4 text-center '>
            <p className='text-gray-400 text-4xl lg:text-xl ml-3  ' >
            Computational audio. Listen, it's powerful
            </p>
      </div>
        </div>
      </div>
      </div>
        </div>
        {/* vision */}
            <div className=' lg:flex justify-items-cente '>
      <div className=' w-348 h-220   lg:flex justify-items-center bg-[#353535]  '>
      <div className=' py-15 lg:flex'>
        <img className='w-210 lg:w-100' src="SizeVision.svg" alt="" />
      </div>
      <div className=' text-center lg:mt-25'>
        <div className='text-center'>
      <div className=' text-center'>
        <p  className='text-8xl ml-10 text-white lg:text-5xl'> Apple Vision Pro </p>
      </div> 
        </div>
      <div className=' mt-10 text-center '>
            <p className='text-gray-400 text-5xl' >
              Computational audio. Listen, it's powerful
            </p>
      </div>
        </div>
      </div>
      </div>

        {/* ps 5  */}
        <div className=' '>
    <div className='  lg:flex justify-items-cente bg-white'>
      <div className=' w-348 h-auto  lg:flex justify-items-center '>
      <div className='lg:flex'>
        <img className='w-170 lg:w-100' src="SizePlay.svg" alt="" />
      </div>
      <div className='ml-40 lg:mt-25'>
      <div className='flex  mr-20  justify-center  lg:'>
        <p  className='  text-7xl lg:text-5xl mt-7 flex '>PlayStation 5 </p>
      </div>  
      <div className=''>
         <p className='text-4xl    lg:text-xl mt-4'>
            Incredibly powerful CPUs, GPUs, and an SSD with <br /> integrated I/O will redefine your PlayStation experience.``
          </p>
        <p className='hidden lg:text-xl block mt-4 text-gray-400'>
            Incredibly powerful CPUs, GPUs, and an SSD with <br /> integrated I/O will redefine your PlayStation <br /> experience.
          </p>
      </div>
        </div>    
      </div>
      </div>
    </div>
    <div className=' lg:flex justify-items-cente '>
      <div className=' w-full h-auto   lg:flex justify-items-center bg-[#EDEDED]  '>
      <div className=' py-15 lg:flex'>
        <img className='w-210 lg:w-100' src="MacBookPro14.svg" alt="" />
      </div>
      <div className=' text-center lg:mt-25'>
        <div className='text-center'>
      <div className=' text-center'>
        <p  className='text-8xl ml-10  lg:text-5xl'> MacBook  Pro </p>
      </div> 
        </div>
      <div className=' mt-10 text-center '>
            <p className='text-gray-400 text-3xl' >
             The new 15‑inch MacBook Air makes room 
             for more of <br /> what you love with a spacious Liquid Retina display.
            </p>  
            <div className=''>
            <button className=' cursor-pointer w-200 h-20 mb-20 text-5xl bg-none mt-13 py-4 border-2  rounded-2xl '>Shop Now</button>
            </div>
      </div>
        </div>
          
      </div>
      </div>
      </div>


      </div>  

<div className='mt-35'>  
 <div className='ml-63 mb-10'>
        <p className='text-4xl'>Browse By Category </p>
      </div>  
    <div className='flex justify-center'>


    <div className='w-50 h-35 bg-gray-200 rounded-2xl  flex justify-center transition-transform duration-300 ease-in-out hover:scale-110  '>
          <div className = ' mr-2 mt-5 items-center'>
               <img className='w-17 flex items-center ' src="Phones.svg" alt="" />
            <div className=''>
               <p className='text-xl'>Phones</p>
            </div>

          </div>
    </div>
      <div className='w-50 h-35 ml-10  bg-gray-200 rounded-2xl flex justify-items-center '>
              <div className='ml-5 flex justify-center  mt-5 '>
                <div className='ml-5'>
                <img className='w-17 ml-6 ' src="Smart.svg" alt="" />
                      <div className='flex justify-center'>
                    <p className='text-xl '>Smart Watches</p>
                </div>
                      </div>
              </div>
      </div>

      <div className='w-50 ml-10 h-35 bg-gray-200 rounded-2xl flex justify-center'>
            <div className=' flex mt-5 justify-center'>
              <div className=''>
                  <img className='w-17' src="Cameras.svg" alt="" />
                    <p className='text-xl'> Cameras</p> 
              </div>
            </div>
      </div>


 <div className='w-50 ml-10 h-35 bg-gray-200 rounded-2xl flex justify-center'>
            <div className=' flex mt-5 justify-center'>
              <div className=''>
                  <img className='w-17 ml-5' src="Headphones.svg" alt="" />
                    <p className='text-xl'> Headphones</p> 
              </div>
            </div>
      </div>

       <div className='w-50 ml-10 h-35 bg-gray-200 rounded-2xl flex justify-center'>
            <div className=' flex mt-5 justify-center'>
              <div className=''>
                  <img className='w-17 ml-3' src="Computers.svg" alt="" />
                    <p className='text-xl'> Compuners</p> 
              </div>
            </div>
      </div>
       <div className='w-50 ml-10 h-35 bg-gray-200 rounded-2xl flex justify-center'>
            <div className=' flex mt-5 justify-center'>
              <div className=''>
                  <img className='w-17' src="Gaming.svg" alt="" />
                    <p className='text-xl'> Gaming</p> 
              </div>
            </div>
      </div>
</div>
    </div>

    <div className='grid grid-cols-4 gap-4'>

        { products.length > 0 ? (
            products.map(prod => (
              <div  key= {prod.id}>
                <div className=''>
              <img className='w-65' src={`http://localhost:1452/${prod.images[0]}`} alt="" />
                <p>{prod.category}</p>
                <p>{prod.brand}</p>
                </div>
              </div>
             
            ))
           
          
               
        ): <p> Загрузка данных </p>
        
      }
     
      </div> 
      </div> 

    )
}
