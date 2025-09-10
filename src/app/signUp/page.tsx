import Image from 'next/image'
import React from 'react'

const SignUp = () => {
  return (
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
            Create an account
          </h1>
          <h3 className="text-sm sm:text-base text-black mt-2 px-2">
            Enter your details below
          </h3>
        </div>

        
        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border-b border-gray-400 text-black w-full p-2 focus:outline-none"
          />
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

        
        <div className="w-full flex flex-col gap-4 mt-8">
          <button className="w-full h-14 rounded text-base text-white bg-[#DB4444] font-medium">
            Create Account
          </button>

          <div className="w-full h-14 flex justify-center items-center gap-2 rounded border border-gray-400">
            <div className="w-6 h-6 flex justify-center items-center">
              <Image
                src="/icon-google.png"
                width={24}
                height={24}
                alt="Google Icon"
                className="w-full h-full"
              />
            </div>
            <span className="text-base text-black">Sign up with Google</span>
          </div>

          <div className="text-sm sm:text-base text-black flex justify-center items-center gap-2">
            <span>Already have an account?</span>
            <button className="text-blue-600 hover:underline">Log in</button>
          </div>
        </div>
      </section>
    </div>

  )
}

export default SignUp