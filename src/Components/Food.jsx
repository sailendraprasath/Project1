import React, { useState } from 'react' 
import {data} from '../data/data'

const Food = () => {
    const [foods,setFoods] = useState(data);
    //ipo vanthu filter pandrom inga okk
    const filterType =(category)=>{
        setFoods(
            data.filter((item)=>{
              return  item.category === category;
            })
        );
    };



//inga price filter pandrom ahm pa
 const filterPrice = (price)=>{
    setFoods(
        data.filter((item)=>{
             return item.price === price;
             
        })
    );
 };

  return (
   <>
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* Filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter type */}
        <div >
           <p className='font-bold text-gray-700 '>Filter type</p>
           <div className='flex justify-between flex-wrap'>
              <button onClick={()=>setFoods(data)} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
              <button onClick={()=>filterType('Dosa')} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Dosa</button>
              <button onClick={()=>filterType('Biryani')} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Biryani</button>
              <button onClick={()=>filterType('chicken')} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
           </div>
        </div>
        {/* Filter price */}
        <div>
            <p className='font-bold text-gray-700 '>Filter price</p>
            <div className='flex justify-between  max-md:max-w-[100px] lg:max-w-[500px] w-full'>
                <button onClick={()=>filterPrice('$')} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >0-100</button>
                <button onClick={()=>filterPrice('$$')} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >100-200</button>
                <button onClick={()=>filterPrice('$$$')} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >200-300</button>
                <button onClick={()=>filterPrice('$$$$')} className='m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >300-400</button>
            </div>
        </div>
      </div>


    {/* Display foods */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item,index)=> (
            <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg rounded-lg' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full px-2'>{item.originalPrice}</span>
                    </p>
                </div>
            </div>
        ))}
    </div>

    </div>
   </>
  )
}

export default Food
