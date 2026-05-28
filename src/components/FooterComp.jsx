import Link from 'next/link'
import React from 'react'

export default function FooterComp() {
  return (
    <div>
            <footer className=' py-5 text-white w-full h-auto bg-[#181313]'>
                <div>
                        <div className='flex justify-center'>
                            <p className='text-3xl'>cyber</p>
                               
                        </div>
                         <div className='text-center'>
                                    <p className='text-gray-400'>We are a residential interior design firm located in <br />
                                        </p>
                                    <p className='text-gray-400'> Portland. Our boutique-studio offers more than</p>
                                </div>
                            <div>
                                <div className='py-3 flex justify-center'>
                    <p className='text-xl '>Services</p>

                                </div>
                            <div className='text-center text-gray-400'>
                                <p className='py-4'>Bonus Program</p>
                                <p>Gift cards </p>
                                <p className='py-4'>cretid and payment </p>
                                <p>Services contaracts </p>
                                <p className='py-4'>Non-cash account </p>
                                <p>Payment</p>
                            </div>
                            
                            </div>

            <div>

            <div className='text-center py-3'>
                <p className='text-2xl'>Assistance to the buyer</p>
            </div>
                </div>

                <div className='text-gray-400 text-center'>
                    <p className='py-4'>Find an order</p>
                    <p>Terms of delivery</p>
                    <p className='py-4'>Exchange and return of goods</p>
                    <p>Guarantee</p>
                    <p className='py-4'>Frequently asked questions</p>
                    <p>Terms of use of the site</p>
                </div>
                <div className='flex py-5 justify-center'>
                    <Link  href={'https://x.com/?lang=ru'}>
                        <img className=' w-10' src="Twitter.svg" alt="" />
                    </Link>
                      <Link href={'https://www.facebook.com/'}>
                        <img  className='ml-5 w-10' src="Facebook.svg" alt="" />
                    </Link>
                    <Link href={'https://www.tiktok.com/'}>
                        <img className='ml-5 w-10'  src="Tiktok.svg" alt="" />
                    </Link>
                    <Link href={'https://www.instagram.com/'}>
                        <img className='ml-5 w-10' src="Instagram.svg" alt="" />
                    </Link>
                  
                </div>
            </div>

            </footer>
    </div>
  )
}
