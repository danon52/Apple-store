
import React, {} from 'react'





export default async function ProdictPage({params}) {

  
    const param = await params

    const resp = await fetch(`http://localhost:1452/api/products/${param.id}`)
    const data = await resp.json()      
    console.log(data.characteristics)
    
    const newValue = Object.values(data)
        

    
  return (
    //  данные  характеристик 
    <div>
            
        < hr className='text-gray-400' />
            <div className='mt-5'> 
                <div className='flex  justify-center'>
            <img  className='w-85' src={`http://localhost:1452/${data.images[0]}`} alt="" />
                </div>
            <div>
                <div className='flex' >
            <p className='text-3xl '>{data.brand}</p> 
            <p className='text-3xl ml-2'>{data.name}</p>
                </div>
                <div className='mt-5 flex'>
            <p className='text-3xl'> ${data.discount_price}  </p>
            <p className='text-3xl ml-5 text-gray-400 line-through'>${data.price}</p>
                </div>
            <p>{data.characteristics.value}</p>
            <p>{JSON.stringify(data.unit_type)}</p>
            <p>{JSON.stringify(data.value)}</p>
            </div>

            </div>
    </div>
            

  )
}
