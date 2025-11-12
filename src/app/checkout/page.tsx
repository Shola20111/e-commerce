"use client"
import Header from '@/components/common/header/Header'
import { CartLogo, HeartLogo } from '@/components/common/header/headerTools'
import UserLogoComp from '@/components/common/header/UserLogoComp'
import { useCard } from '@/context/CardContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc'

const Checkout = () => {
  const { cartItems, total } = useCard();
  return (
    // <section className='w-[80%] flex flex-col items-center mb-[60px]'>

    //   <div className='w-full flex items-center gap-[16px] mt-4 pb-2 border-b border-[#e4e0e0] '>
    //     <Header />
    //     <div className="h-[60px] flex gap-[16px] items-center">
    //       <div>
    //         <HeartLogo />
    //       </div>

    //       <CartLogo />
    //       <UserLogoComp />
    //     </div>
    //   </div>
    //   <main className='w-full h-auto mt-14 grid grid-cols-2'>
    //     <section className='flex flex-col gap-10'>
    //       <div className=' h-[21px] flex gap-2'>
    //         <Link href='/account' className='text-gray-400' >Account</Link> /
    //         <Link href='/my-account' className='text-gray-400' >My Account</Link> /
    //         <Link href='/product' className='text-gray-400' >Product</Link> /
    //         <Link href='/cart' className='text-gray-400' >View Cart</Link> /
    //         <Link href='/checkout' className='text-black'>Checkout</Link>
    //       </div>
    //       <h2 className='text-black text-[36px] leading-[30px] tracking-[4%] font-medium  mt-5'>
    //         Billing Details
    //       </h2>
    //       <form className='flex flex-col gap-[32px] '>

    //         <div className='flex flex-col gap-2'>
    //           <label htmlFor="firstname" className='text-[#000000] text-[16px] leading-[24px] ' >First Name<span className='text-red-500 text-sm'>*</span></label>
    //           <input type="text" className='bg-[#f5f5f5] h-[50px] w-[470px] rounded-[4px] outline-none ' />
    //         </div>

    //         <div className='flex flex-col gap-2'>
    //           <label htmlFor="companyName" className='text-[#000000] text-[16px] leading-[24px] ' >Company Name </label>
    //           <input type="text" className='bg-[#f5f5f5] h-[50px] w-[470px] rounded-[4px] outline-none' />
    //         </div>

    //         <div className='flex flex-col gap-2'>
    //           <label htmlFor="address" className='text-[#000000] text-[16px] leading-[24px] ' >Street Address <span className='text-red-500 text-sm'>*</span></label>
    //           <input type="text" className='bg-[#f5f5f5] h-[50px] w-[470px] rounded-[4px] outline-none' />
    //         </div>

    //         <div className='flex flex-col gap-2'>
    //           <label htmlFor="apartment" className='text-[#000000] text-[16px] leading-[24px] ' >Apartment, floor, etc. (optional)</label>
    //           <input type="text" className='bg-[#f5f5f5] h-[50px] w-[470px] rounded-[4px] outline-none' />
    //         </div>

    //         <div className='flex flex-col gap-2'>
    //           <label htmlFor="phoneNumber" className='text-[#000000] text-[16px] leading-[24px] ' >Phone Number <span className='text-red-500 text-sm'>*</span></label>
    //           <input type="text" className='bg-[#f5f5f5] h-[50px] w-[470px] rounded-[4px] ' />
    //         </div>

    //         <div className='flex flex-col gap-2'>
    //           <label htmlFor="email" className='text-[#000000] text-[16px] leading-[24px] ' >Email Address <span className='text-red-500 text-sm'>*</span></label>
    //           <input type="text" className='bg-[#f5f5f5] h-[50px] w-[470px] rounded-[4px] ' />
    //         </div>

    //         <div className='flex gap-2'>
    //           <input className='accent-red-500' type="checkbox" checked />
    //           <p className='text-4 text-black leading-6 '>Save this information for faster check-out next time</p>
    //         </div>

    //       </form>
    //     </section>

    //     <section className='w-[527px] flex flex-col justify-center'>
    //       <div className='w-[100%] pl-[15%] flex flex-col gap-5'>
    //         <div className="flex flex-col gap-8 w-[85%]">
    //           {cartItems.length === 0 ? (
    //             <p className="text-gray-500 text-center">Your cart is empty.</p>
    //           ) : (
    //             cartItems.map((item) => (
    //               <div
    //                 key={item.id}
    //                 className="flex items-center justify-between w-full text-[15px] rounded-[4px]"

    //               >
    //                 {/* Product Info */}
    //                 <div className="flex items-center w-[260px]  relative">
    //                   <Image
    //                     src={item.image!}
    //                     alt={item.name}
    //                     width={60}
    //                     height={60}
    //                     className="rounded-md"
    //                   />
    //                   <div>
    //                     <p className="font-medium">{item.name}</p>
    //                   </div>
    //                 </div>

    //                 {/* Subtota for Item */}
    //                 <div className="flex justify-between items-center">

    //                   <p className="font-medium flex justify-center items-center">
    //                     ${(item.price * item.quantity).toFixed(2)}
    //                   </p>
    //                 </div>
    //               </div>
    //             ))
    //           )}

    //           {/* Cart Total */}
    //           {cartItems.length > 0 && (
    //             <div className="w-full flex flex-col">
    //               <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200">
    //                 <p className="font-semibold">Subtotal:</p>
    //                 <p>${total.toFixed(2)}</p>
    //               </div>
    //               <div className="flex justify-between mb-2 pb-2 border-b border-b-gray-200">
    //                 <p>Shipping</p>
    //                 <p>Free</p>
    //               </div>
    //               <div className="flex justify-between font-bold text-lg ">
    //                 <p>Total:</p>
    //                 <p>${total.toFixed(2)}</p>
    //               </div>
    //             </div>
    //           )}

    //           <div>
    //             <div className='flex items-center justify-between' >
    //               <div className='flex gap-2'>
    //                 <input type="radio" />
    //                 <p className='text-black text-[16px] leading-[24px] '>Bank</p>
    //               </div>
    //               <div className='flex gap-2'>
    //                 <Image src='/banks-logo/Bkash.png' width={42} height={28} alt='Bkash' />
    //                 <Image src='/banks-logo/Visa.png' width={42} height={28} alt='Visa' />
    //                 <Image src='/banks-logo/Mastercard.png' width={42} height={28} alt='Mastercard' />
    //                 <Image src='/banks-logo/Nagad.png' width={42} height={28} alt='Nagad' />
    //               </div>
    //             </div>

    //             <div className='flex gap-2'>
    //               <input type="radio" className='accent-black' checked />
    //               <p className='text-black text-[16px] leading-[24px] '>Cash on delivery</p>
    //             </div>
    //           </div>

    //         </div>


    //         <div className="w-full flex justify-start gap-4 h-[40px]  ">
    //           <button className='bg-[#fff] flex-1 py-2 px-10 rounded-[4px] border border-gray-200'>Coupon Code</button>
    //           <button className='bg-[#DB4444] py-2 px-6 text-white rounded-[4px] hover:bg-[#b63535]'>Apply Coupon</button>
    //         </div>
    //         <Link href='/checkout'>
    //           <button className="mt-4 mx-auto w-[200px] bg-[#DB4444] text-white py-2 rounded-md font-semibold hover:bg-[#b63535]">
    //             Place Order
    //           </button>
    //         </Link>

    //       </div>


    //     </section>
    //   </main>

    // </section>

    <section className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center mb-16">
  {/* Header */}
  <div className="w-full flex items-center justify-between gap-4 mt-4 pb-2 border-b border-[#e4e0e0]">
    <Header />
    <div className="h-[60px] flex gap-4 items-center">
      <HeartLogo />
      <CartLogo />
      <UserLogoComp />
    </div>
  </div>

  {/* NOTE: use 1 column up to lg, then 2 columns on large screens */}
  <main className="w-full h-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Billing Form Section */}
    <section className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
        <Link href="/account" className="hover:text-black">Account</Link> /
        <Link href="/my-account" className="hover:text-black">My Account</Link> /
        <Link href="/product" className="hover:text-black">Product</Link> /
        <Link href="/cart" className="hover:text-black">View Cart</Link> /
        <Link href="/checkout" className="text-black font-medium">Checkout</Link>
      </div>

      <h2 className="text-black text-[26px] md:text-[30px] lg:text-[36px] leading-[30px] font-semibold mt-4">
        Billing Details
      </h2>

      <form className="flex flex-col gap-6">
        {/* First Name */}
        <div className="flex flex-col gap-2 max-w-full">
          <label htmlFor="firstname" className="text-[16px] font-medium">
            First Name <span className="text-red-500 text-sm">*</span>
          </label>
          {/* fluid width: full on mobile/tablet, constrained on large */}
          <input
            type="text"
            id="firstname"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="companyName" className="text-[16px] font-medium">Company Name</label>
          <input
            type="text"
            id="companyName"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Street Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-[16px] font-medium">
            Street Address <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="text"
            id="address"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Apartment */}
        <div className="flex flex-col gap-2">
          <label htmlFor="apartment" className="text-[16px] font-medium">
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="text-[16px] font-medium">
            Phone Number <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[16px] font-medium">
            Email Address <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#f5f5f5] h-12 w-full lg:max-w-[470px] rounded-md px-3 outline-none"
          />
        </div>

        {/* Save Info */}
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 accent-red-500" defaultChecked />
          <p className="text-[14px] text-black leading-6">
            Save this information for faster checkout next time
          </p>
        </div>
      </form>
    </section>

    {/* Order Summary Section */}
    <section className="w-full flex flex-col justify-start md:justify-center">
      <div className="flex flex-col gap-6 w-full lg:pl-8">
        {/* Cart Items */}
        <div className="flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-[15px]">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    src={item.image!}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md flex-shrink-0"
                  />
                  <p className="font-medium truncate max-w-[220px]">{item.name}</p>
                </div>
                <p className="font-medium ml-4">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
        </div>

        {/* Totals */}
        {cartItems.length > 0 && (
          <div className="flex flex-col gap-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <p className="font-semibold">Subtotal:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <p className="text-[16px]">Bank</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Image src="/banks-logo/Bkash.png" width={42} height={28} alt="Bkash" />
              <Image src="/banks-logo/Visa.png" width={42} height={28} alt="Visa" />
              <Image src="/banks-logo/Mastercard.png" width={42} height={28} alt="Mastercard" />
              <Image src="/banks-logo/Nagad.png" width={42} height={28} alt="Nagad" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" name="payment" className="accent-black" defaultChecked />
            <p className="text-[16px]">Cash on delivery</p>
          </div>
        </div>

        {/* Coupon + Order Button */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="bg-white py-2 px-6 rounded-md border border-gray-200 flex-1 hover:bg-gray-100">
            Coupon Code
          </button>
          <button className="bg-[#DB4444] text-white py-2 px-6 rounded-md hover:bg-[#b63535]">
            Apply Coupon
          </button>
        </div>

        <Link href="/checkout" className="mt-4 w-full">
          <button className="w-full bg-[#DB4444] text-white py-3 rounded-md font-semibold hover:bg-[#b63535]">
            Place Order
          </button>
        </Link>
      </div>
    </section>
  </main>
</section>

  )
}

export default Checkout