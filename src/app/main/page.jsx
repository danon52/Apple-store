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
import Rating from '@mui/material/Rating';


export default function MainPage() {


  const [products, setProducst] = useState([])

  const { AddToFavorits } = useContext(FavoritsContext)
  const { AddToCart } = useContext(Cartcontext)


  const [stateBox, setStateBox] = useState([])




  useEffect(() => {
    async function GetAllProd() {
      const resp = await fetch('http://localhost:1452/api/products')
      const data = await resp.json()
      setProducst(data)

    }
    GetAllProd()
  }, [])



  function Filter() {
    if (stateBox === setStateBox) {
      setProducst(
        products.filter(item => {
          return item.name === products.name
        }))
      console.log(stateBox)
    }
  }
  Filter()
  // При фильтрации ты проверяешь: если категория товара есть в выбранных
  // Категориях → показывать




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
                  <DropdownMenuSubContent >
                    <form onChange={() => Filter()} action=''>
                      <div>
                        <DropdownMenuItem>
                          <input
                            id='Iphone'
                            onChange={() => setStateBox('Iphone')}
                            checked={stateBox.includes('Iphone')}
                            data-contgory='Iphone'
                            type="checkbox" />
                          <label htmlFor="iphone">Iphone</label></DropdownMenuItem>

                        <DropdownMenuItem><input id='Macbook' onChange={() => setStateBox('MacBook')}
                          checked={stateBox.includes('MacBook')} data-category='MacBook' type="checkbox" />
                          <label htmlFor="macbook">MacBook</label> </DropdownMenuItem>

                        <DropdownMenuItem><input id='AirPods Max' onChange={() => setStateBox('AirPods Max')}
                          checked={stateBox.includes('AirPods Max')} data-category='AirPods Max' type="checkbox" />
                          <label htmlFor="airpods-max">AirPods Max</label></DropdownMenuItem>

                        <DropdownMenuItem><input id='AirPdos Pro' onChange={() => setStateBox('AirPods Pro')}
                          checked={stateBox.includes('AirPods Pro')} data-category='AirPods Pro' type="checkbox" />
                          <label htmlFor="airpods-pro">AirPods Pro</label>
                        </DropdownMenuItem>

                        <DropdownMenuItem><input id='AirPods' onChange={() => setStateBox('AirPods')}
                          checked={stateBox.includes('AirPods')} data-category='AirPods' type="checkbox" />
                          <label htmlFor="airpods">AirPods</label>
                        </DropdownMenuItem>

                        <DropdownMenuItem><input id='iMac' onChange={() => setStateBox('iMac')}
                          checked={stateBox.includes('iMac')} data-category='iMac' type="checkbox" />
                          <label htmlFor="imac">iMac</label></DropdownMenuItem>

                        <DropdownMenuItem>
                          <input id='iPad Air'
                            onChange={() => setStateBox('iPad Air')}
                            checked={stateBox.includes('iPad Air')} data-category='iPad Air' type="checkbox" />
                          <label htmlFor="ipad-air">iPad Air</label></DropdownMenuItem>

                        <DropdownMenuItem><input id='iPad Pro' onChange={() => setStateBox('iPad Pro')}
                          checked={stateBox.includes('iPad Pro ')} data-category='iPad Pro' type="checkbox" />
                          <label htmlFor="ipad-pro">iPad Pro</label></DropdownMenuItem>

                        <DropdownMenuSeparator />
                      </div>
                    </form>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Built-in memory </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <form action="">

                  <DropdownMenuSubContent>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor=""> 8 Gb</label></DropdownMenuItem>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">16 Gb</label></DropdownMenuItem>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor=""> 24 Gb</label></DropdownMenuItem>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">32  Gb</label></DropdownMenuItem>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">64 Gb</label></DropdownMenuItem>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">256 Gb</label></DropdownMenuItem>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">512 Gb</label></DropdownMenuItem>
                    <DropdownMenuItem><input type="checkbox" /> <label htmlFor=""> 1 Tb </label></DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </DropdownMenuSubContent>
                </form>
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
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">
                        <Rating name="no-value" value={1} />
                      </label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">
                        <Rating name="no-value" value={2} />
                      </label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">
                        <Rating name="no-value" value={3} />
                      </label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">
                        <Rating name="no-value" value={4} />
                      </label></DropdownMenuItem>
                      <DropdownMenuItem><input type="checkbox" /> <label htmlFor="">
                        <Rating name="no-value" value={5} />
                      </label></DropdownMenuItem>
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