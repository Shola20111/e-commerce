import Image from 'next/image'
import React, { useState } from 'react'

const items = [
  {
    id: 1,
    image: "/Services.png",
    title: "10.5k",
    text: "Free delivery for all orders over $140"
  },
  {
    id: 2,
    image: "/Services2.png",
    title: "33k",
    text: "We reurn money within 30 days"
  },
  {
    id: 3,
    image: "/Services3.png",
    title: "45.5k",
    text: "Friendly 24/7 customer support"
  },
  {
    id: 4,
    image: "/Services4.png",
    title: "25k",
    text: "We reurn money within 30 days"
  },
]

export default function AchievementSection() {

    const [isActive, setIsActive] = useState<number>(2)
  return (
    
          <div  className="w-full h-[230px] grid grid-cols-4 gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setIsActive(item.id)}
                className={`${isActive === item.id ? 'bg-[#DB4444] text-white' : ''} mxa-w-[260px] h-full rounded-[4px]  flex gap-[30px] items-center `}
              >
                <div className="cursor-pointer w-full h-full rounded-[4px] border flex flex-col justify-center items-center p-5 gap-3">
                  <Image src={item.image} width={56} height={56} alt={item.title} />
                  <h5 className='font-bold text-[32px] leading-[30px] tracking-[40%] '>{item.title}</h5>
                  <p className='w-full whitespace-nowrap overflow-hidden '>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        
  )
}
