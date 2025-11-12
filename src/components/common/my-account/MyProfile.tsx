import React from 'react'

const MyProfile = () => {
  return (
    // <div className='w-[800px] rounded-[4px] shadow-md flex flex-col gap-5 px-20 py-10 '>
    //   <h2 className='text-[#DB4444] text-[20px] font-medium leading-[28px] '>
    //     Edit Your Profile
    //   </h2>
    //   <form className='flex flex-col gap-4' >
    //     <div className='grid grid-cols-2 gap-[30px]'>
    //       <div className='flex flex-col'>
    //         <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
    //         <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
    //       </div>
    //       <div className='flex flex-col'>
    //         <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
    //         <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
    //       </div>
    //       <div className='flex flex-col'>
    //         <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
    //         <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
    //       </div>
    //       <div className='flex flex-col'>
    //         <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
    //         <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' />
    //       </div>
    //     </div>
    //     <div className='flex flex-col gap-4'>
    //         <label htmlFor="firstname" className='text-[16px] leading-[24px] text-black ' >First Name</label>
    //         <input placeholder='Current password ' type="text" className='w-full bg-gray-200 px-4 outline-none h-10 rounded-[4px]' />
    //         <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' placeholder='New password' />
    //         <input type="text" className='w-full px-4 outline-none bg-gray-200 h-10 rounded-[4px]' placeholder='Confirm password' />
    //       </div>
    //       <div className='flex items-center justify-end gap-2'>
    //         <button className='cursor-pointer px-4 py-1 rounded-[4px] text-[16px] leading-[24px] font-medium'>Cancel</button>
    //         <button type='submit' className='bg-[#DB4444] text-[#FAFAFA] rounded-[4px] text-[16px] leading-[24px] font-medium cursor-pointer px-4 py-1'>Save Changes</button>
    //       </div>
          
    //   </form>
    // </div>

    <div className="w-full max-w-[800px] rounded-[4px] shadow-md flex flex-col gap-5 p-8 md:p-10 mx-auto">
  <h2 className="text-[#DB4444] text-[20px] font-medium leading-[28px]">
    Edit Your Profile
  </h2>

  <form className="flex flex-col gap-6">
    {/* Grid fields for desktop, stacked on mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label htmlFor="firstname" className="text-[16px] leading-[24px] text-black">
          First Name
        </label>
        <input
          type="text"
          className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
          placeholder="First Name"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastname" className="text-[16px] leading-[24px] text-black">
          Last Name
        </label>
        <input
          type="text"
          className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
          placeholder="Last Name"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-[16px] leading-[24px] text-black">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
          placeholder="Email"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="text-[16px] leading-[24px] text-black">
          Phone
        </label>
        <input
          type="text"
          className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
          placeholder="Phone Number"
        />
      </div>
    </div>

    {/* Password fields */}
    <div className="flex flex-col gap-4">
      <label htmlFor="currentPassword" className="text-[16px] leading-[24px] text-black">
        Password
      </label>
      <input
        type="password"
        placeholder="Current password"
        className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
      />
      <input
        type="password"
        placeholder="New password"
        className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="w-full px-4 h-10 rounded-[4px] bg-gray-200 outline-none"
      />
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2">
      <button className="px-4 py-2 rounded-[4px] text-[16px] font-medium border border-gray-300 hover:bg-gray-100 transition">
        Cancel
      </button>
      <button
        type="submit"
        className="bg-[#DB4444] text-white px-4 py-2 rounded-[4px] text-[16px] font-medium hover:bg-[#b63535] transition"
      >
        Save Changes
      </button>
    </div>
  </form>
</div>

  )
}

export default MyProfile