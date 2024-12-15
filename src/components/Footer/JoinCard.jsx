import React from 'react'

function JoinCard() {
  return (
    <div className='w-full bg-blue-100'>
        <div className=' ms-5 max-w-2xl flex flex-col gap-4 p-8 '>
            <h2 className='text-2xl font-bold'>Join Our List, Get 10% Off</h2>
            <p className='font-medium text-md'>Sign up for Zappos emails—new subscribers get 10% off a future order!* Plus, get early access to sales, coupons, and more. (One code per email address.)</p>
            <div className='flex flex-col md:flex-row gap-8'>
                <input className='p-3 rounded-md md:w-[50%] ' type="text" placeholder="Enter Email"/>
                <button className='p-3 bg-black text-white rounded-md text-xl font-medium md:px-10 p'>Join Party</button>
            </div>
        </div>
    </div>
  )
}

export default JoinCard
 