'use client'

import { createContext, useEffect, useState } from "react";


export const Cartcontext = createContext([])
export function CartProvider({children}){

    const [cart, setCart] = useState([]) 


    useEffect(()=>{
        const save = localStorage.getItem('cart')
        if(save) {
            setCart(JSON.parse(save)) 
        }
    },[])





    useEffect(()=>{
        localStorage.setItem('cart' , JSON.stringify(cart))
    }, [cart])

    function AddToCart(newrod){
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === newrod.id)
            if(existing){
                return prevCart.map(item => 
                    item.id === newrod.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            } else {
                return [...prevCart, {...newrod, quantity: 1}]
            }
            
        })
    }

        function Increment(id){
            setCart(curent => (
                curent.map(item => 
                    item.id === id 
                    ? {item , quantity: item.quantity + 1}
                    : item

                )
            ))
        }
        
        function Decrement(id){
           setCart(curent => (
    curent.map(item => 
        item.id === id
            ? {...item, quantity: item.quantity + 1}
            : item
    ) .filter(item => item.quantity < 0)
))
        }

    
    const sum = cart.reduce(
      (sum , item) => sum+ item.price * item.quantity,
       0)


                
        function delProducts() {
        setCart(favor => {
            const first = favor.findIndex(item => item.id === item.id)
           if(first !== -1 ) favor.splice(first , 1)
            return[...favor]
            })
        }




                
    return(
        <Cartcontext.Provider value={{cart, 
            sum, 
            AddToCart , 
            delProducts , 
            Decrement, 
            Increment

         }}>
            {children}
        </Cartcontext.Provider>  
    )
}