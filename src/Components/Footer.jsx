import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="font-ProtestRiot">
      <footer className="bg-black/80 py-8 sm:py-10 md:py-12 lg:py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col">

            <h1 className="text-xl sm:text-2xl mb-4 sm:mb-0 font-extrabold">
              The Best <span className="text-orange-400">Foods</span>
            </h1> 
            <h1 className="text-xl sm:text-2xl mb-4 sm:mb-0 font-extrabold">
              NANDRI <span className="text-orange-400">MENDUM VARUGA</span>
            </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center border rounded-full p-1">
                <IoIosContact size={30} className="mr-2" />
                <span className="text-sm font-bold">
                  Contact:{" "}
                  <span className="text-orange-400">9988776655</span>
                </span>
              </div>
              <div className="flex items-center border rounded-full p-1">
                <FaInstagram size={30} className="mr-2" />
                <span className="text-sm font-bold">
                  Instagram:{" "}
                  <span className="text-orange-400">____sailesh____</span>
                </span>
              </div>
              <div className="flex items-center border rounded-full p-1">
                <MdOutlineAlternateEmail size={30} className="mr-2" />
                <span className="text-sm font-bold">
                  Email:{" "}
                  <span className="text-orange-400">
                    saileshfoods@gmail.com
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
