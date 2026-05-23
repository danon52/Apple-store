'use client'

import { useContext } from "react"
import { Cartcontext } from '@/store';


export default function CartPage() {


// получение данных с хранилеща 

const cart = useContext(Cartcontext)
console.log(cart)
  return (

    <div
    >CartPage

    <div>
            <h1>
                Hello i cart Page
            </h1>
    </div>
    </div>
    
  )
}
