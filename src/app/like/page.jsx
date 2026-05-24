  'use client'
import React, { useContext } from 'react'
import { FavoritsContext } from '@/favorits';

export default function LikePage() {




 const { favorits } = useContext(FavoritsContext)

console.log(favorits)
  return (
    <div>
        { favorits && favorits.length > 0 ? (
          favorits.map((item) => (
            <div key={item.id}>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
<img className='w-70' src={`http://localhost:1452/${item.images[0]}`} alt="" /> 

                  </div>
            </div>
          ))
        ) : <p></p>

        }
    </div>
  )
}
 