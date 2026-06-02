'use client'
import React, { useContext } from 'react'
import { FavoritsContext } from '@/favorits';
import Link from 'next/link';
import { Cartcontext } from '@/store';
import FooterComp from '../../components/FooterComp';

export default function LikePage() {


  // верстка страницы , алаптация 
  // адаптировать под все 

  const { favorits } = useContext(FavoritsContext)
  const { deleteFromOrder } = useContext(FavoritsContext)
  const { sum } = useContext(Cartcontext)

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
                        <p>{item.price}</p>
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

          <form className="block   mt-5 border w-90 ml-5 h-140 rounded-2xl border-gray-400 lg:hidden" action="">
            <div className=" mt-10 ml-12">
              <p className="text-xl font-bold">Order Summary </p>
            </ div>
            <div>
              <div>
                <div>
                  <div className="flex ml-12 py-2">
                    <p className="text-gray-400">Discount code </p>
                    <p className="text-gray-400">/</p>
                    <p className="text-gray-400">Promo code</p>
                  </div>
                  <div className="flex justify-center">
                    <input className="w-75 h-15 border border-gray-400 text-gray-400 px-5 rounded-2xl" placeholder="Code" type="" name="" id="" />
                  </div>
                </div>
                <div className="ml-12 mt-3">
                  <p className="text-gray-400">Your bonus card number</p>
                </div>
                <div>
                  <div className="flex justify-center ">
                    <input className=" px-5 absolute w-75 h-15 rounded-2xl mt-2  border border-gray-400 text-gray-400" placeholder="Enter Card Number" type="text" />
                  </div>
                  <div className="flex justify-end mt-5 mr-15">
                    <button className="relative border w-20 h-10 rounded-2xl text-center">Apply</button>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="flex justify-between">
                  <p className=" text-xl ml-3">SubTotal </p>
                  <p className=" mr-5 text-xl">  {sum.toFixed(2.)} ₽</p>
                </div>
                <div className="flex justify-between">
                  <p className=" ml-3">Estimated Tax</p>
                  <p className="mr-5">250 ₽ </p>
                </div>
                <div className="flex justify-between">
                  <p className=" ml-3">Estimated shipping & Handling</p>
                  <p className="mr-5">100 ₽ </p>
                </div>
                <div className="flex justify-between">
                  <p className=" ml-3">Total</p>
                  <p className="mr-5">{sum} ₽ </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="w-70 h-15 text-2xl rounded-2xl bg-black text-white text-center ">Chekout</button>
            </div>
          </form>

        </div>
      </div>
      <FooterComp />
    </div>
  )
}
