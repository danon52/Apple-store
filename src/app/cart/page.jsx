'use client'

import { useContext} from "react"
import { Cartcontext } from '@/store';


export default function CartPage() {


// получение данных с хранилеща 
 const { cart } = useContext(Cartcontext)
console.log(cart)
// верстка , адаптация 
  return (

    <div>
      CartPage
    <div>


      {cart && cart.length > 0 ?(
          cart.map((item)=>(
            <div key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                            <img className='w-70' src={`http://localhost:1452/${item.images[0]}`} alt="" /> 

                            <p>{item.quantity}</p>


            </div>
          ))
        ) : <p>Fuck you</p>
      }
     
            <h1>
                Hello i cart Page
            </h1>
    </div>
    </div>
    
  )
}
