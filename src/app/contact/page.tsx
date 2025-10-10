import Header from '@/components/common/header/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'

export default function Contact() {
  return (
    <section className='w-[80%] flex flex-col items-center mb-[60px]'>
      
      <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
        <Header/>
        <div className="h-[60px] flex gap-[16px] items-center">
          <CiHeart className={`w-[25px] h-[25px]`} />
          <BsCart3 className={`w-[25px] h-[20px]`} />
          <Image src='/user.png' width={18} height={18} alt='User'/>
        </div>
      </div>
      <div className='w-full mt-14 flex flex-col gap-[60px]'>
        <div className='w-[130px] h-[21px] flex justify-between'>
          <Link href='/' className='text-gray-400' >Home</Link> /
          <Link href='/contact' className='text-black'>Contact</Link>
        </div>

        <div className='w-full flex justify-between h-[457px]'>
          <div className='w-[340px] h-full rounded[4px] flex flex-col justify-between px-10 py-14 shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
            <div className=' flex flex-col gap-3'>
              <div className='flex gap-3 w-[135px] h-10 items-center'>
                <div className='w-10 backdrop-hue-rotate-180'>
                  <Image src='/icons-phone.png' width={40} height={40} alt='Icon Phone'/>
                </div>
                <div className='font-medium text-[16px] leading-6 text-[#000]'>Call To Us</div>
              </div>
              <div className='text-[14px] leading-[21px] text-[#000]'>
                We are available 24/7, 7 days a week.
              </div>
              <div className='text-[14px] leading-[21px] text-[#000] '>
                Phone: +8801611112222
              </div>
            </div>
            <div className='w-full border'></div>
            <div className=' flex flex-col gap-3 '>
              <div className='flex gap-3 w-[135px] h-10 items-center'>
                <div className='w-10 backdrop-hue-rotate-180'>
                  <Image src='/icons-mail.png' width={40} height={40} alt='Email Phone'/>
                </div>
                <div className='font-medium text-[16px] leading-6 text-[#000]'>Write To Us</div>
              </div>
              <div className='text-[14px] leading-[21px] text-[#000]'>
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className='text-[14px] leading-[21px] text-[#000] '>
                Emails: customer@exclusive.com
              </div>
              <div className='text-[14px] leading-[21px] text-[#000] '>
                Emails: support@exclusive.com
              </div>
            </div>
          </div>
          <div className='w-[710px] h-full rounded py-5 px-5 flex flex-col gap-5 shadow-[0_0_10px_rgba(0,0,0,0.5)]'>
            <div className='w-full flex gap-2'>
              
                <input className='bg-gray-200 flex-1 h-10 px-2' type="text" placeholder='Your Name' />
              
              
                <input className='bg-gray-200 flex-1 h-10 px-2' type="email" placeholder='Your Email' />
               
              
                <input className='bg-gray-200 flex-1 h-10 px-2' type="number" placeholder='your Phone' />
              
            </div>
            <div className='w-full h-full flex'>
              <textarea className='bg-gray-200 flex-1 ' name="text" id="text">Your Massage</textarea>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end mt-3'>
        <button className='px-10 py-2 border cursor-pointer'>
          Send
        </button>
      </div>
      
    </section>
  )
}
