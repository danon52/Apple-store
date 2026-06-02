import Link from 'next/link'
import React from 'react'

export default function FooterComp() {
    return (
        <div>
            <footer className='  py-5 text-white w-full h-auto bg-[#181313] lg:hidden'>
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
                        <Link href={'https://x.com/?lang=ru'}>
                            <img className=' w-10' src="Twitter.svg" alt="" />
                        </Link>
                        <Link href={'https://www.facebook.com/'}>
                            <img className='ml-5 w-10' src="Facebook.svg" alt="" />
                        </Link>
                        <Link href={'https://www.tiktok.com/'}>
                            <img className='ml-5 w-10' src="Tiktok.svg" alt="" />
                        </Link>
                        <Link href={'https://www.instagram.com/'}>
                            <img className='ml-5 w-10' src="Instagram.svg" alt="" />
                        </Link>

                    </div>
                </div>

            </footer>


            <div className='hidden lg:block'>
                <footer className=" bg-[#181313] text-[#E6E3DA] font-sans pt-12 pb-6 px-5 md:px-8">
                    <div className="max-w-7xl mx-auto">

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">


                            <div className="lg:col-span-1">
                                <div className="text-2xl font-medium tracking-tight text-[#F0EDE5] mb-3">
                                    cyber
                                </div>
                                <div className="text-sm text-[#CDD2CF] leading-relaxed max-w-xs">
                                    We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                                </div>
                            </div>


                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C2B9A8] mb-4">
                                    Services
                                </h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Services</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Bonus program</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Gift cards</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Credit and payment</a></li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C2B9A8] mb-4">
                                    Agreements
                                </h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Service contracts</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Non-cash account</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Payment</a></li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C2B9A8] mb-4">
                                    Support
                                </h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Assistance to the buyer</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Find an order</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Terms of delivery</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Exchange and return of goods</a></li>
                                </ul>
                            </div>


                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C2B9A8] mb-4">
                                    Legal
                                </h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Guarantee</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Frequently asked questions</a></li>
                                    <li><a href="#" className="text-sm text-[#E0DDD4] hover:text-[#CBBF9A] hover:underline transition">Terms of use of the site</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#AFA99B]">
                            <div>© 2026 cyber — Portland interior design studio</div>
                            <div className="flex gap-5">
                                <a href="#" className="hover:text-[#E3DACA] transition">Privacy policy</a>
                                <a href="#" className="hover:text-[#E3DACA] transition">Accessibility</a>
                                <a href="#" className="hover:text-[#E3DACA] transition">Cookie settings</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
