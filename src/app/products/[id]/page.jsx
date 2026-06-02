"use client";

import FooterComp from "../../../components/FooterComp";
import Rating from '@mui/material/Rating';
import { useContext, useEffect, useState } from "react";
import { Cartcontext } from '@/store';
import { FavoritsContext } from '@/favorits';
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductPage({ params }) {
    const [data, setData] = useState(null)
    const { AddToFavorits } = useContext(FavoritsContext)
    const { AddToCart } = useContext(Cartcontext)

    useEffect(() => {
        async function getIdElemtnt() {
            const param = await params;
            const resp = await fetch(`http://localhost:1452/api/products/${param.id}`);
            const productData = await resp.json();
            setData(productData);
        }
        getIdElemtnt();
    }, [params]);

    if (!data) {
        return data
    }

    return (
        <div>
            <hr className='text-gray-400' />
            <div className='mt-5'>
                <div className="">
                    <div className="lg:">
                        <div className="lg:flex ">
                            <div className="lg:flex ">

                                {/* Изображение с сохранением пропорций */}
                                <div className='flex justify-center lg:mt-10 lg:justify-start'>
                                    <img
                                        className='w-60 object-contain lg:w-170 ml-10'
                                        src={`http://localhost:1452/${data.images?.[0]}`}
                                        alt={data.name}
                                    />
                                </div>

                                <div>
                                    <div className='flex justify-center ml-5 lg:mt-15' >
                                        <p className='text-3xl '>{data.brand}</p>
                                        <p className='text-3xl '>{data.name}</p>
                                    </div>
                                    <div className="text-center mt-2">
                                        <p className='text-3xl'>{data.price}₽</p>
                                    </div>
                                    <div className="lg:flex mt-2">
                                        <div className="hidden lg:block w-35 h-17">
                                            <div className="lg:flex ">
                                                <div className="lg:flex w-40 ml-10">
                                                    <p className="text-3xl">Discoutn:</p>
                                                    <p className='text-2xl lg:ml-10 mt-1 text-gray-400 line-through'>{data.discount_price}₽</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 ml-3 lg:grid-cols-4'>
                                        {data.characteristics?.map((item, prod) => (
                                            <div className='bg-gray-100 w-full rounded-2xl py-5 text-center flex flex-col justify-center h-full min-h-[100px]' key={prod}>
                                                <p className='text-lg font-medium'>{item.characteristic}</p>
                                                <p className='text-lg font-bold text-gray-800 mt-1'>{item.value}</p>
                                                {item.unit_type && (
                                                    <p className='text-sm text-gray-500 mt-1'>{item.unit_type}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='hidden mt-3 ml-5 lg:block w-200'>
                                        <p className='text-xl'>
                                            Enhanced capabilities thanks toan
                                            enlarged display of 6.7 inches and work without recharging throughout
                                            the day. Incredible photos as in weak,
                                            and in bright light using the new system with two cameras more...
                                        </p>
                                        <div className="hidden lg:block mt-3">
                                            <div className="lg:mt-3">
                                                <button onClick={() => AddToFavorits(data.id)} className="w-90 h-15 border text-xl rounded-2xl">Add to Wishlist</button>
                                                <button onClick={() => AddToCart(data.id)} className="w-90 h-15 border bg-black text-white text-xl rounded-xl lg:ml-10">Add to Card Add</button>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <div className="lg:flex">
                                                <div className="lg:flex">
                                                    <div className="lg:w-15 h-15 bg-gray-100 rounded-xl">
                                                        <img className="lg:w-10 ml-2 py-2" src="/delivery.svg" alt="" />
                                                    </div>
                                                    <div className="lg:mt-2 ml-3">
                                                        <p>Free Delivery</p>
                                                        <div>1-2 Day</div>
                                                    </div>
                                                </div>
                                                <div className="lg:flex ml-5">
                                                    <div className="lg:w-15 h-15 bg-gray-100 rounded-xl">
                                                        <img className="lg:w-10 ml-2 py-2" src="/shop2.svg" alt="" />
                                                    </div>
                                                    <div className="lg:mt-2 ml-3">
                                                        <p>In Stock</p>
                                                        <div>Today</div>
                                                    </div>
                                                </div>
                                                <div className="lg:flex ml-5">
                                                    <div className="lg:w-15 h-15 bg-gray-100 rounded-xl">
                                                        <img className="lg:w-10 ml-2 py-2" src="/verify.svg" alt="" />
                                                    </div>
                                                    <div className="lg:mt-2 ml-3">
                                                        <p>Guaranteed</p>
                                                        <div>1 year</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block mt-10">
                        <p className="text-3xl ml-33">Deteils</p>
                        <div className="lg:flex justify-center mt-10">
                            <div className="lg:text-start">
                                <p className="text-xl text-gray-300">
                                    Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced <br />
                                    technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. <br />
                                    And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the <br />
                                    products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-40 h-30 bg-gray-100 rounded-2xl ml-10 mt-20">
                            <p className="lg:text-5xl ml-10 py-3">{data.rating}</p>
                            <div className="lg:ml-3">
                                <Rating name="no-value" value={data.rating} />
                            </div>
                        </div>
                    </div>

                    <div className='block mt-10 ml-8 lg:hidden'>
                        <p className='text-xs'>
                            Enhanced capabilities thanks toan
                            enlarged display of 6.7 <br />inches and work without recharging throughout
                            the day. <br /> Incredible photos as in weak,
                            and in bright light using the <br /> new system with two cameras more...
                        </p>
                    </div>
                </div>

                <div>
                    <div className="block lg:hidden">
                        <div className="ml-8 mt-10">
                            <p className="text-2xl">Reting</p>
                            <Rating name="no-value" value={data.rating} />
                        </div>
                        <div className="flex justify-center mt-5">
                            <button onClick={() => AddToFavorits(data)} className="w-90 h-15 border text-xl rounded-2xl">Add to Wishlist</button>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button onClick={() => AddToCart(data)} className="w-90 h-15 border bg-black text-white text-xl rounded-xl">Add to Card Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <FooterComp />
            </div>
        </div>
    );
}