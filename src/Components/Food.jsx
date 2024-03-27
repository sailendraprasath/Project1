import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods, setoriginal] = useState(data);
  //ipo vanthu filter pandrom inga okk
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // //try pannalam
  // const FilterOriginalPrize =(originalPrice)=>{
  //  setoriginal(
  //     data.filter((items)=>{
  //         if(0<=100){
  //            return items.originalPrice === originalPrice;
  //         }
  //         else{
  //             alert("not in stock");
  //         }
  //     })
  //  )
  // };

  //inga price filter pandrom ahm pa
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 py-12 ">
        <h1 className="text-orange-950  text-2xl lg:text-4xl text-center  font-My4 ">
          TOP RATED MENU ITEMS{" "}
        </h1>
        {/* Filter row */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Filter type */}
          <div>
            <p className="font-bold text-gray-700 lg:ml-36 ">FILTER TYPE</p>
            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => setFoods(data)}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                ALL
              </button>
              <button
                onClick={() => filterType("Dosa")}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                DOSA
              </button>
              <button
                onClick={() => filterType("Biryani")}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                BIRYANI
              </button>
              <button
                onClick={() => filterType("chicken")}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                CHICKEN
              </button>
            </div>
          </div>
          {/* Filter price */}
          <div>
            <p className="font-bold text-gray-700 lg:ml-44  ">FILTER PRICE</p>
            <div className="flex justify-between  max-md:max-w-[100px] lg:max-w-[500px] w-full">
              <button
                onClick={() => filterPrice("$")}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                0-100
              </button>
              <button
                onClick={() => filterPrice("$$")}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                100-200
              </button>
              <button
                onClick={() => filterPrice("$$$")}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                200-300
              </button>
              <button
                onClick={() => filterPrice("$$$$")}
                className="m-1 border-2 rounded-full px-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-700 duration-500"
              >
                300-400
              </button>
            </div>
          </div>
        </div>

        {/* Display foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
          {foods.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg hover:scale-105 duration-300 bg-black/90 rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg rounded-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold font-my5 text-white">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full px-2 font-my5">
                    {item.originalPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Food;
