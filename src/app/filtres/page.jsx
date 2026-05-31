'use client'
import React, { useEffect, useState } from 'react'

import { Slider } from "@/components/ui/slider"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import FooterComp from '../../components/FooterComp'
import Link from 'next/link'



export default function FiltresPage() {


    const [isOpen, setIsOpen] = React.useState(false)
    const [count, setCount] = useState([0])
    const [oneOpen, setOneOpne] = useState(false)
    const [secOpen, setSecOpen] = useState(false)

    const Value = (event) => {
        const newValue = Number(event.target.value)
        setCount(newValue)
    }




    return (
        <div>

            <div className=''>
                <Collapsible
                    open={oneOpen}
                    onOpenChange={setOneOpne}
                    className="flex w-[350px] flex-col gap-2">
                    <div className="flex items-center justify-between gap-4 px-4">
                        <h4 className="text-xl font-semibold">Price</h4>
                        <CollapsibleTrigger asChild>
                            <ChevronsUpDown />
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="flex flex-col gap-2">
                        <div className='py-5 flex justify-between' >
                            <div className='ml-7'>
                                <div className='flex justify-start'>

                                    <p className='text-xl text-gray-400'> From</p>
                                </div>
                                <div className='w-30  h-10 border'>
                                    <p className='text-xl mt-1 px-2'>{count}</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-end'>
                                    <p className='text-xl text-gray-400'>To</p>
                                </div>
                                <div className='w-30  h-10 border'>
                                    <p className=' text-end text-xl mt-1 px-2'>{count}</p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-5'>
                            <input type="range"
                                className='w-full'
                                value={count}
                                onChange={Value} />
                        </div>
                    </CollapsibleContent>
                </Collapsible>


                <div className='mt-10'>
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="flex w-[350px] flex-col gap-2">


                        <div className="flex items-center justify-between gap-4 px-4">
                            <h4 className="text-xl font-semibold">Type</h4>
                            <CollapsibleTrigger asChild>
                                <ChevronsUpDown />
                            </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="flex flex-col gap-2 ">
                            <div className='w-full ml-5 py-5 '>
                                <input className='bg-gray-100 w-75 h-10  border px-4' placeholder='Search' type="text" name="" id="" />
                            </div>
                            <div className='ml-5 '>
                                <input className='w-5 h-5' type="checkbox" />
                                <label className='text-xl ml-5' htmlFor="">Iphone</label>
                                <div>
                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">
                                        MacBook
                                    </label>

                                </div>
                                <div>

                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">Apple Watch</label>

                                </div>
                                <div>
                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">
                                        IMac
                                    </label>
                                </div>
                                <div>
                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">
                                        AirPods Max
                                    </label>

                                </div>
                                <input className='w-5 h-5' type="checkbox" />
                                <label className='text-xl ml-5' htmlFor="">
                                    AirPods Pro
                                </label>
                                <div>
                                </div>
                                <input className='w-5 h-5' type="checkbox" />
                                <label className='text-xl ml-5' htmlFor="">AirPods</label>
                                <div>
                                    <input className='w-5 h-5 ' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">iPad Air</label>
                                </div>
                                <div>
                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">iPad Pro</label>
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className='ml-5'>


                                {/* 
        <Slider 
        value = {[count]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
      /> */}
                            </div>

                        </CollapsibleContent>

                    </Collapsible>


                </div>



                <div className='mt-10'>
                    <Collapsible
                        open={secOpen}
                        onOpenChange={setSecOpen}
                        className="flex w-[350px] flex-col gap-2">


                        <div className="flex items-center justify-between gap-4 px-4">
                            <h4 className="text-xl font-semibold">Built-in memory</h4>
                            <CollapsibleTrigger asChild>
                                <ChevronsUpDown />
                            </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="flex flex-col gap-2 ">
                            <div className='w-full ml-5 py-5 '>
                                <input className='bg-gray-100 w-75 h-10  border px-4' placeholder='Search' type="text" name="" id="" />
                            </div>
                            <div className='ml-5 '>
                                <input className='w-5 h-5' type="checkbox" />
                                <label className='text-xl ml-5' htmlFor="">16 Gb</label>
                                <div>
                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">
                                        32 Gb
                                    </label>

                                </div>
                                <div>

                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">64 Gb </label>
                                </div>
                                <div>
                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">
                                        128 Gb
                                    </label>
                                </div>
                                <div>
                                    <input className='w-5 h-5' type="checkbox" />
                                    <label className='text-xl ml-5' htmlFor="">
                                        265 Gb
                                    </label>
                                </div>
                                <input className='w-5 h-5' type="checkbox" />
                                <label className='text-xl ml-5' htmlFor="">
                                    512 Gb
                                </label>
                                <div>
                                </div>
                                <input className='w-5 h-5' type="checkbox" />
                                <label className='text-xl ml-4' htmlFor=""> 1 Tb </label>
                            </div>
                            <div>
                            </div>
                            <div className='ml-5'>



                            </div>

                        </CollapsibleContent>

                    </Collapsible>


                </div>

            </div>
            <div className='flex justify-center mt-10'>
                <Link href={'/main'}>
                    <button className='w-90 rounded-lg h-10 bg-black text-white'>Apply</button>
                </Link>
            </div>

            <div className='mt-10'>
                <FooterComp />
            </div>
        </div>

    )
}
