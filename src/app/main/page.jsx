'use client'
import React, { useContext, useEffect, useState } from 'react'
import FooterComp from '../../components/FooterComp'
import { FavoritsContext } from '@/favorits';
import { Cartcontext } from '@/store';

export default function MainPage() {


  const [products , setProducst] = useState([])

  const {AddToFavorits} = useContext(FavoritsContext)
  const {AddToCart} = useContext(Cartcontext)
    useEffect(()=> {
   async   function  GetAllProd(){
          const resp = await fetch('http://localhost:1452/api/products')
          const data =  await  resp.json()
          setProducst(data)
          console.log(data)
      }
      GetAllProd()

    }, [])



  return (  
    <div>
      <div className='bg- grid grid-cols-2 gap-10 '> 
{ products.map((item)=> (
      <div className=''  key={item.id}>
           <div className=''>
            <div className=''>
            <div className=''>
        <div className='text-center h-75   '>
          <div className='flex justify-end'>
            <button onClick={()=> AddToFavorits()} className='absolute'>
            <img src="Favorites.svg" alt="" />
            </button>
          </div>
          <div className=''>
            <img className='w-50' src={`http://localhost:1452/${item.images[0]}`} alt="" /> 
          </div>
          <div className=''>
                <p>{item.name}</p>
                <p>{item.price}</p>
          </div>
          <div className='mt-4'>
          <button onClick={()=> AddToCart()} className='bg-black w-40 h-13 text-white rounded-lg'> By  Now</button>
          </div>
            </div>
            </div>

        </div>
          </div>

      </div>    
    ))
}
    </div>









{/* ---------------------- */}
        <div>
        {/* <FooterComp/> */}
        </div>
    </div>
  )
}
