import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'
import SearchBar from './SearchBar'



const Header = () => {
  return (
    <div className='px-[135px] w-full h-[50px] mt-[40px] pb-[15px] border-b border-b-[#e4e0e0] mx-auto flex justify-between items-center'>
      <div className='w-[700px] h-full flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src='/logo.png' width={200} height={20} alt='Logo'/>
        </div>
        <div className='w-[370px] h-full flex gap-[40px] text-[18px] md:text-lg'>
          <Link href={'/'}>Home</Link>
          <Link href={'/contact'}>Contact</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/signUp'}>Sign Up</Link>
        </div>
      </div>
     
      <div className='w-[347px] h-full flex items-center justify-between'>
        <SearchBar/>
        <div className='w-[80px] h-full flex gap-[16px] '>
          <CiHeart className='w-[25px] h-[25px]'/>
          <BsCart3 className='w-[25px] h-[20px]'/>
        </div>
        
      </div>
    </div>
  )
}

export default Header