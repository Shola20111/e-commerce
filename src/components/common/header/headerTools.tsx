'use client'
import { useCard } from "@/context/CardContext"
import { BsCart3 } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"



export const HeartLogo = () => {
  const { clickedCards }: any = useCard()
  return (
    <div className="relative cursor-pointer">
      <CiHeart
        className={`w-[25px] h-[25px]`} />
      <div className="bg-[#DB4444] w-[11px] h-[11px] flex justify-center items-center text-[10px] text-white rounded-full absolute top-[0px] right-0">{clickedCards.length}</div>
    </div>
  )
}


export const CartLogo = () => {
  return(
    <div className="cursor-pointer">
      <BsCart3 className={`w-[25px] h-[20px]`} />
    </div>
    
  )
  
}