import Image from 'next/image'
import React from 'react'
import ToGoComp from '../common/TogoComp'

export default function CategoryBanner() {
  return (
    <div className='w-full h-[500px] bg-black flex justify-end px-13 relative'>
      <div className='flex flex-col w-1/2 py-20 justify-between items-start'>
        <h4 className='text-[16px] leading-[20ppx] font-semibold text-[#00FF66]'>
          Categories
        </h4>
        <h1 className='font-semibold text-[48px] leading-[60px] w-[443px] tracking-[4%] text-[#FAFAFA] '>
          Enhance Your Music Experience
        </h1>
        <ToGoComp/>
        <button className='w-[174px] h-[56px] rounded-[4px] bg-[#00FF66] text-[#fff] '>
          Buy Now
        </button>
      </div>

      <div className="w-[500px] h-[500px] rounded-full  bg-[#D9D9D9] opacity-10 shadow-[inset_0_0px_600px_rgba(0,0,0,1)]"></div>

      <div className='w-[568px] h-[330px] absolute top-20 right-10 '>
        <Image src='/mpRadio.png' width={568} height={330} alt='Mp Radio' className='w-full h-full '/>
      </div>


    </div>
  )
}
