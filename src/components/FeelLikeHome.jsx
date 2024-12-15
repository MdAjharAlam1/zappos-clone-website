import React from 'react'
import Card from './Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const feelLikeHomeItem = [
    {
        link:'Shop UGG Boots',
        imgLink:'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRIPTYCH-1-UGG-BOOTS-896x1100._FMwebp_.jpg'
    },
    {
        link:'Shop UGG Classics',
        imgLink:'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRIPTYCH-2-UGG-CLASSICS-896x1100._FMwebp_.jpg'
    },
    {
        link:'Shop UGG Kids',
        imgLink:'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/TRIPTYCH-3-UGG-KIDS-896x1100._FMwebp_.jpg'
    }
]

function FeelLikeHome() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
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
      };
  return (
    <div className='w-[110%] -mx-4 lg:-mx-20 md:w-[110%] bg-[#f2ebdf] me-2 -mx-20 p-2 mb-5'>
        <div className='w-[90%] mx-auto p-1'>
            <h2 className='text-2xl font-bold mt-9 mb-3'>Feel Like Home</h2>
            <div className='flex  flex-col md:flex-row gap-6'>
                <Slider {...settings}>

                {
                    feelLikeHomeItem.map((item)=>{
                        return <Card link={item.link} img={item.imgLink}/>
                    })
                }
                </Slider>
            </div>
           
        </div>
      
    </div>
  )
}

export default FeelLikeHome
