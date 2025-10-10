
import * as React from 'react';
import HeroComp from '@/components/modules/HeroComp';
import DailyMarket from '@/components/modules/DailyMarket';
import Categories from '@/components/modules/Categories';
import MonthlyMarket from '@/components/modules/MonthlyMarket';
import CategoryBanner from '@/components/modules/CategoryBanner';
import Explore from '@/components/modules/Explore';
import NewArival from '@/components/modules/NewArival';
import CustomerCarePack from '@/components/modules/CustomerCarePack';
import Header from '@/components/common/header/Header';
import { CiHeart } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';



export default function Home() {
  return (
    <section className='w-[80%]'>
      <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
        <Header/>
        <div className="h-[60px] flex gap-[16px] items-center">
          <CiHeart className={`w-[25px] h-[25px]`} />
          <BsCart3 className={`w-[25px] h-[20px]`} />
        </div>
        
      </div>

      <div className=' w-full h-auto flex flex-col gap-[100px]'>
        <HeroComp/>
        <DailyMarket/>
        <Categories/>
        <MonthlyMarket/>
        <CategoryBanner/>
        <Explore/>
        <NewArival/>
        <CustomerCarePack/>
        
        
      </div>
    </section>
    
  )
}