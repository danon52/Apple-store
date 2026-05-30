import FooterComp from "../../../components/FooterComp"






export default async  function ProdictPage({params}) {

            
    
    const param = await params
    const resp = await fetch(`http://localhost:1452/api/products/${param.id}`)
    const data = await resp.json()      
    console.log(JSON.stringify(data.characteristics))
    

// https://mui.com/material-ui/react-rating/ сделать рейтинг 
  return (
    <div>
        <hr className='text-gray-400' />
            <div className='mt-5'> 
                <div className='flex  justify-center'>
            <img  className='w-85' src={`http://localhost:1452/${data.images[0]}`} alt="" />
                </div>
            <div>
                <div className='flex' >
            <p className='text-3xl '>{data.brand}</p> 
            <p className='text-3xl ml-2'>{data.name}</p>
                </div>
                <div className='mt-5 flex'>
            <p className='text-3xl ml-5'>${data.price}</p>
            <p className='text-3xl'> ${data.discount_price}  </p>
                </div>
            <div className='grid grid-cols-2 gap-4 mt-10' >
            {data.characteristics.map((item , prod)  => (
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
              <div className='mt-10 ml-8'>
                <p className='text-xs'>
                    Enhanced capabilities thanks toan
                     enlarged display of 6.7  <br />inchesand work without rechargingthroughout
                      the day. <br /> Incredible photosas in weak,
                     yesand in bright lightusing the <br /> new systemwith two cameras more...
                </p>
            </div>
            </div>
            <div>
                 <div className="flex justify-center mt-5">
                <button className="w-90 h-15 border  text-xl rounded-2xl"> Add to Wishlist</button>
            </div>

            <div className="flex justify-center mt-5">
                <button className="w-90 h-15 border bg-black text-white text-xl rounded-xl" >Add to Card Add</button>
            </div>
           
            </div>

            
            </div>
                <div className="mt-10">
                    <FooterComp />
                </div>
    </div>
  )
}
