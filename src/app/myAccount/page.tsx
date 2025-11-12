'use client'
import Header from '@/components/common/header/Header'
import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
import UserLogoComp from '@/components/common/header/UserLogoComp'
import BookAddress from '@/components/common/my-account/BookAddress'
import MyCancellations from '@/components/common/my-account/MyCancellations'
import MyPaymentOptions from '@/components/common/my-account/MyPaymentOptions'
import MyProfile from '@/components/common/my-account/MyProfile'
import MyReturns from '@/components/common/my-account/MyReturns'
import Link from 'next/link'
import React, { useState } from 'react'


const MyAccount = () => {
  const [activeModal, setActiveModal] = useState("")
  return (
    <section className='w-[80%] flex flex-col items-center mb-[60px]'>

      <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
        <Header />
        <div className="h-[60px] flex gap-[16px] items-center">
          <div>
            <HeartLogo />
          </div>

          <CartLogo />
          <UserLogoComp />
        </div>
      </div>
      <main className='w-full h-auto mt-14 flex flex-col gap-10'>
        <section className='flex justify-between items-center'>
          <div className=' h-[21px] flex gap-2'>
            <Link href='/account' className='text-gray-400' >Home</Link> /
            <Link href='/checkout' className='text-black'>My Account</Link>
          </div>
          <div className='flex gap-2'>
            <p>Welcome!</p>
            <p className='text-red-500'>User Name</p>
          </div>
        </section>

        <section className='w-full flex justify-between'>
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-4'>Manage my account</h3>
            <div className='ml-8 flex flex-col gap-4'>
              <div onClick={()=>setActiveModal('profile')} className={`${activeModal==='profile' && 'text-red-500'} cursor-pointer`}>My Profile</div>
              <p onClick={()=>setActiveModal('addressBook')} className={`${activeModal==='addressBook' && 'text-red-500'} cursor-pointer`}>Address Book</p>
              <p onClick={()=>setActiveModal('payment')} className={`${activeModal==='payment' && 'text-red-500'} cursor-pointer`}>My Payment Options</p>
            </div>
            
            <h3 className='font-bold text-4'>My Orders</h3>
            <div className='ml-8 flex flex-col gap-4'>
              <p onClick={()=>setActiveModal('return')} className={`${activeModal==='return' && 'text-red-500'} cursor-pointer`}>My Returns</p>
              <p onClick={()=>setActiveModal('cancellation')} className={`${activeModal==='cancellation' && 'text-red-500'} cursor-pointer`}>My Cancellations</p>
            </div>

            <Link href='/wishList' className='font-bold text-4 cursor-pointer'>My Whishlist</Link>
          </div>

          <div>
            {
              activeModal==='profile' && <MyProfile />
            }
            {
              activeModal==='addressBook' && <BookAddress />
            }
            {
              activeModal==='payment' && <MyPaymentOptions />
            }
            {
              activeModal==='return' && <MyReturns />
            }
            {
              activeModal==='cancellation' && <MyCancellations />
            }
          </div>

        </section>
        

      </main>
    </section>
  )
}

export default MyAccount