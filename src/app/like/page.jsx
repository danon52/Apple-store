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
    <div>
      {favorits && favorits.length > 0 ? (
        favorits.map((item) => (
          <div key={item.id}>
            <Link href={`products/${item.id}`}>
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <img className='w-70' src={`http://localhost:1452/${item.images[0]}`} alt="" />
              </div>
            </Link>
            <button onClick={() => deleteFromOrder(item.id)} className='w-100 bg-black text-white text-center h-15'>Удалить нахуй </button>
          </div>
        ))
      ) : <p></p>

      }
    </div>
  )
}
