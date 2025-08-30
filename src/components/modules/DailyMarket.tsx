import React from 'react'
import Products from '../common/Products'
import ToGoComp from '../common/TogoComp'

const DailyMarket = () => {
  return (
    <section className='border w-full h-[493px] flex flex-col justify-between '>
      <div className='w-full h-[103px] flex justify-between items-end '>
        <div className='border w-[600px] h-full flex justify-between items-end'>
          <div className='border border-[blue] flex flex-col w-[211px] h-full justify-between'>
            <div className='border border-[red] flex justify-between items-center w-[100px] h-[40px]'>
              <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px] '></div>
              <div className='text-[16px] text-[#000000] leading-[20px] font-semibold '>Today’s</div>
            </div>
            <div className='text-[36px] leading-[48px] font-semibold tracking-[4%] text-[#000000] '>Flash Sales</div>
          </div>
          <div className='border-[green] w-[302px] h-[50px] text-[20px] text-[red] font-bold flex justify-around '>
            <ToGoComp/>
          </div>
        </div>
      </div>

      <div>
        <Products/>
      </div>
    </section>
  )
}

export default DailyMarket
