import React, { createContext, useEffect, useState } from 'react';
import {
  getStoredItem,
  getWishlistStored,
  removeFromCart,
  removeFromWishlist,
} from '../../Utility/StoreData';
import Cart from './Cart/Cart';
import Wishlist from './Wishlist/Wishlist';
import { HiSortDescending } from 'react-icons/hi';
import Group from '../../assets/Group.png';
import { Bounce, toast } from 'react-toastify';
import useDataLoader from '../../hooks/useDataLoader';

const HandleWishlistBtnContext = createContext(null);
const HandleRemoveBtnCartContext = createContext(null);

const Dashboard = () => {
  const { products } = useDataLoader();

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartClicked, setCartClicked] = useState(true);

  useEffect(() => {
    // Cart
    const storedData = getStoredItem();

    let cartData = products.filter(el => storedData.includes(el.product_id));

    setCart(cartData);

    // Wishlist
    let wishlistData = getWishlistStored();

    let wishtLists = products.filter(el =>
      wishlistData.includes(el.product_id)
    );
    setWishlist(wishtLists);
  }, [products]);

  const handleCartBtn = () => {
    setCartClicked(true);
  };

  const handleWishlistBtn = () => {
    setCartClicked(false);
  };

  let totalPrice = cart.reduce((acc, prev) => acc + prev.price, 0);

  // sort functionality
  const [selected, setSelected] = useState('Sort by');
  const [open, setOpen] = useState(false);

  const options = ['Price: Low to High', 'Price: High to Low'];

  const handleSortOptions = optionType => {
    setSelected(optionType);

    if (optionType === 'Price: Low to High') {
      let sortByPriceLow = [...cart].sort((a, b) => a.price - b.price);
      setCart(sortByPriceLow);
    } else if (optionType === 'Price: High to Low') {
      let sortByPriceHigh = [...cart].sort((a, b) => b.price - a.price);
      setCart(sortByPriceHigh);
    }
  };

  // Purchase button
  const handlePurchase = () => {
    return document.getElementById('my_modal_5');
  };

  // Remove wishlist

  const handleRemoveWishlist = id => {
    removeFromWishlist(id);
    let filteredWishlist = wishlist.filter(el => el.product_id !== id);
    setWishlist(filteredWishlist);
    toast.success('Removed Successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  const handleCartItemRemove = id => {
    removeFromCart(id);
    const filterCartItemRemoveRealtime = cart.filter(
      el => el.product_id !== id
    );
    setCart(filterCartItemRemoveRealtime);
    toast.success('Removed Successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  return (
    <div className="mb-40">
      <div className="py-[32px] bg-[#9538E2]">
        <div className="container mx-auto px-[3%] md:px-0">
          <div className="space-y-4 text-center max-w-[796px] w-full mx-auto">
            <h2 className="text-white font-bold text-[32px]">Dashboard</h2>
            <p className="text-white font-normal text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-6 w-full justify-center">
              <button
                onClick={handleCartBtn}
                className={`border border-white py-[13px] px-[64px] rounded-4xl text-lg cursor-pointer transition-all duration-700 ${
                  cartClicked
                    ? 'font-extrabold text-[#9538E2] bg-white'
                    : 'text-white hover:bg-white hover:text-[#9538E2] hover:font-extrabold'
                }`}
              >
                Cart
              </button>
              <button
                onClick={handleWishlistBtn}
                className={`border border-white text-lg py-[13px] px-[64px] rounded-4xl  cursor-pointer ${
                  !cartClicked
                    ? 'font-extrabold text-[#9538E2] bg-white'
                    : 'text-white hover:bg-white hover:text-[#9538E2] hover:font-extrabold'
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {cartClicked ? (
          <div className="container mx-auto px-[3%] md:px-0">
            <div className="mt-12 flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#0B0B0B]">Cart</h2>
              <div className="flex gap-6 items-center">
                <p className="text-2xl font-bold text-[#0B0B0B]">
                  Total cost: {totalPrice}
                </p>
                <div className="flex gap-4">
                  <div className="relative inline-block">
                    {/* Gradient Button */}
                    <button
                      onClick={() => {
                        setOpen(!open);
                      }}
                      className="relative p-[2px] rounded-4xl bg-gradient-to-b from-[#A13DE6] to-[#D764E7] cursor-pointer min-w-[200px] w-full"
                    >
                      <span className="bg-white text-[#9538E2] py-[11px] px-[26px] rounded-4xl text-base font-medium flex items-center justify-between gap-2">
                        {selected} <HiSortDescending className="text-2xl" />
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    {open && (
                      <div className="absolute mt-4 bg-white shadow-lg rounded-2xl z-50 w-full">
                        <ul>
                          {options.map(option => (
                            <li
                              key={option}
                              onClick={() => {
                                handleSortOptions(option);
                                setOpen(false);
                              }}
                              className="px-4 py-3 hover:bg-[#f0f0f0] cursor-pointer text-base text-[#9538E2] font-medium flex items-center gap-2"
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      handlePurchase().showModal();
                    }}
                    className="py-[13px] px-[26px] rounded-4xl text-lg font-medium text-white bg-gradient-to-b from-[#A13DE6] to-[#D764E7] cursor-pointer"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            {cart.length > 0 ? (
              <div>
                {cart.map(cartItem => (
                  <HandleRemoveBtnCartContext.Provider
                    value={handleCartItemRemove}
                  >
                    <Cart key={cartItem.product_id} cartItem={cartItem}></Cart>
                  </HandleRemoveBtnCartContext.Provider>
                ))}
              </div>
            ) : (
              <p className="text-[#09080f99]">Your list is currently empty.</p>
            )}
          </div>
        ) : (
          <div className="container mx-auto px-[3%] md:px-0">
            <div className="mt-12 flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#0B0B0B]">WishList</h2>
            </div>
            {wishlist.length > 0 ? (
              <div>
                {wishlist.map(wishlistItem => (
                  <HandleWishlistBtnContext.Provider
                    value={handleRemoveWishlist}
                  >
                    <Wishlist
                      key={wishlistItem.product_id}
                      wishlistItem={wishlistItem}
                    ></Wishlist>
                  </HandleWishlistBtnContext.Provider>
                ))}
              </div>
            ) : (
              <p className="text-[#09080f99]">Your list is currently empty.</p>
            )}
          </div>
        )}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-8 flex flex-col justify-center items-center text-center">
          <div className=" flex flex-col gap-6 justify-center items-center">
            <div className="w-[72px] h-[72px]">
              <img className="w-full h-full object-cover" src={Group} alt="" />
            </div>
            <h3 className="font-bold text-2xl text-[#09080F]">
              Payment Successfully
            </h3>
            <div className="text-[#09080f99] text-base font-medium space-y-3  ">
              <p>Thanks for purchasing.</p>
              <p>Total: {totalPrice}</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
export { HandleWishlistBtnContext, HandleRemoveBtnCartContext };
