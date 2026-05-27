'use client'
import { useContext, useState} from "react"

import { Cartcontext } from '@/store';
import Link from "next/link";


export default function CartPage() {


  // счетчик 
 const { cart } = useContext(Cartcontext)
 const {delProducts} = useContext(Cartcontext)


//  
const [count , setCount ] = useState(0)
  
console.log(cart)

// добавить загрузку скелетона 
// верстка,адаптация 
  return (
    <div> 
    <div>
      <hr className="text-gray-400" />
      <p className=" mt-10 text-3xl">Shoping Cart </p>
      {cart && cart.length > 0 ?(
          cart.map((item)=>(
            <div  key={item.id}>
              <div className="">
                  <div className=" ">
                    <div className="flex">
            <div>
              
            </div>
                <Link href={`products/${item.id}`}>  
                    <img className="w-50" src={`http://localhost:1452/${item.images[0]}`} alt="" />
                </Link>
                  <div className="w-full h-20 ">
                        <p className="text-lg">{item.name}</p>
                      <div className="flex justify-between ">
                        <div className="flex justify-center"> 
                          <Link href={`products/${item.id}`}>
                            <div className="flex justify-start">
                        <p className="text-xl ">{item.price}</p>
               </div>
                          </Link>
               <div className=" flex ml-7 text-center">
                        <button className="mr-2" >+</button>
                          <p className="text-xl bg-white w-5 h-7">{count}</p>
                        <button className="ml-2">-</button>
               </div>
                        </div>
                        <div className="mr-2 text-center">
                          <button onClick={()=>delProducts() } className="text-2xl">X</button>
                        </div>
                      </div>
                      </div>
                    </div>
                         </div>
              </div>
            </div>
          ))
        ) : <p>Данные загружаются</p>
      }
    </div>
    </div>
    
  )
}
