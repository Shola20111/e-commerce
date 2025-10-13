import Header from '@/components/common/header/Header'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full'>
      <div className='w-[80%] mx-auto  '>
        <Header/>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-9 my-12  sm:pr-8 lg:pr-[135px]">
        
        <div className="bg-[#CBE4E8] flex justify-center w-full items-center lg:max-w-[705px] lg:max-h-[781px]  lg:mr-[80px]">
          <div className="w-full max-w-[700px] mt-8 sm:mt-12 lg:mt-[75px]">
            <Image
              src="/beatsnoop.png"
              width={800}
              height={706}
              alt="Beat Snoop"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        
        <section className="w-full max-w-md my-auto flex flex-col justify-between mx-auto">
          
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-medium text-black tracking-wide leading-tight px-2">
              Log in to Exclusive
            </h1>
            <h3 className="text-sm sm:text-base text-black mt-2 px-2">
              Enter your details below
            </h3>
          </div>

          
          <form className="w-full flex flex-col gap-4">
            
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="border-b border-gray-400 text-black w-full p-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-400 text-black w-full p-2 focus:outline-none"
            />
          </form>

          
          <div className="w-full flex justify-between items-center mt-8">
            <button className="w-[153px] h-14 rounded text-base text-white bg-[#DB4444] font-medium">
              Log in
            </button>          
              <span className='text-[#DB4444]'>Already have an account?</span>            
          </div>

        </section>
      </div>
    </div>
    

  )
}

export default Login