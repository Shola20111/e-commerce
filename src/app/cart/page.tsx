'use client';
import { useCard } from "@/context/CardContext";
import Image from "next/image";
import Link from 'next/link'
import { CartLogo, HeartLogo } from "@/components/common/header/headerTools";
import UserLogoComp from "@/components/common/header/UserLogoComp";
import Header from "@/components/common/header/Header";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, total } = useCard();


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
          <Link href='/wishList' className='text-black'>Cart</Link>
        </div>

          {/* Header Row */}
          <div className="hidden md:flex items-center justify-between w-full h-[72px] text-[24px] font-semibold border border-gray-400 uppercase">
            <p className="w-[260px] ">Products</p>
            <p className="md:w-40 border flex justify-center items-center">Price</p>
            <p className="md:w-40 border flex justify-center items-center">Quantity</p>
            <p className="md:w-40 border flex justify-center items-center">Subtotal</p>
          </div>

          {/* Cart Items */}
          <div>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:flex items-center justify-between w-full h-[102px] text-[15px] rounded-[4px] "
                  style={{ boxShadow: "0 0px 5px rgba(0,0,0,0.1)" }}

                >
                  {/* Product Info */}
                  <div className="flex items-center w-[260px] pl-4 relative">
                    <Image
                      src={item.image!}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white text-sm flex items-center justify-center hover:text-red-700 w-3 h-3 rounded-full bg-[red] absolute top-0 left-1"
                      >
                        x
                      </button>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      
                    </div>
                  </div>

                  {/* Price (mobile-friendly) */}
                  <div className="flex md:block justify-between items-center">
                    <p className="md:hidden font-semibold">Price:</p>
                    <p className="md:w-40 flex justify-center items-center ">${item.price}</p>
                  </div>

                  {/* Quantity */}
                  <div className="flex md:block justify-between md:justify-start items-center">
                    <p className="md:hidden font-semibold">Qty:</p>
                    <div className="flex items-center gap-2  md:w-40 justify-center">
                      <div className="w-15 flex justify-center items-center gap-1 border rounded-[4px] ">
                        <span className="px-2">{item.quantity}</span>
                        <div className="flex flex-col-reverse ">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className=" hover:bg-gray-100"
                          >
                            <VscChevronDown/>
                          </button>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className=" rounded hover:bg-gray-100"
                          >
                            <VscChevronUp/>
                          </button>
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>

                  {/* Subtota for Item */}
                  <div className="flex md:block justify-between md:justify-start items-center">
                    <p className="md:hidden font-semibold">Subtotal:</p>
                    <p className="font-medium md:w-40 flex justify-center items-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div className="flex justify-between h-[40px] w-full mt-5">
              <button className='bg-[#fff] py-2 px-10 rounded-[4px] border border-gray-200'>Return To Shop</button>
              <button className='bg-[#fff] py-2 px-10 rounded-[4px] border border-gray-200'>Update Cart</button>
            </div>
          </div>
          

          {/* Cart Total */}
          {cartItems.length > 0 && (
            <div className="w-full h-[324px] flex flex-col md:flex-row justify-end mt-6">
              <div className="flex justify-start gap-4 h-[40px] w-[70%] ">
                <button className='bg-[#fff] py-2 px-10 rounded-[4px] border border-gray-200'>Coupon Code</button>
                <button className='bg-[#DB4444] py-2 px-6 rounded-[4px]'>Apply Coupon</button>
              </div>
              <div className="w-full md:w-[30%] h-full bg-white border border-gray-200 p-4 rounded-lg shadow flex flex-col justify-between">
                <h1 className="font-bold text-[30px] ">Cart Total</h1>
                <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200">
                  <p className="font-semibold">Subtotal:</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between font-bold text-lg ">
                  <p>Total:</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <button className="mt-4 mx-auto w-[200px] bg-[#DB4444] text-white py-2 rounded-md font-semibold hover:bg-[#b63535]">
                  Process to Checkout
                </button>
              </div>
            </div>
          )}
        </div>


    </section>
  )
}


export default Cart;
