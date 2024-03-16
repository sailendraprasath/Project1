import React from "react";

const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <div className=" w-full ">
      <div>
        {/* logo here */}
        <div className="px-7 py-4 flex justify-between items-center ">
          <div className="flex text-2xl cursor-pointer items-center gap-0.5">
            <img
              src="src/assets/logoimg.png"
              alt="dummble"
              className="w-14 h-10 shadow-lg"
            />
            <span className="text-4xl font-bold font-My1">YUMMY FOODIES</span>
          </div>

          {/* nav links */}
          <ul className="flex gap-1 pl-8">
            {Links.map((link) => (
              <li className="my-2 font-My2 text-xl ml-8">
                <a href="/">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
