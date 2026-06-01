'use client'
import React, { useContext, useEffect, useState } from 'react'
import FooterComp from '../../components/FooterComp'
import { FavoritsContext } from '@/favorits';
import { Cartcontext } from '@/store';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
  const [ValueFilter, setValueFilter] = useState([])

  //filter 


  const newFilter = stateBox
  const newFindElemet = products.filter(item => item.name.startsWith(newFilter))

  console.log(newFilter)
  console.log(newFindElemet)






  useEffect(() => {
    async function GetAllProd() {
      const resp = await fetch('http://localhost:1452/api/products')
      const data = await resp.json()
      setProducst(data)
    }
    GetAllProd()
  }, [])


  const [isOpen, setIsOpen] = useState(false)







  return (
    <div>
      <div className='block flex justify-between px-5 lg:hidden'>


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
                    <div>
                      <DropdownMenuItem>
                        <input id='iPhone' onChange={() => setStateBox('iPhone SE 2022')}
                          checked={stateBox == 'iPhone SE 2022'} data-category='iPhone SE 2022' type="checkbox" />
                        <label htmlFor="iPhone SE 2022">iPhone</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <input id='MacBook' onChange={() => setStateBox('MacBook Pro')}
                          checked={stateBox === ('MacBook')} data-category='MacBook Pro' type="checkbox" />
                        <label htmlFor="MacBook">MacBook</label></DropdownMenuItem>


                      <DropdownMenuItem>
                        <input id='AirPods Max' onChange={() => setStateBox('AirPods Max')}
                          checked={stateBox === 'AirPods Max'} data-category='AirPods Max' type="checkbox" />
                        <label htmlFor="AirPods Max">AirPods Max</label>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <input id='AirPdos Pro' onChange={() => setStateBox('AirPods Pro')}
                          checked={stateBox === 'AirPods Pro'} data-category='AirPods Pro' type="checkbox" />
                        <label htmlFor="AirPods Pro">AirPods Pro</label>
                      </DropdownMenuItem>
                      {/* AirPods */}

                      <DropdownMenuItem><input id='AirPods' onChange={() => setStateBox('AirPods')}
                        checked={stateBox === 'AirPods'} data-category='AirPods' type="checkbox" />
                        <label htmlFor="AirPods">AirPods</label>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <input id='iMac' onChange={() => setStateBox('iMac')}
                          checked={stateBox === 'iMac'} data-category='iMac' type="checkbox" />
                        <label htmlFor="iMac">iMac</label></DropdownMenuItem>
                      <DropdownMenuItem>
                        <input id='iPad Air'
                          onChange={() => setStateBox('iPad Air')}
                          checked={stateBox === 'iPad Air'} data-category='iPad Air' type="checkbox" />
                        <label htmlFor="iPad Air">iPad Air</label></DropdownMenuItem>

                      <DropdownMenuItem><input id='iPad Pro' onChange={() => setStateBox('iPad Pro')}
                        checked={stateBox === 'iPad Pro'} data-category='iPad Pro' type="checkbox" />
                        <label htmlFor="iPad Pro">iPad Pro</label></DropdownMenuItem>
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
                  <DropdownMenuItem><input checked={setStateBox === '8'} onChange={() => setStateBox('8')} type="checkbox" /> <label htmlFor="8"> 8 Gb</label></DropdownMenuItem>
                  <DropdownMenuItem><input checked={setStateBox === '16'} onChange={() => setStateBox('16')} type="checkbox" /> <label htmlFor="16">16 Gb</label></DropdownMenuItem>
                  <DropdownMenuItem><input checked={setStateBox === '24'} onChange={() => setStateBox('24')} type="checkbox" /> <label htmlFor="24"> 24 Gb</label></DropdownMenuItem>
                  <DropdownMenuItem><input checked={setStateBox === '32'} onChange={() => setStateBox('32')} type="checkbox" /> <label htmlFor="32">32  Gb</label></DropdownMenuItem>
                  <DropdownMenuItem><input checked={setStateBox === '64'} onChange={() => setStateBox('64')} type="checkbox" /> <label htmlFor="64">64 Gb</label></DropdownMenuItem>
                  <DropdownMenuItem><input checked={setStateBox === '256'} onChange={() => setStateBox('256')} type="checkbox" /> <label htmlFor="236">256 Gb</label></DropdownMenuItem>
                  <DropdownMenuItem><input checked={setStateBox === '512'} onChange={() => setStateBox('512')} type="checkbox" /> <label htmlFor="512">512 Gb</label></DropdownMenuItem>
                  <DropdownMenuItem><input checked={setStateBox === '1'} onChange={() => setStateBox('1')} type="checkbox" /> <label htmlFor="512">1 Tb</label></DropdownMenuItem>
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



      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex w-[350px] flex-col gap-2">
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">iPhone</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">Toggle details</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="flex flex-col gap-2">
          <div className='hidden lg:block'>
            <input id='iPhone' onChange={() => setStateBox('iPhone')}
              checked={stateBox.includes('iPhone')} data-category='iPhone' type="checkbox" />
            <label htmlFor="iPhone">iPhone</label>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <p>{newFindElemet.length}</p>
      <div className='ml-10'>

        <div>

          <input id='MacBook' onChange={() => setStateBox('MacBook Pro')}
            checked={stateBox === ('MacBook')} data-category='MacBook Pro' type="checkbox" />
          <label htmlFor="MacBook">MacBook</label>
        </div>

        <div>
          <input id='AirPods Max' onChange={() => setStateBox('AirPods Max')}
            checked={stateBox === 'AirPods Max'} data-category='AirPods Max' type="checkbox" />
          <label htmlFor="AirPods Max">AirPods Max</label>
        </div>
        <div>

          <input id='AirPdos Pro' onChange={() => setStateBox('AirPods Pro')}
            checked={stateBox === 'AirPods Pro'} data-category='AirPods Pro' type="checkbox" />
          <label htmlFor="AirPods Pro">AirPods Pro</label>
        </div>
        {/* AirPods */}

        <div>

          <input id='AirPods' onChange={() => setStateBox('AirPods')}
            checked={stateBox === 'AirPods'} data-category='AirPods' type="checkbox" />
          <label htmlFor="AirPods">AirPods</label>
        </div>
        <div>

          <input id='iMac' onChange={() => setStateBox('iMac')}
            checked={stateBox === 'iMac'} data-category='iMac' type="checkbox" />
          <label htmlFor="iMac">iMac</label>
        </div>
        <div>

          <input id='iPad Air'
            onChange={() => setStateBox('iPad Air')}
            checked={stateBox === 'iPad Air'} data-category='iPad Air' type="checkbox" />
          <label htmlFor="iPad Air">iPad Air</label>
        </div>

        <input id='iPad Pro' onChange={() => setStateBox('iPad Pro')}
          checked={stateBox === 'iPad Pro'} data-category='iPad Pro' type="checkbox" />
        <label htmlFor="iPad Pro">iPad Pro</label>
      </div>

      <div className='py-4 ml-5   flex'>
        <p className='text-2xl'>Products result:</p>
        <p className='text-2xl'>{newFindElemet.length}</p>
      </div>

      <div className='block grid grid-cols-2 gap-10 lg:hidden'>

        {newFindElemet.map((item) => (
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


      <div className='hidden lg:grid block grid-cols-4 gap-10 ml-30'>
        {newFindElemet.map((item) => (
          <div className='' key={item.id}>
            <div className=''>
              <div className=''>
                <div className=''>
                  <div className='bg-gray-200 rounded-lg w-70 h-100 '>
                    <div className='flex justify-end'>
                      <button onClick={() => AddToFavorits()} className='absolute  '>
                        <img src="Favorites.svg" alt="" />
                      </button>
                    </div>
                    <div>
                      <Link href={`/products/${item.id}`}>
                        <div className=''>
                          <img className='w-50 lg:w-60 py-6 ml-4' src={`http://localhost:1452/${item.images[0]}`} alt="" />
                        </div>
                        <div className='lg:text-center'>
                          <p>{item.name}</p>
                          <p>{item.price} ₽ </p>
                        </div>
                      </Link>
                    </div>
                    <div className='lg:flex justify-center'>
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