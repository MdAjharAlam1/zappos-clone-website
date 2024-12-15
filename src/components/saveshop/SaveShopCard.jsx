import React from 'react'

function SaveShopCard({key,img}) {
  return (
    <div key={key}>
      <img src={img} alt="" />
    </div>
  )
}

export default SaveShopCard
