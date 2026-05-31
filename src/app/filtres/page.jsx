'use client'

import React from 'react'
import { Slider } from "@/components/ui/slider"

export default function FiltresPAge() {
  return (
    <div>
        <div>
            <p className='text-2xl'>Price</p>
        </div>
        <div className='mt-5 flex justify-center'>
            <hr className='text-gray-400 w-90 ' />
        </div>
        <div className='mt-10'>

      <Slider
      defaultValue={[0]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
      />

      </div>


    </div>
  )
}
