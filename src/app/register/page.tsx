import Header from '@/components/common/header/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'

const Register = () => {
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

        </div>
    </section>
  )
}

export default Register