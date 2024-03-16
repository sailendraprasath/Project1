import React from 'react'

const HeadLineCards = () => {
  return (
    <>
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Mutton Biryani</p>
              <p className='px-2'>Through 8/26</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full px-2'>
                Order Now
              </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?b=1&s=612x612&w=0&k=20&c=DiaW0yTvt1-ydUk_f_i7YyJ8KoS8ODeHeGlJawwS0o0=" alt="/" />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Vegitable Rice</p>
              <p className='px-2'>Through 8/26</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full px-2'>
                Order Now
              </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/12842255/pexels-photo-12842255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Chicken Noodles</p>
              <p className='px-2'>Through 8/26</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-full px-2'>
                Order Now
              </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
    </>
  )
}


export default HeadLineCards
