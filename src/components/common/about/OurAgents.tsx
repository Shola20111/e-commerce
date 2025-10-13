'use client'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const OurAgents = () => {
  const cards = [
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    {
      img: "/Tom-Cruise.png",
      title: "Tom-Cruise",
      text: "Founder & Chairman"
    },
    {
      img: "/Emma-Watson.png",
      title: "Emma Watson",
      text: "Managing Director"
    },
    {
      img: "/Will-Smith.png",
      title: "Will Smith",
      text: "Product Designer"
    },
    
  ]

  const [current, setCurrent] = useState(0)
  const totalSlides = Math.ceil(cards.length / 3) // 2 slides (6 cards / 3)

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 10000)
    return () => clearInterval(timer)
  }, [totalSlides])

  return (
    <div className="w-full h-auto mx-auto">
      {/* Slide container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex min-w-full gap-4 justify-center">
              {cards.slice(slideIndex * 3, slideIndex * 3 + 3).map((card, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center bg-white rounded-2xl overflow-hidden gap-2"
                >
                  
                  <div className='rounded-[4px] '>
                    <img 
                    src={card.img} 
                    alt={card.title} 
                    className="max-w-[370px] h-[400px] rounded-[4px] "
                  />
                  </div>
                  

                  
                  <div className='w-full flex flex-col justify- items-start'>
                    <h2 className="text-lg font-bold mt-2">{card.title}</h2>

                    
                    <p className="text-sm text-gray-600 text-center">
                      {card.text}
                    </p>

                  
                    <div className="flex items-start w-full  py-3 gap-3">
                      <FaTwitter className=" text-xl cursor-pointer hover:scale-110 transition" />
                      <FaInstagram className=" text-xl cursor-pointer hover:scale-110 transition" />
                      <FaFacebook className=" text-xl cursor-pointer hover:scale-110 transition" />
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Radio / Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>

  )
}

export default OurAgents