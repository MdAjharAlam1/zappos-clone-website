import React from 'react'
import { CiSearch } from "react-icons/ci";


function Search() {
  return (
    <div className=' hidden md:flex items-center gap-2 px-3 py-2 border border-gray-600 rounded-full' >
        <CiSearch className='text-gray-500 text-xl me-2'/>
      <input className='w-72  outline-none text-md' type="text" placeholder='Search for shoes, clothes, etc.' />
      <div className='me-3 text-md fw-bold' >Search</div>
    </div>
  )
}

export default Search
