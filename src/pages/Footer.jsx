import React from 'react'
import JoinCard from '../components/Footer/JoinCard'
import FooterMain from '../components/Footer/FooterMain'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterBottom from '../components/Footer/FooterBottom';

function Footer() {
  return (
    <footer>
      <JoinCard/>
      <div className='w-[90%] mx-auto'>
        <div className='flex gap-6 items-center mt-10'>
          <div><FaFacebook className='text-2xl'/></div>
          <div><FaInstagram className='text-2xl'/></div>
        </div>
        <FooterMain/>
        <hr />
        <FooterBottom/>
      </div>
    </footer>
  )
}

export default Footer
