import React, { use } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HandleRemoveBtnCartContext } from '../Dashboard';

const Cart = ({ cartItem }) => {
  const { product_id, product_title, product_image, description, price } =
    cartItem;

  const handleCartItemRemoveContext = use(HandleRemoveBtnCartContext);

  return (
    <div className="p-8 bg-white rounded-2xl flex gap-8 items-center mb-6">
      <div className="w-[200px] h-[124px] bg-[#D9D9D9] rounded-xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={product_image}
          alt=""
        />
      </div>
      <div className="max-w-[909px] w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#09080F]">
            {product_title}
          </h2>
          <button
            onClick={() => handleCartItemRemoveContext(product_id)}
            className="w-[40px] h-[40px] flex justify-center items-center rounded-full border border-[#FF0000] text-[#FF0000] text-xl cursor-pointer hover:bg-[#FF0000] hover:text-white transition-all duration-200"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
        <p className="text-[#09080f99] text-lg font-normal mt-3 pb-4 max-w-[656px]">
          {description}
        </p>
        <p className="text-[#09080fcc] font-semibold text-xl">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default Cart;
