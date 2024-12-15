import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Banner from '../components/Slider'
import Search from '../components/Search'
import Navlink from '../components/Navlink';


const navLink = [
  {
    id:1,
    link:'New'
  },
  {
    id:2,
    link:'Women'
  },
  {
    id:3,
    link:'Men'
  },
  {
    id:4,
    link:'Kids'
  },
  {
    id:5,
    link:'Collections'
  },
  {
    id:6,
    link:'Brands'
  },
  {
    id:7,
    link:'Sale'
  },
  {
    id:8,
    link:'Activity'
  },
  {
    id:9,
    link:'Gifts'
  }

]

function Navbar() {
  return (
    <>
      <Banner/>
      <nav className='w-full px-8 py-2 border-b-2'>
          <div className='flex md:flex justify-between items-center '>
            <div className='flex items-center gap-10 py-3'>
                <img  className='w-24' src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="" />
                <Search/>
            </div>
            <div className='flex md:flex items-center gap-4'>
              <MdOutlineAccountCircle className='hidden lg:block md:block md:text-3xl text-black-100'/>
              <CiSearch className=' text-4xl text-black-100 md:hidden'/>
              <CiShoppingCart className='text-3xl text-black-100'/>
              <RxHamburgerMenu className=' text-3xl text-black-100 me-0 md:hidden'/>
            </div>
          </div>
          <div className='flex gap-6 items-center justify-between'>
            <div className='hidden md:flex gap-6 py-1'>
              {navLink.map((link)=>{
                return <Navlink title={link.link} id={link.id}/>
              })}
            </div>
            <div>
              <h3 className='hidden md:block md:font-semibold'>Help & Support</h3>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar
