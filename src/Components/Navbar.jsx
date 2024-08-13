import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PulseCare from '../assets/Logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [displayDropdown, setDropdown] = useState(false); // Using boolean for dropdown state

  const handleDropDown = () => {
    setDropdown(!displayDropdown); // Toggle dropdown state
  };

  return (
    <div className='Navbar'>
      <nav className="bg-custom-maroon border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center lg:w-1/3 ">
            <img src={PulseCare} className="h-14" alt="PulseCare Logo" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleDropDown}
            aria-controls="navbar-default"
            aria-expanded={displayDropdown ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              displayDropdown ? "block" : "hidden"
            } lg:w-2/3 w-full lg:block md:hidden`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-custom-maroon md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
              <li className='p-2 hover:bg-blue-600 group'>
                <Link
                  to=""
                  className="block py-2 px-3 font-bold text-gray-text rounded md:bg-transparent md:text-gray-text md:p-0 dark:text-gray-text md:dark:text-blue-500 group-hover:text-white"
                  aria-current="page"
                  onClick={handleDropDown} // Close dropdown when link clicked
                >
                 HOME
                </Link>
              </li>
              
              <li className='p-2 hover:bg-blue-600  group'>
                <Link
                  to="about"
                  className="block py-2 px-3 font-bold text-gray-text rounded group-hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-whtie md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleDropDown}
                >
                 ABOUT US
                </Link>
              </li>
              <li className='p-2 hover:bg-blue-600 group'>
                <Link
                  to="/doctorlogin"
                  className="block py-2 px-3 font-bold text-gray-text rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 group-hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleDropDown}
                >
               PRODUCTS  <ArrowDropDownIcon/>
                </Link>
              </li>
              <li className='p-2 hover:bg-blue-600 group'>
                <Link
                  to="/contactus"
                  className="block py-2 px-3 font-bold text-gray-text rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 group-hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleDropDown}
                >
                CONTACT US
                </Link>
              </li>

              {/* <li>
                <Link
                  to="/contactus"
                  className="block py-2 px-3 font-bold text-gray-text rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={handleDropDown}
                >
                  Contact Us
                </Link>
              </li> */}
<li className="">
  <form className="max-w-md mx-auto">
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Products"
        required
      />
      <button
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  </form>
</li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;