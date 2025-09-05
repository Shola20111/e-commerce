// 

"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import StarsComp from "./StarsComp";
import { useScroll } from "@/context/ScrollProvider";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    image: "/game.png",
  },
  {
    id: 2,
    name: "Gaming Mouse X15",
    price: 90,
    oldPrice: 130,
    discount: "-30%",
    image: "/game.png",
  },
  {
    id: 3,
    name: "Mechanical Keyboard K20",
    price: 150,
    oldPrice: 200,
    discount: "-25%",
    image: "/game.png",
  },
  {
    id: 4,
    name: "Wireless Headset H30",
    price: 70,
    oldPrice: 100,
    discount: "-30%",
    image: "/game.png",
  },
  {
    id: 5,
    name: "Smartwatch Z10",
    price: 220,
    oldPrice: 300,
    discount: "-27%",
    image: "/game.png",
  },
  {
    id: 6,
    name: "Portable Speaker P90",
    price: 45,
    oldPrice: 65,
    discount: "-20%",
    image: "/game.png",
  },
];

export const Products1 = () => {
  const {scrollRef} = useScroll();

  
  return (
    
       <main 
       ref={scrollRef}
       className="flex overflow-x-auto gap-3 scrollbar-hide scroll-smooth ">
      {products.map((product) => (
        <section
          key={product.id}
          className="min-w-[270px] h-[350px] flex flex-col"
        >
         
          <div className="w-full h-[250px] flex justify-center items-center rounded-[4px] bg-[#f5f5f5] relative">
            <div className="w-[172px] h-[152px] flex justify-center items-center">
              <Image
                src={product.image}
                width={172}
                height={152}
                alt={product.name}
              />
            </div>

            
            <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-[4px] flex justify-center items-center absolute left-2 top-2">
              <p className="text-white">{product.discount}</p>
            </div>

           
            <div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
              <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
                <CiHeart size={20} />
              </div>
              <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
                <FiEye size={15} />
              </div>
            </div>
          </div>

          
          <div className="h-auto flex flex-col gap-[8px] mt-2">
            <h4 className="text-[16px] leading-[24px] font-medium">
              {product.name}
            </h4>
            <div className="flex w-[85px] items-center text-[16px] gap-[12px]">
              <p className="text-[red]">${product.price}</p>
              <p className="line-through text-gray-500">${product.oldPrice}</p>
            </div>
            <StarsComp />
          </div>
          
        </section>
      ))}
      
    </main>
    
   
  );
};

