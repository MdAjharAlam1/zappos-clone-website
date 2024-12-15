import React from 'react'

function Banner({img}) {
  return (
    <div className='mt-8'>
      <img className='w-full h-full ' src={img} alt="" />
    </div>
  )
}

export default Banner;
