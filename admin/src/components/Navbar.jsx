import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';

const Navbar = ({setToken}) => {
    const handleLogout=()=>{
        setToken("");
        toast.success("Logout success")
    }
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={handleLogout} className='bg-gray-600 text-white cursor-pointer px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
