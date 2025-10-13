import Header from '@/components/common/header/Header'
import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
import UserLogoComp from '@/components/common/header/UserLogoComp'
import Link from 'next/link'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'

export default function NotFound() {
  return (
    <section className='w-[80%] flex flex-col items-center mb-[60px]'>
          
      <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
        <Header/>
        <div className="h-[60px] flex gap-[16px] items-center">
          <HeartLogo/>
          <CartLogo/>
          <UserLogoComp/>
        </div>
      </div>
      <div className='w-full mt-14 flex flex-col gap-[60px]'>
        <div className='w-[130px] h-[21px] flex justify-between'>
          <Link href='/' className='text-gray-400' >Home</Link> /
          <div className='text-black'>404 Error</div>
        </div>
				<div className='w-full h-[250px] flex flex-col justify-between items-center '>
					<h1 className='font-medium text-[110px] leading-[115px] tracking-[3%] '>404 Not Found</h1>
					<p className='text-[16px] leading-[24px] '>Your visited page not found. You may go home page</p>
					<Link href='/'>
						<button className='w-[254px] h-[56px] rounded-[4px] py-4 px-[48px] text-center bg-[#DB4444] text-white cursor-pointer'>Back to home page</button>
					</Link>
					
				</div>
					
        </div>

    </section>
  )
}
