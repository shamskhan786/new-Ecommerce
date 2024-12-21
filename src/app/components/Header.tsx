import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { SheetSide } from './Sheet'
import { NavigationMenuDemo } from './NavigationMenu'



export default function Header() {
  return (
   <header className='w-full h-[70px] flex justify-between items-center '>
    {/* Left */}
      <div className='flex justify-center items-center ml-3 md:ml-[40px]  '>
        <SheetSide />
        <h1 className='text-xl sm:text-[32px] font-bold ml-2'>SHOP.CO</h1>
      </div>
      {/* Nevbar */}
      
        <ul className='hidden md:block'>
            <li  className='space-x-6 flex items-center'>
                
                <Link href="">
                <NavigationMenuDemo/>
                </Link>
                <Link href="">On Sale</Link>
                <Link href="">New Arrivals</Link>
                <Link href="">Brand</Link>
            </li>
        </ul>
        {/* Right */}
       <div className='hidden md:block'>
       <div className='flex justify-center items-center w-[320px] h-[40px] bg-[#F0F0F0] gap-x-3 rounded-[62px]'>
        <IoSearch className='text-2xl ml-2'/>
        <input placeholder='Search items...' className='w-full h-full bg-[#F0F0F0] rounded-[62px] outline-none'></input>

        </div>
       </div>

        <div className='flex space-x-5 mr-8 md:mr-7'>
        <IoSearch className='text-2xl ml-2 sm:hidden'/>
         <FaCartShopping className="text-2xl cursor-pointer"/>
         <FaCartShopping className="text-2xl cursor-pointer" />

         </div>
   </header>
  )
}
