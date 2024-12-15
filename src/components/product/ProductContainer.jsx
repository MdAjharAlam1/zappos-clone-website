import React from 'react'
import ProductCard from '../ProductCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const productData= [
    {
        id:1,
        title:'SOREL',
        image:'https://m.media-amazon.com/images/I/71vn3xna92L._AC_SR768,1024_.jpg',
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
                title:'ONA RMX Chukka Plus Waterproof',
                productcategroy:"Women's"
            },
        price:'$144.95',
        rating:'4',
        numberRating:'100',
    },
    {
        id:2,
        title:'PUMA',
        image:'https://m.media-amazon.com/images/I/816ZYZ3TAVL._AC_SR768,1024_.jpg',
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
                title:'Suede Classic XXI',
                productcategroy:"Men's"
            },
        price:'$75.00',
        rating:'4',
        numberRating:'109',
    },
    {
        id:3,
        title:'New Balance Classics',
        image:'https://m.media-amazon.com/images/I/61RwnR+amLL._AC_SR768,1024_.jpg',
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
                title:'997R',
                productcategroy:"Unisex"
            },
        price:'$89.95',
        rating:'4',
        numberRating:'22',
    },
    {
        id:4,
        title:'KEEN Kids',
        image:'https://m.media-amazon.com/images/I/61vWCvBVOML._AC_SR768,1024_.jpg',
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
                title:'Targhee Boundless Alternative Closure ',
                productcategroy:"Durable (Toddler/Little Kid)"
            },
        price:'$29.45',
        rating:'4',
        numberRating:'1',
    },
    {
        id:4,
        title:'Vans',
        image:'https://m.media-amazon.com/images/I/71vn3xna92L._AC_SR768,1024_.jpg',
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
                title:'MTE Ultrarange EXO',
                productcategroy:"Unisex"
            },
        price:'$99.95',
        rating:'4',
        numberRating:'12',
    },
    {
        id:5,
        title:'Steve Madden',
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
                title:'Mayven',
                productcategroy:"Women's"
            },
        price:'$76.45',
        rating:'4',
        numberRating:'15',
    },
    {
        id:6,
        title:'Crocs',
        image:'https://m.media-amazon.com/images/I/816ZYZ3TAVL._AC_SR768,1024_.jpg',
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
                title:'Savannah Bananas Classic Clogs',
                productcategroy:"Unisex"
            },
        price:'$41.97',
        rating:'4',
        numberRating:'14',
    },
    {
        id:7,
        title:'Dolce Vita',
        image:'https://m.media-amazon.com/images/I/71vn3xna92L._AC_SR768,1024_.jpg',
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
                title:'Dolen',
                productcategroy:"Women's"
            },
        price:'$45.00',
        rating:'4',
        numberRating:'40',
    },
    {
        id:8,
        title:'Brooks',
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
                title:"Women's Glycerin Stealthfit 21",
                productcategroy:"Women's"
            },
        price:'$159.95',
        rating:'4',
        numberRating:'83',
    },
    {
        id:9,
        title:'VIONIC',
        image:'https://m.media-amazon.com/images/I/61vWCvBVOML._AC_SR768,1024_.jpg',
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
                title:'Beach Pismo Sneakers',
                productcategroy:"Women's"
            },
        price:'$70.00',
        rating:'4',
        numberRating:'53',
    },
    {
        id:10,
        title:'KEEN Kids',
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
                title:'New Boundless (Big Kid)',
                productcategroy:"Kid's"
            },
        price:'$54.00',
        rating:'4',
        numberRating:'4',
    },
    {
        id:11,
        title:'VIONIC',
        image:'https://m.media-amazon.com/images/I/816ZYZ3TAVL._AC_SR768,1024_.jpg',
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
                title:'Beach Malibu Slip-Ons',
                productcategroy:"Women's"
            },
        price:'$61.60',
        rating:'4',
        numberRating:'48',
    },
    {
        id:12,
        title:'Dansko',
        image:'https://m.media-amazon.com/images/I/71vn3xna92L._AC_SR768,1024_.jpg',
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
                title:'Becka',
                productcategroy:"Women's"
            },
        price:'$107.97',
        rating:'4',
        numberRating:'4',
    },
    {
        id:13,
        title:'Sam Edelman',
        image:'https://m.media-amazon.com/images/I/61vWCvBVOML._AC_SR768,1024_.jpg',
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
                title:'Layla',
                productcategroy:"Women's"
            },
        price:'$69.95',
        rating:'4',
        numberRating:'209',
    },

]

// id,title,image,buttonImage,description,price,rating,numberRating
function ProductContainer() {
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
    <div>
      <h2 className='sm:mb-14 text-3xl md:text-2xl font-bold mt-9 mb-3'>Zappos 25th Birthday Exclusives</h2>
      <div>
        <div>   
            <Slider {...settings}>
            {productData.map((product)=>{
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
  )
}

export default ProductContainer
