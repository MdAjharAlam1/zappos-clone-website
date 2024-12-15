import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from '../ProductCard'

const shopNewItem = [
    {
        id:1,
        title:'Crocks',
        image:'https://m.media-amazon.com/images/I/811f0Lb+iJL._AC_SR768,1024_.jpg',
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
                title:'Classic Cozzzy Slipper',
                productcategroy:"Unisex"
            },
        
        price:'$34.97',
        rating:5,
        numberRating:138,
    },
    {
        id:2,
        title:'Crocs',
        image:'https://m.media-amazon.com/images/I/61w-oG+VOaL._AC_SR768,1024_.jpg',
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
                title:'Classic Holiday Lined Clogs',
                productcategroy:"Unisex"
            },
        
        price:'$37.99',
        rating:5,
        numberRating:3,
    },
    {
        id:3,
        title:'Crocs',
        image:'https://m.media-amazon.com/images/I/81AkoQ21rHL._AC_SR768,1024_.jpg',
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
                title:'Classic Clog-Glitter',
                productcategroy:"Women's"
            },
        
        price:'$54.95',
        rating:5,
        numberRating:5293,
    },
]


function ShopNew() {
    const settings = {
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        // className: 'w-full max-w-3xl mx-auto',
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
        <div>
            <h2 className='text-3xl md:text-2xl font-bold mt-9 mb-14'>Shop New from Crocs</h2>
        <div>
        <div>   
            <Slider {...settings}>
            <div><img src="https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/MELODY-GRID-FEED-CROCS-658x916._FMwebp_.jpg   " alt="" /></div>
            {shopNewItem.map((product)=>{
                return <ProductCard 
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    buttonImage={product.buttonImage}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    numberRating={product.numberRating}
                />
            })}
            </Slider>
        </div>
        </div>
    </div>





    // <div className=" lg:flex-row md:flex flex-row">
    //   {/* Fixed image side */}
    //   <div>
    //         <img className='w-full h-54 ' src="https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/NEW-ARRIVALS-FEED-658x916._SX650_FMwebp_.jpg" alt="" />
    //   </div>
    //   <div 
    //     className="hidden md: w-1/2 bg-cover bg-center"
    //     style={{
    //       backgroundImage: "url('https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/NEW-ARRIVALS-FEED-658x916._SX650_FMwebp_.jpg')",
    //     }}
    //   />

    //   {/* Slider side */}
    //   <div className="w-full md:w-full ">
    //     <Slider {...settings}>
    //             {shopNewItem.map((product)=>{
    //             return <ProductCard
    //                 id={product.id}
    //                 title = {product.title}
    //                 image = {product.image}
    //                 buttonImage = {product.buttonImage}
    //                 description = {product.description}
    //                 price = {product.price}
    //                 rating = {product.rating}
    //                 numberRating = {product.numberRating}

    //             />
    //         })}
    //     </Slider>
    //   </div>
    // </div>
  )
}

export default ShopNew
