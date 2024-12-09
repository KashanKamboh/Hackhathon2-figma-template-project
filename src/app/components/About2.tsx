import React from "react";
import Image from "next/image";



const About2 = () => {
  return (
    <>
    
      <div className="  flex items-center justify-center  gap-[2px] ">
        <div className="w-[630px] h-[430px] bg-[#2A254B]   px-[64px] py-[54px]">
          <h1 className="font-clash-display text-[32px] text-[#FFFFFF] font-normal leading-[39.36px] text-left underline-position-from-font decoration-none w-[383px] h-[39px]  ">It started with a small idea</h1>
          <p className="font-satoshi text-[18px] font-normal leading-[24.3px] px-[24] text-white text-left underline-position-from-font   w-[495px] h-[48px]">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
          <div className="mt-6 text-center md:text-right">
          <button className="w-full md:w-auto px-6 py-3 bg-gray-800 text-white font-medium rounded-lg left-[64px] p-[16px_32px] gap-[10px]  hover:bg-gray-900 ">
            View Collection
          </button>
        </div>
        </div>
        <div className="w-[630px] h-[430px] flex items-center justify-center">
          <Image src="/images/Block.png" alt="image" height={360} width={570} />
        </div>
      </div>
    </>
  );
};

export default About2;
