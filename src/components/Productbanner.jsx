import React from 'react'
import Banner from './Banner'

function Productbanner() {
  return (
    <div className=' sm:flex md:flex items-center justify-between text-center gap-6 mb-8 mt-4'>
        <div className=' w-full md:max-w-4xl'>
        <Banner img={'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/AOE-SAM-EDELMAN-STANDARD-960x500._FMwebp_.jpg'}/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-black text-3xl font-bold text-center ms-16 '>Sparkle in Every Step</h2>
            <p className='text-lg ms-16 mt-2'>Soiree-ready styles that say , "I've arrived"</p>
            <h3 className='text-lg ms-20 font-semibold text-center mt-2'><a className='border-b-2 border-black' href="#">Shop Sam Edelman</a></h3>
        </div>
    </div>
  )
}

export default Productbanner
