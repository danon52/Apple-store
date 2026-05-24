'use client'
import { createContext, useEffect, useState } from "react";


export const Cartcontext = createContext([])
export function CartProvider({children}){

    const [cart , setCart] = useState([]) 

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
        
    return(
        <Cartcontext.Provider value={{cart, AddToCart}}>
            {children}
        </Cartcontext.Provider>  
    )
}