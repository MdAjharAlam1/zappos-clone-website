import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Banner from '../components/banner'
import Search from '../components/Search'

function Navbar() {
  return (
    <>
    <Banner/>
    <div className='flex md:flex justify-between items-center w-full shadow-md px-8 py-2'>
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

    </>
  )
}

export default Navbar
