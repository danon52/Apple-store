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
              const  idProd =  [1,130 , 90 , 8, 98 , 95 , 110 ,121]
              const  findId = idProd.map(id => fetch(`http://localhost:1452/api/products/${id}`).then(resp => resp.json()) 
              ) 
                const result  = await Promise.all(findId)
                // Promise асинхронная функция  
                setProducts(result)
                console.log(result)
            }
              GetProducts()
          } ,[])




          const [items , setItems] = useState ([])
          useEffect(()=> {
              async function getIttem() {
                const  findItem = [126 , 32 , 104 ,107]
                const Inputitem = findItem.map(id =>  fetch(`http://localhost:1452/api/products/${id}`).then(resp => resp.json())
                )
                    const resultI  =  await Promise.all(Inputitem)
                    setItems(resultI)
                  console.log(resultI)
                    }
                getIttem()
          },[])
  return (
    <div>
    <div>
        <HeaderComp/>     
  <div className="w-full mb-0 mt-15 bg-[#211C24] overflow-hidden lg:w-screen">
  <div className=" lg:px-30  lg:h-180 flex flex-col lg:flex-row items-center justify-between">
    <div className="w-full lg:w-1/2 mb-40">
      <div className="flex justify-center lg:justify-start">
        <p className="w-auto text-3xl text-center text-gray-400 lg:text-2xl mt-50">
          Pro.Beyond.
        </p>
      </div>
      <div className="text-center  lg:text-start">
        <p className="text-7xl text-white lg:text-8xl">
          Iphone 14 Pro
        </p>
      </div>
      <div>
        <p className="text-center text-xl text-gray-400 lg:hidden">
          Created to change everything for the better. <br /> For everyone
        </p>
        <p className="hidden lg:block text-gray-400 lg:block text-xl lg:text-start ">
          Created to change everything for the better. For everyone
        </p>
      </div>
      <div className="flex justify-center mt-5 lg:justify-start">
        <button className="text-white w-60 h-20 rounded-2xl border border-white text-2xl">
          Shop Now
        </button>
      </div>
    </div>  
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end min-w-0 mt-8 lg:mt-0">
      <img  className="w-100 mb-0 lg:w-[520px]  shrink-0 h-auto object-contain" src="Iphone.svg"alt="" />
    </div>
  </div>
  </div>
          <div>
        <div className=''>
        <div className='lg:flex'>
      <div className='w-full h-140  lg:flex justify-items-center bg-[#EDEDED]  '>
      <div className='lg:flex'>
        <img className=' w-70 ' src="SizeMax.svg" alt="" />
        {/* <img className='w-130 hidden lg:block lg:w-50 ' src="Max.svg" alt="" /> */}
      </div>
      <div className='text-center lg:mt-25'>
        <div className='text-center'>
      <div className='flex justify-center mt-3 '>
        <p  className='text-5xl textce lg:text-5xl mt-4 flex '> Apple AirPods Max  </p>
      </div> 
        </div>
      <div className='mt-4  flex justify-center'>
            <p className='text-gray-400 text-2xl  lg:text-xl  ' >
            Computational audio. Listen, it's powerful
            </p>
      </div>
        </div>
      </div>
      </div>
        </div>
        
        
        {/* vision */}
            <div className=' lg:flex justify-items-cente '>
      <div className=' w-full h-140   lg:flex justify-items-center bg-[#353535]  '>
      <div className=' py-15 lg:flex'>
        <img className='w-100 ' src="SizeVision.svg" alt="" />
      </div>
      <div className=' text-center lg:mt-25'>
        <div className='text-center'>
      <div className=' flex justify-center'>
        <p  className='text-5xl  text-white lg:text-5xl'> Apple Vision Pro </p>
      </div> 
        </div>
      <div className=' mt-5 text-center '>
            <p className='text-gray-400 text-2xl' >
              Computational audio. Listen, it's powerful
            </p>
      </div>
        </div>
      </div>
      </div>

        {/* ps 5  */}
        <div className=' '>
    <div className='  lg:flex justify-items-cente bg-white'>
      <div className=' w-full h-140  lg:flex justify-items-center '>
      <div className='lg:flex'>
        <img className='w-100 lg:w-100' src="SizePlay.svg" alt="" />
      </div>
      <div className='lg:mt-25'>
      <div className='flex justify-center '>
        <p  className=' mt-5  text-5xl lg:text-5xl flex '>PlayStation 5 </p>
      </div>  
      <div className=''>
          <div className=' text-center'>
         <p className='text-xl  text-gray-400  lg:text-xl mt-4'>
            Incredibly powerful CPUs,GPUs,and an SSD with
          </p>
          <p className=' text-gray-400'>integrated I/O will redefine your PlayStation experience.  </p>
          </div>
        <p className='hidden lg:text-xl block mt-4 text-gray-400'>
            Incredibly powerful CPUs, GPUs, and an SSD with <br /> integrated I/O will redefine your PlayStation <br /> experience.
          </p>
      </div>
        </div>    
      </div>
      </div>
    </div>
    <div className=' lg:flex justify-items-center  mt-10 '>
      <div className=' w-full h-auto   lg:flex justify-items-center bg-[#EDEDED]  '>
      <div className=' py-15 lg:flex'>
        <img className='w-210 lg:w-100' src="MacBookPro14.svg" alt="" />
      </div>
      <div className=' text-center *:lg:mt-25'>
        <div className='text-center'>
      <div className=' flex justify-center'>
        <p  className='text-4xl  lg:text-5xl'> MacBook  Pro </p>
      </div> 
        </div>
      <div className='  '>
        <div className='text-center'>
            <p className='text-gray-600 text-[15px]' >
             The new 15‑inch MacBook Air makes room for more of 
            </p>  
            <p className='text-[15px] text-gray-600'>what you love with a spacious Liquid Retina display. </p>
        </div>
            <div className=''>
            <button className=' cursor-pointer w-85 h-15 mb-20 text-2xl bg-none mt-13  border-2  rounded-2xl '>Shop Now</button>
            </div>
      </div>
        </div>
          
      </div>
      </div>
      </div>
      </div>  

      <div className='mt-5'>
        <p className='text-2xl ml-10 mb-7'>Browse By Category</p> 
          <div className='ml-10 grid grid-cols-2 gap-4 '>
            <div className=' w-[135px] h-[128px] rounded-2xl  bg-gray-200'>
              <div className='flex  justify-center items-center  mt-6'>
          <div className='flex '>
            <img className='w-13' src="Phones.svg" alt="" />
          </div>
              </div>
              <div className='flex justify-center' >
          <p>Phones</p>
              </div>
            </div>

             <div className=' w-[135px] h-[128px] rounded-2xl  bg-gray-200'>
              <div className='flex  justify-center items-center  mt-6'>
          <div className='flex '>
            <img className='w-13' src="Smart.svg" alt="" />
          </div>
              </div>
              <div className='flex justify-center' >
          <p>Smart Watches</p>
              </div>
            </div>



             <div className=' w-[135px] h-[128px] rounded-2xl  bg-gray-200'>
              <div className='flex  justify-center items-center  mt-6'>
          <div className='flex '>
            <img className='w-13' src="Cameras.svg" alt="" />
          </div>
              </div>
              <div className='flex justify-center' >
          <p>Cameras</p>
              </div>
            </div>


             <div className=' w-[135px] h-[128px] rounded-2xl  bg-gray-200'>
              <div className='flex  justify-center items-center  mt-6'>
          <div className='flex '>
            <img className='w-13' src="Headphones.svg" alt="" />
          </div>
              </div>
              <div className='flex justify-center' >
          <p>Headphones</p>
              </div>
            </div>


             <div className=' w-[135px] h-[128px] rounded-2xl  bg-gray-200'>
              <div className='flex  justify-center items-center  mt-6'>
          <div className='flex '>
            <img className='w-13' src="Computers.svg" alt="" />
          </div>
              </div>
              <div className='flex justify-center' >
          <p>Computers</p>
              </div>
            </div>


             <div className=' w-[135px] h-[128px] rounded-2xl  bg-gray-200'>
              <div className='flex  justify-center items-center  mt-6'>
          <div className='flex '>
            <img className='w-13' src="Gaming.svg" alt="" />
          </div>
              </div>
              <div className='flex justify-center' >
          <p>Gaming </p>
              </div>
            </div>

            
          </div>

      </div>

    <div className=''>
      <div className=' mt-10 grid grid-cols-2 gap-4  
         ' >
          
        { products.length > 0 ? (
          products.map(prod => (
            <div className=' rounded-2xl '  
            key= {prod.id}>
              <div className='flex justify-end'>
              <img src="Favorites.svg" alt="" />
              </div>
                <div className=' text-center '>
                  <div className=''>
                    <div className=''>
                    <img  className=' bg-gray-200 w-70' src={`http://localhost:1452/${prod.images[0]}`} alt="" />
                    </div>
                <p className='text-xl'>{prod.brand}</p>
                <p className='text-xl'>{prod.name}</p>
                <div>
                  <p className='text-xl'> {prod.price} ₽</p>
                </div>
                <div>
                  {/* добовление в корзину  */}
                <button className=' cursor-pointer w-40 h-10 text-lg  rounded-xl  bg-black text-white'>Buy Now </button>
                </div>
                  </ div>
                </div>
              </div>
            )) 
          ): <p> Загрузка данных </p>
        }
      </div> 
        </div>
            <div className='mt-5 bg-[#F9F9F9]'>
            <div className='flex justify-end'>
              <img src="Ipad.svg" alt="" />
            </div>
            <div>
              <div className='flex justify-center'>
                  <p className='text-5xl'>Ipad Pro </p>
              </div>
              <div className='text-center  mt-5 text-gray-400'>
                <p className=''>iPad combines a magnificent 10.2-inch Retina display,
                 </p>
                 <p>  incredible performance, multitasking and ease of use.</p>
              </div>
                  <div className='flex justify-center mt-5'>
              <button className='w-50 h-15 bg-none border rounded-xl text-black'>Shop Now </button>
                  </div>
            </div>
            </div>
          <div> 

              <div>
                    <p className='text-2xl'> Discounts up to -50%</p>
              </div>

              <div>
                <div className='grid grid-cols-2 gap-4 text-center mt-10'>
                  { items.length > 0 ? (
                    items.map(i => (
                      <div key={i.id}>
                        <div className='' > 
                          <div >
                            <img className='w-70' src={`http://localhost:1452/${i.images[0]}`} alt="" /> 
                            <div className='mt-3'>
                            <p className='text-xl'>{i.name}</p>
                            <p></p>
                            <p className='text-xl'> цена по скидке :<br />{i.discount_price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ): <p>Загрузка данных</p>
                }
                
                </div>
              </div>
          </div>
      </div> 
    )
}
