import React from 'react'
import Card from './Card'


const categoryListItem = [
    {
        link:'Lifestyle Sneakers',
        imgLink :'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRENDING-CATEGORY-1-SNEAKERS-432x540._FMwebp_.jpg'
    },
    {
        link:'Boots',
        imgLink :'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRENDING-CATEGORY-2-BOOTS-432x540._FMwebp_.jpg'
    },
    {
        link:'Heels',
        imgLink :'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRENDING-CATEGORY-3-HEELS-432x540._FMwebp_.jpg'
    },
    {
        link:'Loafers',
        imgLink :'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRENDING-CATEGORY-4-FLATS-432x540._FMwebp_.jpg'
    },
    {
        link:'SleepWear',
        imgLink :'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRENDING-CATEGORY-5-SLEEPWEAR-432x540._FMwebp_.jpg'
    },
    {
        link:'Slippers',
        imgLink :'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRENDING-CATEGORY-6-SLIPPERS-432x540._FMwebp_.jpg'
    },

]



function CategoryCard() {

  return (
    <div>
      <h2 className='text-2xl font-bold mt-9 mb-3'>Trending Now</h2>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-4 mt-4 mb-6'>
        {
            categoryListItem.map((category)=>{
                return <Card link = {category.link} img={category.imgLink}/>
            })
        }
      </div>
    </div>
  )
}

export default CategoryCard
