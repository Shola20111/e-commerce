
import * as React from 'react';
import HeroComp from '@/components/modules/HeroComp';
import DailyMarket from '@/components/modules/DailyMarket';
import Categories from '@/components/modules/Categories';
import MonthlyMarket from '@/components/modules/MonthlyMarket';
import CategoryBanner from '@/components/modules/CategoryBanner';
import Explore from '@/components/modules/Explore';
import NewArival from '@/components/modules/NewArival';
import CustomerCarePack from '@/components/modules/CustomerCarePack';



export default function Home() {
  return (
    <div className='px-[10px] md:px-[50px] lg:px-[135px] w-full h-auto flex flex-col gap-[100px]'>
      <HeroComp/>
      <DailyMarket/>
      <Categories/>
      <MonthlyMarket/>
      <CategoryBanner/>
      <Explore/>
      <NewArival/>
      <CustomerCarePack/>
      
      
    </div>
  )
}