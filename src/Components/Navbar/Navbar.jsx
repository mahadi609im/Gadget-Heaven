import React from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { FaRegHeart } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
const Navbar = () => {
  const path = useLocation();

  return (
    <div className=" w-full f py-4 bg-[#9538E2]">
      <div className="navbar flex justify-between items-center container mx-auto px-[3%] md:px-0">
        <div>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="px-3 text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className="font-bold text-[#9538E2] text-base">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className="font-bold text-[#9538E2] text-base"
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="font-bold text-[#9538E2] text-base"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="font-bold text-white text-base md:text-lg lg:text-xl">
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={`font-bold text-white text-base`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className="font-bold text-white text-base"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="font-bold text-white text-base"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Link
            to=""
            className="text-base md:text-xl w-[32px] h-[32px]  md:w-[40px] md:h-[40px] bg-white rounded-full text-[#3A3A3A] flex justify-center items-center"
          >
            <GrCart />
          </Link>
          <Link
            to=""
            className="text-base md:text-xl w-[32px] h-[32px] md:w-[40px]  md:h-[40px] bg-white rounded-full text-[#3A3A3A] flex justify-center items-center"
          >
            <FaRegHeart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
