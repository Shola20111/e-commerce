
import * as React from 'react';
import HeroComp from '@/components/modules/HeroComp';
import DailyMarket from '@/components/modules/DailyMarket';
import Categories from '@/components/modules/Categories';


export default function Home() {
  return (
    <div className='px-[10px] md:px-[50px] lg:px-[135px] w-full h-auto flex flex-col gap-[100px]'>
      <HeroComp/>
      <DailyMarket/>
      <Categories/>
      
    </div>
  )
}