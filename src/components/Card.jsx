import React from 'react'

function Card({link,img}) {
  return (
    <div className='mt-3'>
        <div>
            <picture>
                <img src={img} alt="" />
            </picture>
        </div>
        <div className='text-center mt-2 mb-4'>
            <h2><a className='font-bold text-md mt-4 border-b-2 border-black' href="#">{link}</a></h2>
        </div>
    </div>
  )
}

export default Card
