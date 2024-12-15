import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from './ProductCard'

const ProductCategoryItems = [
    {
        id:1,
        title:'KEEN',
        image:'https://m.media-amazon.com/images/I/71r3LGqmr2L._AC_SR768,1024_.jpg',
        buttonImage : [
            {    
                id:1,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6420031.webp',
            },
            {
                id:2,
                img: 'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6420026.webp',
            },
            {
                id:3,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6235902.webp',
            },
            {
                id:4,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6235907.webp',
            }


        ],
        
        description : 
            {
                title:'Howser III Slide',
                productcategroy:"Women's"
            },
        price:'$99.95',
        rating:'4',
        numberRating:'200',
    },
    {
        id:2,
        title:'Hunter Kids',
        image:'https://m.media-amazon.com/images/I/714NSapksyL._AC_SR768,1024_.jpg',
        buttonImage : [
            {    
                id:1,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6420031.webp',
            },
            {
                id:2,
                img: 'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6420026.webp',
            },
            {
                id:3,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6235902.webp',
            },
            {
                id:4,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6235907.webp',
            }


        ],
        description : 
            {
                title:'Cozy (Little Kid/Big Kid)',
                productcategroy:""
            },
        price:'$120.00',
        rating:'',
        numberRating:'',
    },
    {
        id:3,
        title:'Hey Dude',
        image:'https://m.media-amazon.com/images/I/71hMdZ4gC-L._AC_SR768,1024_.jpg',
        buttonImage : [
            {    
                id:1,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6420031.webp',
            },
            {
                id:2,
                img: 'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6420026.webp',
            },
            {
                id:3,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6235902.webp',
            },
            {
                id:4,
                img:'https://swch-cl2.olympus.zappos.com/webp/fabric/27567/27570/9523231/6235907.webp',
            }


        ],
        description : 
            {
                title:'Wendy Disco Sequin',
                productcategroy:"Women's"
            },
        
        price:'$69.99',
        rating:5,
        numberRating:8,
    },
    
    

]

function ProductCategory() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        className: 'w-full max-w-xl mx-auto',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:2,
              slidesToScroll: 1,
              initialSlide: 1,
            //   dots:true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          }
        ]
    }
    
    
    
  return (
    <div className=" lg:flex-row md:flex flex-row">
      {/* Fixed image side */}
      <div>
            <img className='w-full h-54 ' src="https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/NEW-ARRIVALS-FEED-658x916._SX650_FMwebp_.jpg" alt="" />
      </div>
      <div 
        className="hidden md: w-[100px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/NEW-ARRIVALS-FEED-658x916._SX650_FMwebp_.jpg')",
        }}
      />

      {/* Slider side */}
      <div className="w-full md:w-full flex items-center justify-center ">
        <Slider {...settings}>
                {ProductCategoryItems.map((product)=>{
                return <ProductCard
                    key={product.id}
                    title = {product.title}
                    image = {product.image}
                    buttonImage = {product.buttonImage}
                    description = {product.description}
                    price = {product.price}
                    rating = {product.rating}
                    numberRating = {product.numberRating}

                />
            })}
        </Slider>
      </div>
    </div>
  )
}

export default ProductCategory
