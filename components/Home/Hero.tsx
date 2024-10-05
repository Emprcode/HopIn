import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] items-center ">
      <div className="">
        <h2
          className="text-[40px] md:text-[60px]
            font-bold leading-none "
        >
          {/* Premium <span className="text-blue-600"> Car Rental</span> in your
          area */}
          Easy and Fast way to
          <span className="text-indigo-600"> Rent</span> Your Car{" "}
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-7">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h2>
        <button
          className="p-2 mt-5 bg-indigo-500 text-white
            px-4 rounded-full
            hover:scale-105 transition-all"
        >
          Explore Cars
        </button>
      </div>
      <div className="">
        <Image
          src="/hero.png"
          alt="hero"
          width={800}
          height={900}
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
};

export default Hero;
