import Image from 'next/image'
import React from 'react'
import { VscChevronRight } from 'react-icons/vsc'

const HeroComp = () => {
  return (
    <div className='gap-[40px] grid grid-cols-[225px_1fr] h-[400px]'>
      <div className='flex flex-col gap-4 pt-10 pr-[13px] border-r border-[#000000] text-[#000000] b bo'>
        <div className='flex justify-between pr-2'>
            <p className='font-normal text-[16px] leading-[24px]'>Woman’s Fashion</p>
            <VscChevronRight className='w-[15] h-[15px]'/>
        </div>
        <div className='flex justify-between pr-2'>
            <p className='font-normal text-[16px] leading-[24px]'>Men’s Fashion</p>
            <VscChevronRight className='w-[15] h-[15px]'/>
        </div>
        <p className='font-normal text-[16px] leading-[24px]'>Electronics</p>
        <p className='font-normal text-[16px] leading-[24px]'>Home & Lifestyle</p>
        <p className='font-normal text-[16px] leading-[24px]'>Medicine</p>
        <p className='font-normal text-[16px] leading-[24px]'>Sports & Outdoor</p>
        <p className='font-normal text-[16px] leading-[24px]'>Baby’s & Toys</p>
        <p className='font-normal text-[16px] leading-[24px]'>Groceries & Pets</p>
        <p className='font-normal text-[16px] leading-[24px]'>Health & Beauty</p>

      </div>
      <div className='pt-10 w-full '>
        <Image src='/banner.png' width={392} height={344} alt='Banner' className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

export default HeroComp
