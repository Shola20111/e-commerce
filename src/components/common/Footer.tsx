import { SendHorizontal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[440px] bg-[#000] flex justify-center items-center'>
      <div className='w-[80%] h-[236px] flex justify-between border ' >
        <div className='w-[217px] h-[188px] flex flex-col gap-3'>
          <h1 className='text-[24px] font-extrabold leading-[24px] tracking-[3%] text-[#fafafa]'>Exclusive</h1>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Subscribe</h5>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Get 10% off your first order</p>
          <div className='w-[220px] border-[3px] border-[#797777] flex'>
            <input type="text" placeholder='Enter your email' className='w-[170px] text-[16px] leading-[24px] text-[#fafafa] py-[12px] pl-[16px] outline-0 bg-transparent ' />
            <SendHorizontal size={40} className='text-[#797777]' />
          </div>
        </div>
        <div className='w-[175px] h-[188px] flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Support</h5>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>exclusive@gmail.com</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>+88015-88888-9999</p>
        </div>
        <div className='w-[123px] h-[188px] flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Account</h5>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>My Account</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Login / Register</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Cart</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Wishlist</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Shop</p>
        </div>
        <div className='w-[109px] h-[188px] flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Quick Link</h5>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Private Policy</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Terms of Use
          </p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>FAQ</p>
          <p className='text-[16px] leading-[24px] text-[#fafafa] '>Contact</p>
        </div>
        <div className='w-[198px] h-auto flex flex-col gap-3'>
          <h5 className='leading-[28px] text-[20px] font-medium text-[#fafafa]  '>Download App</h5>
          <p className='text-[12px] leading-[18px] opacity-[70%] text-[#fafafa] '>Save $3 with App New User Only</p>
          <div>
            <div className='w-[80px] h-[80px] flex justify-center items-center'>
              <Image src='/Qrcode.png' width={76} height={76} alt='Qrcode' className='w-full h-full'/>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        
        
      </div>
      

    </div>
  )
}

export default Footer