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
    <div><DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

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
              {/* выпадающий список  */}
              <p className='py-4 px-2 text-xl'> by Reting</p>
            </div>
          </div>
        </div>
      </div>
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
