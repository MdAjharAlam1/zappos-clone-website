import React from 'react'

function Navlink({id,title}) {
  return (
    <h3 key={id} className='font-semibold'>{title}</h3>
  )
}

export default Navlink
