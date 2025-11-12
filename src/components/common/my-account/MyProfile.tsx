import React from 'react'

const MyProfile = () => {
  return (
    <div className='w-[800px] rounded-[4px] shadow-md flex flex-col gap-5 px-20 py-10 '>
      <h2 className='text-[#DB4444] text-[20px] font-medium leading-[28px] '>
        Edit Your Profile
      </h2>
      <form className='flex flex-col gap-4' >
        <div className='grid grid-cols-2 gap-[30px]'>
          <div className='flex flex-col'>
            <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
            <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
            <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
            <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
            <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
            <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
            <input placeholder='Current password ' type="text" className='w-full bg-gray-200 px-4 outline-none h-10 rounded-[4px]' />
            <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' placeholder='New password' />
            <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' placeholder='Confirm password' />
          </div>
          <div className='flex items-center justify-end gap-2'>
            <button className='cursor-pointer px-4 py-1 rounded-[4px] text-[16px] leading-[24px] font-medium'>Cancel</button>
            <button className='bg-[#DB4444] text-[#FAFAFA] rounded-[4px] text-[16px] leading-[24px] font-medium cursor-pointer px-4 py-1'>Save Changes</button>
          </div>
          
      </form>
    </div>
  )
}

export default MyProfile