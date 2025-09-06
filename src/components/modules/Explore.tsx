'use client'
import React from 'react'
import Button from '../common/Button'
import Subheader from '../common/Subheader'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ProductsExplore from '../common/ProductsExplore'

const Explore = () => {
  return (
    <section className='flex flex-col justify-between'>
      <div className='flex justify-between items-end'>
        <Subheader title='Explore Our Products' subTitle='Our Products' />
        <div className='w-[90px] h-[46px] flex justify-between items-center '>
          <button 
            type="button"
            // onClick={() => prev()}
            className='w-9 h-9 bg-[#F5F5F5]  flex justify-center items-center rounded-full'>
            <FaArrowLeft className='w-[15px] h-[15px] '/>
          </button>
          <button 
            type="button"
            // onClick={() => next()}
            className='w-9 h-9 bg-[#F5F5F5] flex justify-center items-center rounded-full'>
            <FaArrowRight className='w-[15px] h-[15px]'/>
          </button>
        </div>
      </div>
      <div>
        <ProductsExplore/>
      </div>
      <div></div>
      <div>
        <Button text='View All Products'/>
      </div>
    </section>
  )
}

export default Explore
