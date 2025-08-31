"use client"
import React, { useEffect, useState, useRef } from 'react'
import { VscChevronDown } from 'react-icons/vsc'

const TopHeader = () => {
	const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('Englsh')
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menu: string) => {
    setLang(menu); //open select language
    setOpen(false); // close after click
  };

	
  return (
    <div className='w-full h-[48px] bg-[#000] text-[#fff] px-[50px] md:px-[135px] flex justify-end items-center'>
        <div className='w-9/10 h-full flex justify-start md:justify-center items-center gap-2'>
            <div className='hidden lg:block '>
                <p className='text-[14px] leading-[21px] font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            </div>
            <div>
                <big 
                    className='font-semibold hover:underline font-poppins' 
                    >
                    ShopNow
                </big>
            </div>
        </div>
        <div className='w-1/10 h-full flex justify-center items-center relative cursor-pointer' ref={dropdownRef}>
            <button onClick={()=>setOpen(!open)} className=' flex items-center justify-end gap-1.5 px-2 font-poppins'>
              
                <p>{lang}</p>
              <VscChevronDown className={`${open&& 'rotate-[180deg]'}`}/>
            </button>
            
							{
								open &&
							
                <div  className='flex flex-col justify-start text-[20px] bg-[#fff] text-[#000] h-auto w-[200px] gap-3 p-2 absolute top-[48px] left-[-100px] ' style={{boxShadow:'0 0 10px rgba(0, 0, 0, 0.5'}}>
                  {["English", "Arabic", "French"].map((menu) => (
                    <button
                      key={menu}
                      onClick={()=>handleMenuClick(menu)}
                      className=''
                    >
                      {menu}
                    </button>
                   ))}
                </div>								
							}
        </div>
    </div>
  )
}

export default TopHeader