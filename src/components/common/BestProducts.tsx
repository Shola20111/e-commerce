import Image from 'next/image'
import React from 'react'
import StarsComp from './StarsComp'
import { CiHeart } from 'react-icons/ci'
import { FiEye } from 'react-icons/fi'

const bestSellingList=[
  {
    id: 1,
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    image: "/Gucci-coat.png",
  },
  {
    id: 2,
    name: "Gaming Mouse X15",
    price: 960,
    oldPrice: 1160,
    image: "/duffle-bag.png",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 150,
    oldPrice: 200,
    image: "/gammax.png",
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 70,
    oldPrice: 100,
    image: "/bookSelf.png",
  },
]
export default function BestProducts() {
  return (    
    <div className='w-full h-auto flex flex-col gap-3 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
  {bestSellingList.map((item) => (
    <div
      key={item.id}
      className='w-[340px] sm:w-full md:w-full h-[350px] flex flex-col justify-between items-start mx-auto rounded-[6px]'
    >
      
      <div className='w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center rounded-[4px] relative'>
        <Image 
          src={item.image}
          width={140} 
          height={140} 
          alt='image' 
        />
        <div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
          <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
            <CiHeart size={20} />
          </div>
          <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
            <FiEye size={15} />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className='h-[84px] w-auto flex flex-col px-1'>
        <div className='text-[16px] leading-[24px] font-bold'>
          {item.name}
        </div>
        <div className='flex text-[16px] leading-[24px] gap-3'>
          <div className='text-[#DB4444]'>${item.price}</div>
          <div className='text-black opacity-50 line-through'>${item.oldPrice}</div>
        </div>
        <StarsComp />
      </div>
    </div>
  ))}
</div>

  )
}
