import React from 'react'
import { useState } from 'react'
function ProductCard({key,title,image,buttonImage,description,price,rating,numberRating}) {
    const [isWishlisted, setIsWishlisted] = useState(false)
    
  
    return (
      <div className="w-full max-w-sm p-4 relative border mt-3 ms-4 " key={key}>
        {/* Wishlist Button */}
        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute right-6 top-6 z-10 rounded-full p-2 bg-white shadow-sm"
        >
          {/* <Heart 
            className={`w-5 h-5 ${isWishlisted ? 'fill-black' : 'fill-none'}`} 
          /> */}
        </button>
  
        {/* Product Image */}
        <div className="relative aspect-square mb-4 h-56 flex items-center justify-center">
          <img 
            src={image}
            alt={description.title}
            className="w-full h-full object-cover rounded-md ms-4"
          />
        </div>
  
        {/* Color Options */}
        <div className="flex items-center gap-2 mb-2 space-y-4">
          {buttonImage.map((item) => (
            <button
              key={item.id}
              className= 'w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-colors'
            >
                <img className='w-full h-full rounded-full cursor-pointer object-fit ' src={item.img} alt="" />
            </button>
          ))}
          <button className="text-sm text-gray-600">+6</button>
        </div>
  
        {/* Product Info */}
        <div className="space-y-2">
          <div className="font-bold text-lg">{title}</div>
          <div className="text-lg">{description.title}</div>
          <div className="text-gray-600">{description.productcategroy}</div>
          
          <div className="flex flex-col justify-between mt-2">
            <div className="text-xl font-bold">{price}</div>
            <div className="flex items-center gap-5">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
                <svg
                  className="w-5 h-5 fill-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
              <span className="text-gray-600">({numberRating})</span>
            </div>
          </div>
        </div>
      </div>
    )
}
  
export default ProductCard;