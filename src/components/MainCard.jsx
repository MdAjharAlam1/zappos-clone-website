import React from 'react'
import Card from './Card'


const mainCardItem = [
    {
        link:'Shop the Looks',
        imgLink:'https://p.itc.zappos/prod/?w=1440&h=-1&url=https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/HERO-1-A-UGG-1440x700.gif'
    },
    {
        link:'Shop All UGG',
        imgLink:'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/HERO-1-B-UGG-1440x700._FMwebp_.jpg'
    },
    
    

]

function MainCard() {
    // 
  return (
    <div className='md:grid grid-cols-2 gap-5 mt-12'>
        
        {
            mainCardItem.map((item)=>{
                return <Card link = {item.link} img={item.imgLink}/>
            })
        }
    </div>
  )
}

export default MainCard
