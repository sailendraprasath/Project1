import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
   <>
    <div className='max-w-[1640px] px-4 py-12 m-auto'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated New Items</h1>
      {/* categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item,index)=>(
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center border shadow-xl hover:shadow-black hover:scale-105 duration-300'>
                <h2 className='font-bold text-xl'>{item.name}</h2>
                <img className='w-20' src={item.images} alt={item.name} />
            </div>
        ))}
      </div>
    </div>
   </>
  )
}


export default Category
