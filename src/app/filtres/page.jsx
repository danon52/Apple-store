'use client'

import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

        
        
export default function FiltresPAge() {


      const [isOpen, setIsOpen] = React.useState(false)
        const [count , setCount ] = useState([0])



    const Value = (event)=> {
        const newValue = Number(event.target.value)
        setCount(newValue)
    }

  return (
    <div>
         <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
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
        onChange={Value}
/>
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
  )
}
