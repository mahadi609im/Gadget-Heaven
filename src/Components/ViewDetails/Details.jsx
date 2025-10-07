import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import {
  getWishlistState,
  setStoreData,
  setWishlistState,
  setWishlistStored,
} from '../../Utility/StoreData';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import useDataLoader from '../../hooks/useDataLoader';

const Details = () => {
  const [wishlistClicked, setWishlistClicked] = useState([]);

  useEffect(() => {
    const storedWishlist = getWishlistState();
    if (storedWishlist) {
      setWishlistClicked(storedWishlist);
    }
  }, []);

  const { products } = useDataLoader();
  console.log(products);
  const { id } = useParams();
  const paramsId = parseInt(id);

  const product = products.find(product => product.product_id === paramsId);
  console.log(product);
  const {
    product_id,
    product_image,
    description,
    price,
    product_title,
    rating,
    specification,
    availability,
  } = product || {};

  const handleAddToCart = id => {
    setStoreData(id);
  };

  const handleAddToWishlist = (id, stateValue) => {
    setWishlistStored(id);
    const wishlistAdded = {
      [id]: stateValue,
    };
    setWishlistState(wishlistAdded);

    const getStoredStatus = getWishlistState();
    const newStoredStatus = [...getStoredStatus];
    setWishlistClicked(newStoredStatus);
  };

  return (
    <div className="h-[1000px]">
      <div className="py-[32px] bg-[#9538E2] lg:pb-[300px] lg:relative">
        <div className="container mx-auto px-[3%] md:px-0">
          <div className="space-y-4 text-center max-w-[796px] w-full mx-auto">
            <h2 className="text-white font-bold text-[32px]">
              Product Details
            </h2>
            <p className="text-white font-normal text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl container mx-auto px-[3%] md:px-8 h-auto flex flex-col md:grid md:grid-cols-12 gap-8 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2">
        <div className="md:col-span-4 flex items-center md:w-full h-auto lg:h-full rounded-2xl">
          <img
            className="w-full h-auto object-cover rounded-2xl"
            src={product_image}
            alt=""
          />
        </div>
        <div className="md:col-span-8">
          <div className="space-y-3">
            <h2 className="text-[28px] font-semibold text-[#09080F]">
              {product_title}
            </h2>
            <p className="text-[#09080fcc] font-semibold text-xl">
              Price : $ <span>{price}</span>
            </p>
          </div>
          <button
            className={`py-[7px] px-[14px] rounded-4xl my-4 ${
              availability
                ? 'border border-[#309C08] text-[#309C08] font-medium text-sm bg-[#309c081a]'
                : 'border border-[#dd4122] text-[#dd4122] font-medium text-sm bg-[#dd412210]'
            }`}
          >
            {availability ? 'In Stock' : 'Out of Stock'}
          </button>
          <p className="text-lg text-[#09080f99] font-normal">{description}</p>
          <ul className="my-4">
            <h3 className="font-bold text-[#09080F] text-lg mb-3">
              Specification:
            </h3>
            {specification &&
              specification.map((el, idx) => (
                <li className="text-lg text-[#09080f99] font-normal" key={idx}>
                  {idx + 1} {el}
                </li>
              ))}
          </ul>
          <div>
            <h4 className="font-bold text-lg text-[#09080F] mb-3">Rating</h4>
            <div className="flex gap-4 items-center">
              {rating < 5 ? (
                <ul className="flex gap-2 items-center">
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaRegStar
                      className="text-2xl"
                      style={{ color: 'F9C004' }}
                    />
                  </li>
                </ul>
              ) : (
                <ul className="flex gap-2 items-center">
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                  <li>
                    <FaStar className="text-2xl" style={{ color: 'F9C004' }} />
                  </li>
                </ul>
              )}
              <p className="inline px-[14px] py-[7px] rounded-4xl text-[#09080fcc] bg-[#09080f0d]">
                {rating}
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => handleAddToCart(product_id)}
              className="py-[11px] px-[22px] text-white font-bold text-lg bg-[#9538E2] rounded-4xl flex gap-3 items-center cursor-pointer"
            >
              Add To Card <MdOutlineShoppingCart className="text-xl" />
            </button>
            <button
              onClick={() => handleAddToWishlist(product_id, true)}
              className="w-[48px] h-[48px] flex justify-center items-center border border-[#09080f80] rounded-full cursor-pointer"
            >
              {wishlistClicked.some(obj => obj[product_id] === true) ? (
                <FaHeartCircleCheck className="text-2xl text-[#FF0000]" />
              ) : (
                <FaRegHeart className="text-2xl text-[#3A3A3A]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
