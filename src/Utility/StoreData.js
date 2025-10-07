import { Bounce, toast } from 'react-toastify';

const getStoredItem = () => {
  let storedItemStr = localStorage.getItem('cart');

  if (storedItemStr) {
    let storedItem = JSON.parse(storedItemStr);
    return storedItem;
  } else {
    return [];
  }
};

const setStoreData = id => {
  const storedItems = getStoredItem();

  if (storedItems.includes(id)) {
    toast.error('Already in Cart', {
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
  } else {
    toast.success('Added in Cart', {
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
    storedItems.push(id);
    let newDataconvetStr = JSON.stringify(storedItems);
    localStorage.setItem('cart', newDataconvetStr);
  }
};

const getWishlistStored = () => {
  let wishlistStoredStr = localStorage.getItem('wishlist');
  if (wishlistStoredStr) {
    let wishlistStored = JSON.parse(wishlistStoredStr);
    return wishlistStored;
  } else {
    return [];
  }
};

const setWishlistStored = id => {
  let wishlistStoredData = getWishlistStored();
  const storedItems = getStoredItem();

  if (wishlistStoredData.includes(id)) {
    toast.error('Already in Wishlist', {
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
  } else if (storedItems.includes(id)) {
    toast.error('Already in Cart', {
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
  } else {
    toast.success('Added in Wishlist', {
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
    wishlistStoredData.push(id);
    let wishlistStoredDataStr = JSON.stringify(wishlistStoredData);
    localStorage.setItem('wishlist', wishlistStoredDataStr);
  }
};

const removeFromCart = id => {
  const storedCart = getStoredItem();
  const filterCart = storedCart.filter(el => el !== id);
  let filterCartStr = JSON.stringify(filterCart);
  localStorage.setItem('cart', filterCartStr);
};

const removeFromWishlist = id => {
  const wishlistStoredData = getWishlistStored();
  const filteredWishlist = wishlistStoredData.filter(el => el !== id);
  const converNewWishlistStr = JSON.stringify(filteredWishlist);
  localStorage.setItem('wishlist', converNewWishlistStr);
};

const getWishlistState = () => {
  let isWishlist = localStorage.getItem('wishlistStatus');

  if (isWishlist) {
    let storedItem = JSON.parse(isWishlist);
    return storedItem;
  } else {
    return [];
  }
};

const setWishlistState = wishlistStateValue => {
  const storedWishlistState = getWishlistState();

  const exists = storedWishlistState.some(
    el => Object.keys(el)[0] === Object.keys(wishlistStateValue)[0]
  );

  if (!exists) {
    storedWishlistState.push(wishlistStateValue);
    let wishlistStatusStr = JSON.stringify(storedWishlistState);
    localStorage.setItem('wishlistStatus', wishlistStatusStr);
  }
};

// const removeStateFromWishlist = id => {
//   const wishlistStateStoredData = getWishlistState();
//   const filteredWishlistState = wishlistStateStoredData.filter(el => el !== id);
//   console.log(filteredWishlistState);
//   const converNewWishlistStr = JSON.stringify(filteredWishlistState);
//   localStorage.setItem('wishlist', converNewWishlistStr);
// };

export {
  setStoreData,
  getStoredItem,
  setWishlistStored,
  getWishlistStored,
  removeFromCart,
  removeFromWishlist,
  setWishlistState,
  getWishlistState,
  // removeStateFromWishlist,
};
