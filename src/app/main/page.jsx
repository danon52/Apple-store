'use client'
import React, { useContext, useEffect, useState } from 'react'
import FooterComp from '../../components/FooterComp'
import { FavoritsContext } from '@/favorits';
import { Cartcontext } from '@/store';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function MainPage() {


  const [products, setProducst] = useState([])

  const { AddToFavorits } = useContext(FavoritsContext)
  const { AddToCart } = useContext(Cartcontext)





  useEffect(() => {
    async function GetAllProd() {
      const resp = await fetch('http://localhost:1452/api/products')
      const data = await resp.json()
      setProducst(data)
      console.log(data)
    }
    GetAllProd()

  }, [])

  return (
    <div>
      <div className='flex justify-between px-5'>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='w-40 h-10' variant="outline">Filtres</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-50" align="start">
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Type</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <div>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">Iphone</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">MacBook</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">AirPods Max</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">AirPods Pro</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">AirPods</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">iMac</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">iPad Air</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">iPad Pro </label></DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </div>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Built-in memory </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>8  gb </DropdownMenuItem>
                  <DropdownMenuItem>16 gb </DropdownMenuItem>
                  <DropdownMenuItem>24 gb</DropdownMenuItem>
                  <DropdownMenuItem>32 gb</DropdownMenuItem>
                  <DropdownMenuItem>64 gb</DropdownMenuItem>
                  <DropdownMenuItem>256 gb</DropdownMenuItem>
                  <DropdownMenuItem>512 gb</DropdownMenuItem>
                  <DropdownMenuItem>1 Tb</DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='w-40 h-10' variant="outline">by reiting</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-50" align="start">
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Reting</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <div>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">Iphone</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">MacBook</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">AirPods Max</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">AirPods Pro</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">AirPods</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">iMac</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">iPad Air</label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">iPad Pro </label></DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </div>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* 
      <div className='flex ml-2 justify-between'>
        <div className=''>
          <div className=' border  rounded-xl  w-45 h-15'>
            <div className=''>
              <Link href={'/filtres'}>
                <p className='py-4 px-2 text-xl'>filtres</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='mr-2' >
          <div className=' border  rounded-xl  w-45 h-15'>
            <div className=''>

              <p className='py-4 px-2 text-xl'> by Reting</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className='py-4 ml-5   flex'>
        <p className='text-2xl'>Products result:</p>
        <p className='text-2xl'>{products.length}</p>
      </div>

      <div className='bg- grid grid-cols-2 gap-10 '>
        {products.map((item) => (
          <div className='' key={item.id}>

            <div className=''>
              <div className=''>
                <div className=''>
                  <div className='text-center h-75   '>
                    <div className='flex justify-end'>
                      <button onClick={() => AddToFavorits()} className='absolute  '>
                        <img src="Favorites.svg" alt="" />
                      </button>
                    </div>
                    <div>
                      <Link href={`/products/${item.id}`}>
                        <div className='mr-2'>
                          <img className='  w-50' src={`http://localhost:1452/${item.images[0]}`} alt="" />
                        </div>
                        <div className=''>
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                      </Link>
                    </div>
                    <div className='mt-4'>
                      <button onClick={() => AddToCart()} className='bg-black w-40 h-13 text-white rounded-lg'> By  Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))
        }
      </div>









      {/* ---------------------- */}
      <div>
        {/* <FooterComp/> */}
      </div>
    </div>
  )

}