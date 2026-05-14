'use client'
import React, {useEffect, useState } from 'react'
import HeaderComp from '../components/HeaderComp';


export default function Page() {

  
      // async function  getData() {
      //     const respOblj = await fetch('http://localhost:1452/api/products/1')
      // }


  const [products , setProducts] = useState([])
     useEffect(()=>{
      // самому написать 
       async function GetProducts () {
        const prodId = [1,90,130,100,120,6,7,8,]
        const findId = prodId.map(id => 
          fetch(`http://localhost:1452/api/products/${id}`).then(resp => resp.json())
        )
        const result = await Promise.all(findId)
        setProducts(result)
          console.log(result)
       }
       GetProducts()
     }, [])
  
        
  return (
    <div>
    
    <div>
        <HeaderComp/>

      <div className='w-345 bg-[#211C24] md: w-screen'>
  <div className=''>
    <div className=''>
      <div className=' md:mt-60  lg: mt-30 mr-15'>
          <p className=' text-4xl
                     md:text-2xl  text-gray-400 lg:text-gray-400  text-center  '>
            Pro.Beyond.
          </p>
          <div className='flex justify-center  text-7xl  sm:text-left text-center  md:text-7xl  lg:text-7xl text-white  r '>
            <p className='w-screen'>
            Iphone 14 Pro
            </p>
          </div>
          <p className= 'text-2xl text-center mt-5  text-gray-400 md:text-gray-500'>Created to change everything for the better. For everyone</p>
          <div className='flex sm:justify-start sm: justify-center'>
          <button className='cursor-pointer lg: w-50 text-white border mt-5  rounded-xl h-13 bg-none 
          '>Shop Now</button>
          </div>
      </div>
          <div className=''>
            <img className='md: w-130 lg: w-110 h-full  sm: w-80 shrink-0 h-full block' src="iphone.svg" alt="" />
 </div>
     
       </div>
      </div>
      </div>
      <div className='flex'>

        <div className=''>
          <div className='flex w-250'>
            {/* ps 5  */}
          <img className='w-120' src="PlayStation.svg" alt="" />
            <div className='mt-30'>
              <p className='text-4xl '>PlayStation 5 </p>
              <p className='text-2xl text-gray-400 mt-3 '></p>
            </div>
            <div className='mt-30 '>
              <p className='text-4xl'>PlayStation 5 </p>
              <p className='text-2xl text-gray-400 mt-3'>
                Incredibly powerful CPUs, GPUs, and an SSD with <br />
                 integrated I/O will redefine your PlayStation <br /> experience.
              </p>
            </div>
          </div>
          <div className='flex'>
          <div className='flex  items-center h-120 bg-[#EDEDED] w-120'>
          <img className='w-30' src="max.svg" alt="" />
              <div className=''>
      <p className='text-3xl ml-20'>Apple</p>
      <p className='text-3xl ml-20 mt-2'>AirPods</p>
      <p className='text-3xl ml-20 mt-2'>Max</p>
                <p className='ml-20 mt-5 text-2xl text-gray-400'>Computational audio. <br /> Listen, it's powerful</p>
              </div>
          </div> 
          <div  className=' h-120 w-130 bg-[#353535]'>
            <div className='flex items-center'>
        <img  className='mt-30 w-40' src="vision.svg" alt="" />
              <div className='mt-20'>
                    <p className='text-white ml-20 text-3xl'>Apple</p>
                    <p className='text-white ml-20 text-3xl mt-2'>Vision Pro</p>
                    <p className='text-2xl text-gray-400 ml-20 mt-3'>An immersive way to <br /> experience <br /> entertainment</p>
              </div>
            </div>

                </div>
          </div>
               
        </div>
      <div className=' bg-[#EDEDED] w-screen flex justify-end'>
        <div className='flex ml-5 items-center ml-40'>
            <div className='w-120'>
          <p className='text-5xl'>MacBook Pro</p>
          <p className='text-xl mt-3 text-gray-400'>The new 15‑inch MacBook Air makes room for more of<br />what you love with a spacious Liquid Retina display.</p>
            <button className=' cursor-pointer w-50 h-15 border rounded-2xl text-xl'>Shop Now</button>
            </div>
        </div>
        <img className='w-90 m-0 p-0'  src="MacPro.svg" alt="" />
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

    <div className='grid grid-cols-4  gap-4'>

        { products.length > 0 ? (
            products.map(prod => (
              <div key= {prod.id}>
              <img src={`http://localhost:1452/${prod.images[0]}`} alt="" />
                <p>{prod.category}</p>
                <p>{prod.brand}</p>
              </div>
             
            ))
           
          
               
        ): <p> Загрузка данных </p>
        
      }
     
      </div> 
      </div> 

    )
}
