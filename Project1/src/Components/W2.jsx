import React from "react";

const W2 = () => {
  return (
    <>
      <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
        <div className="w-[300px] h-[420px] group perspective bg-transparent cursor-pointer">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
            <div className="absolute border-2 backface-hidden w-full h-full">
              <img src="src/assets/girl.jpg " className="w-full h-full " />
            </div>
            <div className="absolute overflow-hidden my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
              <div className="text-center text-gray-800 px-2 pb-24 flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-semibold">The Girl Img</h1>
                <p className="my-2">Rating 9.9</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Architecto, aspernatur laudantium sunt numquam quos nisi
                  cumque minus ducimus vitae veniam cupiditate ut enim officia?
                  Esse ullam nostrum laudantium necessitatibus quo.
                </p>
                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000
                group-hover:bottom-20 scale-0 group-hover:scale-125">
                    Woww!!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default W2;
