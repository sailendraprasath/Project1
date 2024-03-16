import React from 'react'
import {  AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  return (
    <>
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Right side  */}
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        <div className='fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300'>
        <AiOutlineClose size={30} className="absolute left-4 top-4 cursor-pointer"/>
        <h2 className="text-2xl p-4 ml-40">The<span className="font-bold">Carts</span></h2>

        </div>
    </div>
    </>
  )
}

export default Cart
