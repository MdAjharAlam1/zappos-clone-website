import React from 'react'
import Card from './Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const wantinspiration = [
    {
        link:'Shop Hunter',
        imgLink:'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/W-ZAPPOSHP-HUNTER1-NOVDEC2024-TSR._FMwebp_.jpg'
    },
    {
        link:'Shop Pretty Extravaganza',
        imgLink:'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/W-ZAPPOSHP-PRETTYEXTRAVAGANZA2-NOVDEC2024-TSR._FMwebp_.jpg'
    },
    {
        link:'Shop The Footwear Edit',
        imgLink:'https://m.media-amazon.com/images/G/01/Zappos/homepage12.9/W-ZAPPOSHP-FOOTWEARGUIDE-NOVDEC2024-TSR._FMwebp_.jpg'
    },

]


function WantInspiration() {  
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:3,
        autoplay:true,
        slidesToScroll: 3,
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
    <div className='w-[110%] -mx-4 lg:-mx-20 md:w-[110%] bg-[#f2ebdf] me-2 -mx-20 p-2 mb-5 '>
        <div className='w-[90%] mx-auto p-1'>
            <h2 className='text-2xl font-bold mt-9 mb-5'>Want inspiration? Visit The Style Room for styling tips and fashion trends.</h2>
            <div>
                <Slider {...settings}>
                    {
                        wantinspiration.map((item)=>{
                            return <Card link={item.link} img={item.imgLink}/>
                        })
                    }
                </Slider>
                    
            </div>
           
        </div>
      
    </div>
  )
}

export default WantInspiration
