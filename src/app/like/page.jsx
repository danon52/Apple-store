'use client'
import React, { useContext } from 'react'
import { FavoritsContext } from '@/favorits';
import Link from 'next/link';

export default function LikePage() {


  // верстка страницы , алаптация 
  // адаптировать под все 

  const { favorits } = useContext(FavoritsContext)
  const { deleteFromOrder } = useContext(FavoritsContext)


  return (
    <div className=''>
      <div className=' hidden lg:block mt-10'>

        {favorits && favorits.length > 0 ? (
          favorits.map((item) => (
            <div className='lg:flex justify-center' key={item.id}>
              <Link href={`products/${item.id}`}>
                <div>
                  <img className='lg:w-70 ml-10' src={`http://localhost:1452/${item.images[0]}`} alt="" />
                  <div className='lg:ml-25'>
                    <p className='lg:text-2xl'>{item.name}</p>
                    <p className='lg:text-xl'>{item.price}</p>
                  </div>
                  <div className='lg:flex justify-center'>
                    <hr className='lg:w-100' />
                  </div>
                </div>
              </Link>
            </div>

          ))
        ) : <p>asaea</p>

        }
      </div>


      <div className='block lg:hidden'>
        <div className="block lg:hidden">
          <hr className="text-gray-400" />
          <p className=" mt-10 text-4xl font-bold">Favorits</p>
          {favorits && favorits.length > 0 ? (
            favorits.map((item) => (
              <div key={item.id}>
                <div className="">
                  <div className=" ">
                    <div className="ml-3 flex mt-10">
                      <Link href={`products/${item.id}`}>
                        {
                          item.images && (
                            <img className="w-50 mb-10" src={`http://localhost:1452/${item.images[0]}`} alt="" />
                          )
                        }
                      </Link>
                      <hr className="text-gray-400 " />
                      <div className="w-full h-20  ml-3 ">
                        <p className="text-lg">{item.name}</p>

                        <p>id : #{item.id}</p>
                        <div className="flex justify-between ">
                          <div className="flex justify-center">
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="flex justify-center" >
                      <hr className="py-5 w-80 text-gray-400 " />
                    </div>
                  </div>
                </div>
              </div>
            ))

          ) :
            <div className="  hidden lg:block text-9xl text-center">
              <p className=" hidden lg:block">Корзина пуста </p>
            </div>

          }

        </div>
      </div>
    </div>
  )
}
