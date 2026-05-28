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
// общий счет
// корзины 
// reduce 
// счетчик с ценой товара 
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
                function DelAllCart(delell){
                    setCart(allitem => {
                        const del = allitem.findIndex(item => item.id ===  delell.id)
                        if(allitem !== -1 ) allitem.splice(del,1)
                    })
                }

    return(
        <Cartcontext.Provider value={{cart, 
            AddToCart , 
            delProducts , 
            DelAllCart,
            sum
         }}>
            {children}
        </Cartcontext.Provider>  
    )
}