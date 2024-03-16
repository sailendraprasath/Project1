import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="font-ProtestRiot  ">
      <footer className="bg-black/80 py-20 h-full text-black">
        <div className="flex justify-between px-10 py-7 items-center">
          <h1 className="text-2xl mb-0 font-extrabold text-white">
            The Best <span className="text-orange-400">Foods</span>
            <h1 className=" text-4xl font-extrabold text-white ">
              NANDRI <span className="text-orange-400">MENDUM VARUGA</span>
            </h1>
          </h1>
          <div className="flex flex-row px-16 gap-10 cursor-pointer">
            <h1 className="text-sm font-bold text-white flex justify-between items-center border rounded-full px-2 py-2 shadow-xl hover:shadow-black hover:scale-105 duration-300">
              <IoIosContact size={30} />
              Contact: <span className="text-orange-400">9988776655</span>
            </h1>
            <h1 className="text-sm font-bold text-white flex justify-between items-center border rounded-full px-2 shadow-xl hover:shadow-black hover:scale-105 duration-300">
              <FaInstagram size={30} />
              Instagram:
              <span className="text-orange-400">____sailesh____</span>
            </h1>
            <h1 className="text-sm font-bold text-white flex justify-between items-center border rounded-full px-2 shadow-xl hover:shadow-black hover:scale-105 duration-300">
              <MdOutlineAlternateEmail size={30} />
              Email:
              <span className="text-orange-400">saileshfoods@gmail.com</span>
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
