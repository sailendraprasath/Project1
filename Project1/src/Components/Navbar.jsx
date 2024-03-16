import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import {data} from '../data/data'

// const Food = () => {
//     const [name,setName] = useState(data);
//     //ipo vanthu filter pandrom inga okk
//     const filterType =(name)=>{
//         setName(
//             data.filter((item)=>{
//               return  item.category === category;
//             })
//         );
//     };


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 table-fixed">
        {/* left side */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Best<span className="font-bold">Eats</span>
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">pickup</p>
          </div>
        </div>





        {/* Search input */}

        <div className="bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 focus:outline-none w-full"
            type="text"
            placeholder="Search Food"
          />
        </div>





        

        {/* Cart button */}

        <div
          onClick={() => setCart(!cart)}
          className="text-white bg-black hidden md:flex py-2 px-2 items-center rounded-full"
        >
          <BsFillCartFill size={20} className="mr-2" />
          Cart
        </div>

        {/* Cart menu and overlay */}
        {cart ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
        ) : (
          ""
        )}

        {/* Right side drawer menu */}
        <div
          className={
            cart
              ? "  fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "  fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setCart(!cart)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            The<span className="font-bold">Carts</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
              <li className="text-xl py-4 flex">
                <MdFavorite size={28} className="mr-4" />
                Favorite
              </li>
              <li className="text-xl py-4 flex">
                <FaWallet size={28} className="mr-4" />
                Wallet
              </li>
              <li className="text-xl py-4 flex">
                <MdHelp size={28} className="mr-4" />
                Help
              </li>
              <li className="text-xl py-4 flex">
                <AiFillTag size={28} className="mr-4" />
                Promotions
              </li>
              <li className="text-xl py-4 flex">
                <BsFillSaveFill size={28} className="mr-4" />
                Best Ones
              </li>
              <li className="text-xl py-4 flex">
                <FaUserFriends size={28} className="mr-4" />
                Invite Friends
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu and overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer "
          />
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                <TbTruckDelivery size={28} className="mr-4" />
                Orders
              </li>
              <li className="text-xl py-4 flex">
                <MdFavorite size={28} className="mr-4" />
                Favorite
              </li>
              <li className="text-xl py-4 flex">
                <FaWallet size={28} className="mr-4" />
                Wallet
              </li>
              <li className="text-xl py-4 flex">
                <MdHelp size={28} className="mr-4" />
                Help
              </li>
              <li className="text-xl py-4 flex">
                <AiFillTag size={28} className="mr-4" />
                Promotions
              </li>
              <li className="text-xl py-4 flex">
                <BsFillSaveFill size={28} className="mr-4" />
                Best Ones
              </li>
              <li className="text-xl py-4 flex">
                <FaUserFriends size={28} className="mr-4" />
                Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
