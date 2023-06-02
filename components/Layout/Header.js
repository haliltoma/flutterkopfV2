import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header className='w-full flex h-14 bg-[#1c2334] items-center justify-between px-[30px] sticky top-0 z-40 w-full backdrop-blur-2xl flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10   supports-backdrop-blur:bg-white/95 '>
       <div className={`logo cursor-pointer`} >
           <Link href={`/`} className='text-2xl text-gray-400 flex gap-1'>Flutter<span className='text-white '>Kopf</span></Link>
       </div>
        <div className="auth flex gap-3">
            <span className='button-header cursor-pointer text-gray-300 hover:text-gray-100 duration-75'>Sign In</span>
            <span className='button-header cursor-pointer text-gray-300 hover:text-gray-100 duration-75'>Help</span>
        </div>
    </header>
  )
}

export default Header