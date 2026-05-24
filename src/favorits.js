'use client'
import { createContext, useEffect, useState } from "react";


export const  FavoritsContext = createContext([])

export function FavoritsProvider({children}){

const [favorits , setFavorits] = useState([])

    useEffect(()=>{
        const Favsaved = localStorage.getItem('favorits')
            if(Favsaved){
            setFavorits(JSON.parse(Favsaved))
            }
    }, [])

 useEffect(()=>{
        localStorage.setItem('favorits' , JSON.stringify(favorits))  
} , [favorits])


    function AddToFavorits(newfavor){
                setFavorits(favor =>{
                    const addfav = favor.find(item => item.id === newfavor.id)
                    if(addfav) {
                        return favor.map(item=> 
                            item.id === newfavor.id
                            ? {...item, quantity: item.quantity + 1}
                        : item
                        )
                    } else return [...favor ,{...newfavor , quantity:1}]
                 })    
    }

  function deleteFromOrder(delfavor) {
    setFavorits(favordel => {
   const index = favordel.findIndex((item) => item.id === delfavor.id)
    if (index !== -1) order.value.splice(index, 1)
    })
 
  }
    
    return (
        <FavoritsContext.Provider value={{favorits , AddToFavorits , deleteFromOrder}}>
                {children}
        </FavoritsContext.Provider>
)
}
