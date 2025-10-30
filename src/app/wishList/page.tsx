'use client';

import BestProducts from "@/components/common/BestProducts";
import Header from "@/components/common/header/Header";
import { CartLogo, HeartLogo } from "@/components/common/header/headerTools";
import UserLogoComp from "@/components/common/header/UserLogoComp";
import Subheader from "@/components/common/Subheader";
import JustForYou from "@/components/modules/wish-list/JustForYou";
import { useCard } from "@/context/CardContext";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishList = () => {
  const { removeCards, clickedCards, isActive, setIsActive }: any = useCard();

  return (
    <section className='w-[80%] flex flex-col items-center mb-[60px]'>

      <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
        <Header />
        <div className="h-[60px] flex gap-[16px] items-center">
          <div>
            <HeartLogo/>
          </div>

          <CartLogo/>
          <UserLogoComp />
        </div>
      </div>
      <div className='w-full mt-14 flex flex-col gap-[60px]'>
        <div className='w-[130px] h-[21px] flex justify-between'>
          <Link href='/' className='text-gray-400' >Home</Link> /
          <Link href='/wishList' className='text-black'>Wishlist</Link>
        </div>

        <div className="mt-6 flex flex-col gap-20">
          <section>
            <div className="w-full flex justify-between items-center mb-10">
              <h2 className="font-bold text-lg">Wishlst ({clickedCards.length})</h2>
              <button className="border w-[150px] rounded-[4px] py-1 ">
                Move All To Bag
              </button>
            </div>

            {clickedCards.length === 0 ? (
              <p className="text-gray-500">No product clicked yet.</p>
            ) : (

              <main
                className="flex overflow-x-auto gap-3 scrollbar-hide scroll-smooth"
              >
                {clickedCards.map((product:any) => (
                  <section key={product.id} className="min-w-[260px] max-w-[270px] h-[350px] flex flex-col">
                    <div
                      onMouseEnter={() => setIsActive(product.id)}
                      onMouseLeave={() => setIsActive(null)}
                      className="w-full h-[250px] flex justify-center items-center rounded-[4px] bg-[#f5f5f5] relative"
                    >
                      <div className="w-[172px] h-[152px] flex justify-center items-center">
                        <Image src={product.image} width={172} height={152} alt={product.name} className="w-[85%] h-[86%]" />

                        {isActive === product.id && (
                          <div
                            // onClick={() => toggleCard(product)} // 👈 trigger duplication on click
                            className="w-full h-[41px] rounded-b-4 bg-[#000] text-[#fff] text-[16px] leading-[24px] font-medium flex justify-center items-center gap-2 absolute right-0 left-0 bottom-0 cursor-pointer"
                          >
                            <BsCart3 className={`w-[25px] h-[20px]`} />
                            <div>Add to Cart</div>
                          </div>
                        )}
                      </div>


                      <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-[4px] flex justify-center items-center absolute left-2 top-2">
                        <p className="text-white">{product.discount}</p>
                      </div>


                      <div className="flex flex-col justify-center items-center gap-2 absolute top-10 right-4">
                        <div className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
                          <RiDeleteBin6Line
                            onClick={() => removeCards(product.id)}
                            size={20} />
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
                      {/* <StarsComp /> */}
                    </div>

                  </section>
                ))}

              </main>
            )}
          </section>
          

          
          <div>
            <JustForYou/>
          </div>
        </div>
      </div>
    </section>



  );
};

export default WishList;
