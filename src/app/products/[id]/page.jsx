
import FooterComp from "../../../components/FooterComp"
import Rating from '@mui/material/Rating';




export default async function ProdictPage({ params }) {

    const param = await params
    const resp = await fetch(`http://localhost:1452/api/products/${param.id}`)
    const data = await resp.json()
    console.log(JSON.stringify(data.characteristics))


    // https://mui.com/material-ui/react-rating/ сделать рейтинг 
    return (
        <div>
            <hr className='text-gray-400' />
            <div className='mt-5'>
                <div className="">
                    <div className="lg:">
                        <div className="lg:flex ">
                            <div className="lg:flex ">
                                <div className='flex  justify-center lg:mt-10 flex justify-start'>
                                    <img className='w-85 lg:w-170' src={`http://localhost:1452/${data.images[0]}`} alt="" />
                                </div>
                                <div>
                                    <div className='flex lg:mt-15' >
                                        <div>
                                        </div>
                                        <p className='text-3xl '>{data.brand}</p>
                                        <div>
                                            <p className='text-3xl ml-2'>{data.name}</p>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                    <div className="lg:flex mt-2">
                                        <div className="hidden lg:block w-35 h-17 flex ">
                                            <div className="lg:flex ">
                                                <p className='text-3xl '>{data.price}₽</p>
                                                <div className="lg:flex w-40  ml-10">
                                                    <p className="text-3xl">Discoutn:</p>
                                                    <p className='text-2xl lg:ml-10 mt-1 text-gray-400 line-through'>  {data.discount_price}₽  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden grid grid-cols-2 gap-4 mt-10 ml-3 lg:grid grid-cols-4  w-200 block' >
                                        {data.characteristics.map((item, prod) => (
                                            <div className='' key={prod}>
                                                <div className='bg-gray-100 w-full rounded-2xl py-5 text-center flex flex-col justify-center h-full min-h-[100px]'>
                                                    <span className='text-lg font-medium'>{item.characteristic}</span>
                                                    <span className='text-lg font-bold text-gray-800 mt-1'>{item.value}</span>
                                                    {item.unit_type && (
                                                        <span className='text-sm text-gray-500 mt-1'>{item.unit_type}</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='hidden mt-3 ml-5 lg:block w-200' >
                                        <p className='text-xl'>
                                            Enhanced capabilities thanks toan
                                            enlarged display of 6.7  inchesand work without rechargingthroughout
                                            the day.  Incredible photosas in weak,
                                            yesand in bright lightusing the new systemwith two cameras more...
                                        </p>
                                        <div className="hidden lg:block mt-3">
                                            <div className="lg:mt-3" >
                                                <button className="w-90 h-15 border  text-xl rounded-2xl"> Add to Wishlist</button>
                                                <button className="w-90 h-15 border bg-black text-white text-xl rounded-xl lg:ml-10" >Add to Card Add</button>
                                            </div>
                                        </div>
                                        <div className="hidden lg:block">

                                            {/* delivery-truck-svgrepo-com (1) 1.svg */}
                                            {/* verify.svg */}
                                        </div>
                                        <div className="mt-2">
                                            <div className="lg:flex">
                                                <div className="lg: flex  ">
                                                    <div className="">
                                                        <div className="lg: w-15 h-15  bg-gray-100  rounded-xl">
                                                            <img className="lg:w-10 ml-2 py-2" src="/delivery.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="lg:mt-2 ml-3">
                                                        <p>Free Delivery</p>
                                                        <div>
                                                            1-2 Day
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg: flex ml-5 ">
                                                    <div className="">
                                                        <div className="lg: w-15 h-15  bg-gray-100  rounded-xl">
                                                            <img className="lg:w-10 ml-2 py-2" src="/shop2.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="lg:mt-2 ml-3">
                                                        <p>In Stock</p>
                                                        <div>
                                                            Today
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="lg: flex  ml-5">
                                                    <div className="">
                                                        <div className="lg: w-15 h-15  bg-gray-100  rounded-xl">
                                                            <img className="lg:w-10 ml-2 py-2" src="/verify.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="lg:mt-2 ml-3">
                                                        <p>Guaranteed </p>
                                                        <div>
                                                            1 year
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='block mt-5 flex lg:hidden'>
                        <div>
                            <p className='text-3xl ml-5'>${data.price}</p>
                        </div>
                        <div>
                            <p className='text-3xl'> ${data.discount_price}  </p>
                        </div>
                    </div>
                    <div className='block grid grid-cols-2 gap-4 mt-10 ml-3 lg:hidden' >
                        {data.characteristics.map((item, prod) => (
                            <div className='' key={prod}>
                                <div className=''  >
                                    <div className=' bg-gray-200 w-45 h-auto rounded-2xl  py-5 text-center'>
                                        <div>
                                            <span className='text-lg'>{item.characteristic}</span>
                                        </div>
                                        <span className='text-lg '>{item.value}</span>
                                    </div>
                                    {/* <span className='ml-10'>{item.unit_type}</span> */}

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='block mt-10 ml-8 lg:hidden'>
                        <p className='text-xs'>
                            Enhanced capabilities thanks toan
                            enlarged display of 6.7  <br />inchesand work without rechargingthroughout
                            the day. <br /> Incredible photosas in weak,
                            yesand in bright lightusing the <br /> new systemwith two cameras more...
                        </p>
                    </div>

                </div>
                <div>
                    <div className="block lg:hidden">
                        <div className="ml-8 mt-10">
                            <p className="text-2xl">Reting</p>
                            <Rating name="no-value" value={data.rating} />
                            {/* добоавить функции добавление товара в корзину и в избранные  */}
                        </div>
                        <div className="flex justify-center mt-5">
                            <button className="w-90 h-15 border  text-xl rounded-2xl"> Add to Wishlist</button>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button className="w-90 h-15 border bg-black text-white text-xl rounded-xl" >Add to Card Add</button>
                        </div>

                    </div>

                </div>



            </div>
            <div className="mt-10">
                <FooterComp />
            </div>
        </div >
    )
}
