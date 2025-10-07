import React from 'react';
import { useNavigate } from 'react-router';

const Gadget = ({ gadget }) => {
  const { product_id, product_title, price, product_image } = gadget;
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-white rounded-2xl space-y-6 shadow">
      <div className="bg-[#D9D9D9] h-[181px] w-full rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={product_image}
          alt=""
        />
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold text-[#09080F]">
          {product_title}
        </h3>
        <p className="text-[#09080f99] font-normal text-xl mt-3 pb-4">
          Price: {price}
        </p>
        <button
          onClick={() => navigate(`product_details/${product_id}`)}
          className="py-[13px] px-[22px] text-[#9538E2] text-lg font-semibold border border-[#9538E2] hover:bg-[#9538E2] hover:text-white transition-all duration-700 rounded-4xl cursor-pointer relative"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Gadget;
