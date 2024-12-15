import React from 'react'
import SaveShopCard from './SaveShopCard'


const saveShopdata = [
    {
        id:1,
        image:'https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-2-VIP-896x300._FMwebp_.png',
    },
    {
        id:2,
        image:'https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-1-PRIME-896x300._FMwebp_.png',
    },
    {
        id:3,
        image:'https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-3-APP-896x300._FMwebp_.png',
    }
]

function SaveShop() {
  return (
    <div>
         <h2 className='text-2xl font-bold mt-9 mb-3'>Way to Shop & Save!</h2>
        <div className='flex flex-col md:flex-row gap-6 mt-5'>
            {
                saveShopdata.map((item)=>{
                  return <SaveShopCard key={item.id} img={item.image}/>  
                })
            }
        </div>
    </div>
  )
}

export default SaveShop
