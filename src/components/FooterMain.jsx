import React from 'react'
import FooterMainCard from './FooterMainCard'

const footerdata = {
    aboutZappos:[
      {
        title:'About Zappos'
      },
      {
        link:'About'
      },
      {
        link:'Zappos ONE'
      },
      {
        link:'Zappos for Good'
      },
      {
        link:'Zappos at Work'
      },
      {
        link:'Get the Zappos Mobile App'
      },
      {
        link:'Amazon Prime Benefits'
      },
      {
        link:'Zappos VIP Benefits'
      },
      {
        link:'Coupons & Sales'
      },
      {
        link:'Accessibility Statement'
      }
    ],
    CustomerServices:[
      {
        title:'Customer Service'
      },
      {
        link:'FAQs'
      },
      {
        link:'Contact Info'
      },
      {
        link:'Ayuda en espanol'
      },
      {
        link:'Shipping And Returns Policy'
      },
      {
        link:'About Proposition 65'
      }
    ],
    resources:[
        {
            title:"Resources"
        },
        {
            link:'Measurement Guide'
        },
        {
            link:'Size Conversion Chart'
        },
        {
            link:'Measure Your Bra Size'
        },
        {
            link:'Associates Program'
        },
        {
            link:'Press Kit & Brand Inquiries'
        },
        {
            link:' Site Map'
        },
        {
            link:'Take Survey'
        }
    ],
    ExploreZappos:[
        {
            title:'Explore Zappos'
        },
        {
            link:'Brands'
        },
        {
            link:'Clothing'
        },
        {
            link:'The Style Room'
        },
        {
            link:'EyeWear'
        },
        {
            link:'New Arrivals'
        },
        {
            link:'Running'
        },
        {
            link:'Jackets'
        },
        {
            link:'Shoes',
        },
        {
            link:'Watches'
        },
        {
            link:'Zappos Adaptive'
        },
        {
            link:'All Departments'
        }

    ]
}

function FooterMain() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 mt-5 mb-8' >
        <div>
            {footerdata.aboutZappos.map((item)=>{
                return <FooterMainCard title={item.title} link={item.link}/>
            })}
        </div>
        <div>
            {footerdata.CustomerServices.map((item)=>{
                return <FooterMainCard title={item.title} link={item.link}/>
            })}
        </div>
        <div>
            {footerdata.resources.map((item)=>{
                return <FooterMainCard title={item.title} link={item.link}/>
            })}
        </div>
        <div>
            {
                footerdata.ExploreZappos.map((item)=>{
                    return <FooterMainCard title={item.title} link={item.link}/>
                })
            }
        </div>
    </div>
  )
}

export default FooterMain
