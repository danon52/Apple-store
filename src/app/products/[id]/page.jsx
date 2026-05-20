import React from 'react'





export default async function ProdictPage({params}) {

    const param = await params

    const resp = await fetch(`http://localhost:1452/api/products/${param.id}`)
    const data = await resp.json()

    
  return (
    <div>
            
    <div>
    </div>

            <p>Карточка товара {data.name}</p>
            <p>{data.perice}</p>
            <p>{data.name}</p>
            <img src={`http://localhost:1452/${data.images[0]}`} alt="" />


    </div>
            

  )
}
