'use client'
import { useContext, useState} from "react"

import { Cartcontext } from '@/store';
import Link from "next/link";
import FooterComp from "../../components/FooterComp";
import { Skeleton } from "@/components/ui/skeleton"
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
      <p className=" mt-10 text-4xl font-bold">Shoping Cart </p>
      {cart && cart.length > 0 ?(
          cart.map((item)=>(
            <div  key={item.id}>
              <div className="">                
                  <div className=" ">
                    <div className="ml-3 flex mt-10">
                <Link href={`products/${item.id}`}>  
                    <img className="w-50 mb-10" src={`http://localhost:1452/${item.images[0]}`} alt="" />
                </Link>
                <hr className="text-gray-400 " />
                  <div className="w-full h-20  ml-3 ">
                        <p className="text-lg">{item.name}</p>
                       
                            <p>id : #{item.id}</p>
                        
                      
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
                        <div className="mr-10 text-center">
                          <button onClick={()=>delProducts() } className="text-2xl">X</button>
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
        ) : <Skeleton className="w-50 h-20 " /> 

      }
    </div>
          <form className="mt-5 border w-90 ml-5 h-140 rounded-2xl border-gray-400 " action="">
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
            <input className=" px-5 absolute w-75 h-15 rounded-2xl mt-2  border border-gray-400 text-gray-400"   placeholder="Enter Card Number" type="text" />
                </div>
                  <div className="flex justify-end mt-5 mr-15">
                    <button className="relative border w-20 h-10 rounded-2xl text-center">Apply</button>
                  </div>
              </div>
          </div>
          <div className="mt-20">
              <div className="flex justify-between">
                <p className=" ml-3">SubTotal </p>
            <p className="mr-5">Дохуя денег </p>
              </div>
                <div className="flex justify-between">
                      <p className=" ml-3">Estimated Tax</p>
                      <p className="mr-5">Дохуя чего </p>
                </div>
        <div className="flex justify-between">
          <p className=" ml-3">Estimated shipping & Handling</p>
          <p className="mr-5">Хз </p>
        </div>
              <div className="flex justify-between">
                <p className=" ml-3">Total</p>
                <p className="mr-5">дохуя </p>
              </div>
          </div>    
          </div>
          <div className="flex justify-center mt-5">
            <button className="w-70 h-15 text-2xl rounded-2xl bg-black text-white text-center ">Chekout</button>
          </div>
          </form>



      <div className="mt-10">
          <FooterComp />
      </div>
    </div>
    
  )
}
