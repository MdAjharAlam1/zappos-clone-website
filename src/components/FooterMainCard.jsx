import React from 'react'

function FooterMainCard({title,link}) {
  return (
    <div className='flex flex-col gap-1'>
        <h3 className='font-semibold text-xl'>{title}</h3>
        <p className='text-md font-normal hover:text-blue-600 hover:underline'>{link}</p>
    </div>
  )
}

export default FooterMainCard
