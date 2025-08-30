import React from 'react'
import Products from '../common/Products'
import ToGoComp from '../common/TogoComp'

const DailyMarket = () => {
  return (
    // <section className='w-full h-[493px] flex flex-col justify-between  '>
    //   <div className='w-full h-[103px] flex justify-between items-end '>
    //     <div className='w-[600px] h-full flex justify-between items-end'>
    //       <div className='flex flex-col w-[211px] h-full justify-between'>
    //         <div className='flex justify-between items-center w-[100px] h-[40px]'>
    //           <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px] '></div>
    //           <div className='text-[16px] text-[#000000] leading-[20px] font-semibold '>Today’s</div>
    //         </div>
    //         <div className='text-[36px] leading-[48px] font-semibold tracking-[4%] text-[#000000] '>Flash Sales</div>
    //       </div>
    //       <div className='w-[302px] h-[50px] text-[20px] text-[red] font-bold flex justify-around '>
    //         <ToGoComp/>
    //       </div>
    //     </div>
    //   </div>

    //   <div>
    //     <Products/>
    //   </div>
    // </section>
    <section className="w-full h-auto md:h-[493px] flex flex-col justify-between px-3 md:px-0">
  {/* Top Section */}
  <div className="w-full h-auto md:h-[103px] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
    {/* Left Side */}
    <div className="border w-full md:w-[600px] h-auto md:h-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div className=" flex flex-col w-full md:w-[211px] h-auto md:h-full justify-between gap-2">
        <div className=" flex justify-start md:justify-between items-center w-auto md:w-[100px] h-[40px]">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
          <div className="text-[16px] text-[#000000] leading-[20px] font-semibold ml-2 md:ml-0">
            Today’s
          </div>
        </div>
        <div className="text-[24px] md:text-[36px] leading-[32px] md:leading-[48px] font-semibold tracking-[4%] text-[#000000]">
          Flash Sales
        </div>
      </div>

      {/* Countdown */}
      <div className="w-full md:w-[302px] h-[50px] text-[18px] md:text-[20px] text-red-600 font-bold flex justify-start md:justify-around">
        <ToGoComp />
      </div>
    </div>
  </div>

  {/* Products */}
  <div className="mt-6 md:mt-0">
    <Products />
  </div>
</section>

  )
}

export default DailyMarket
