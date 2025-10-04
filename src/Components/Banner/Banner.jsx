import React from 'react';
import Navbar from '../Navbar/Navbar';
import bannerImg from '../../assets/banner.jpg';
const Banner = () => {
  return (
    <div className="relative">
      <div className="m-[12px] md:m-[30px] pb-[48px] lg:pb-[268px] bg-[#9538E2] rounded-lg md:rounded-2xl lg:rounded-4xl  h-full ">
        <div className="container mx-auto">
          <div className="mb-12">
            <Navbar></Navbar>
          </div>
          <div className="text-center max-w-[1120px] w-full mx-auto">
            <div className="max-w-11/12  h-auto w-full rounded-lg mx-auto  block md:hidden mb-6">
              <img className="w-full rounded-3xl" src={bannerImg} alt="" />
            </div>
            <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[56px] text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-sm md:text-base font-normal text-white mt-6 mb-8 max-w-[796px] w-full mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="py-3 md:py-[15px] px-[24px] md:px-[26px] lg:px-[30px] text-base md:text-lg lg:text-xl text-[#9538E2] bg-white rounded-4xl shadow-md font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-2/3 h-[500px]  w-full rounded-3xl absolute top-[83%] md:top-[73%] lg:top-[70%] left-1/2 -translate-x-1/2 hidden lg:block">
        <img
          className="w-full h-full rounded-3xl object-cover"
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
