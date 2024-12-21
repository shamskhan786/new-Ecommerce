import React from 'react'
import { FaPlus } from "react-icons/fa6";


const Anouncement = () => {
  return (
    <div className='bg-black w-full h-[38px] flex justify-center items-center relative'>
      <div className='flex justify-center items-center'>
        <h3 className='text-white text-xs sm:text-sm'>
        Sign up and get 20% off to your first order.
        </h3>
        <button className='text-white ml-3 underline underline-offset-4 text-xs sm:text-sm'>Sign Up Now</button>
      </div>
     <div className='text-white absolute right-[50px] hidden sm:block'>
     <FaPlus />
     </div>
    </div>
  )
}

export default Anouncement
