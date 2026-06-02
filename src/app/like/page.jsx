'use client'
import React, { useContext } from 'react'
import { FavoritsContext } from '@/favorits';
import Link from 'next/link';

export default function LikePage() {


  // верстка страницы , алаптация 
  // адаптировать под все 

  const { favorits } = useContext(FavoritsContext)
  const { deleteFromOrder } = useContext(FavoritsContext)

  console.log(favorits)
  return (
    <div className='mt-10'>
      <div className='mt-10'>

        {favorits && favorits.length > 0 ? (
          favorits.map((item) => (
            <div className='lg:flex justify-center' key={item.id}>
              <Link href={`products/${item.id}`}>
                <div>
                  <img className='lg:w-70 ml-10' src={`http://localhost:1452/${item.images[0]}`} alt="" />
                  <div className='lg:ml-10'>
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

    </div>
  )
}
