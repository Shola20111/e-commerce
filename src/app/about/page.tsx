'use client'
import AchievementSection from '@/components/common/about/AchievementSection'
import OurAgents from '@/components/common/about/OurAgents'
import Header from '@/components/common/header/Header'
import { HeartLogo } from '@/components/common/header/headerTools'
import CustomerCarePack from '@/components/modules/CustomerCarePack'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'

export default function About() {
  return (
     <section className='w-[80%] flex flex-col items-center mb-[60px]'>
          
      <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
        <Header/>
        <div className="h-[60px] flex gap-[16px] items-center">
          <HeartLogo/>
          <BsCart3 className={`w-[25px] h-[20px]`} />
          <Image src='/user.png' width={18} height={18} alt='User'/>
        </div>
      </div>
      <div className='w-full mt-14 flex flex-col gap-[60px]'>
        <div className='w-[130px] h-[21px] flex justify-between'>
          <Link href='/' className='text-gray-400' >Home</Link> /
          <Link href='/about' className='text-black'>About</Link>
        </div>
        <div className='flex justify-between items-center '>
          <div className='flex flex-col w-[422px] h-auto gap-7'>
            <h1 className='text-[54px] leading-[64px] tracking-[6%] font-medium '>Our Story</h1>
            <div className='flex flex-col text-[16px] leading-[26px] gap-5 '>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
              </p>
            </div>
            
          </div>
          <div className='w-[705px] h-[609px] rounded-tl-[4px] rounded-bl-[4px]'>
            <Image src='/two-females.png' width={600} height={500} alt='Two African Female Girls' className='w-full h-full object-cover' />
          </div>
        </div>

        <div>
          <AchievementSection/>
        </div>
        <div>
          <OurAgents />
        </div>
        <div>
          <CustomerCarePack />
        </div>
      </div>


    </section>
  )
}
