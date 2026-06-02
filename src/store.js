'use client'

import { createContext, useEffect, useState } from "react";


export const Cartcontext = createContext([])
export function CartProvider({ children }) {

    const [cart, setCart] = useState([])


    useEffect(() => {
        const save = localStorage.getItem('cart')
        if (save) {
            setCart(JSON.parse(save))
        }
    }, [])





    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function AddToCart(newrod) {
        setCart(prevCart => {
            const cart = prevCart.find(item => item.id === newrod.id)
            if (cart) {
                return prevCart.map(item =>
                    item.id === newrod.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevCart, { ...newrod, quantity: 1 }]
            }
        })
    }






    function Decrement(prodId) {
        setCart(curent => (
            curent.map(item =>
                prodId === item.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)

        ))
    }

    // посчитать сумму при уменьшении и добавлении 




    function Increment(sum) {
        setCart(incValue => (
            incValue.map(item =>
                sum === item.id ?
                    { ...item, quantity: item.quantity + 1 }
                    : item
            )
        ))
    }

    // const newsum = cart.reduce(
    //     (sum, item) => sum + item.quantity * item.price,
    //     0
    // )

    const sum = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0)



    const newsum = cart.reduce(
        (newsum, item) => newsum + item.quantity * item.price,
        0
    )

    function delProducts(id) {
        setCart(favor => {
            const first = favor.findIndex(item => item.id === id)
            if (first !== -1) favor.splice(first, 1)
            return [...favor]
        })
    }





    return (
        <Cartcontext.Provider value={{
            cart,
            sum,
            AddToCart,
            delProducts,
            Decrement,
            Increment,
            newsum

        }}>
            {children}
        </Cartcontext.Provider >
    )
}