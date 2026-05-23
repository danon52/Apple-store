'use client'
import { createContext, useEffect, useState } from "react";



export const Cartcontext = createContext([])

export function CartProvider({children}){
    // const [products , setProducts] = useState([])
    // useEffect(()=>{
    //     async function getProd() {
    //         const data = await fetch('http://localhost:1452/api/products/').then(resp =>resp.json())
    //             setProducts(data)
    //             console.log(data)
    //     }
    //     getProd()   
    // }, [])


return(
    <Cartcontext.Provider value={{products,setProducts}}>
        {children}
    </Cartcontext.Provider>  
)
}