import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
<div className='w-full flex justify-center align-middle'>
<div className="About Us lg:w-4/5">
      {/* Breadcrumb */}
      <nav
        className="justify-between px-4 py-3 text-gray-700 border border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
          <li>
            <div className="flex items-center">
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                About Us
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Sidebar */}
        <div className="lg:w-1/5 p-3">
          <div className="p-2">
            <div className="bg-blue-700 text-white p-2 rounded-t-lg">Products Categories</div>
            <div className="p-4 bg-white shadow-md rounded-b-lg border border-gray-200">
              <ul className="list-none pl-5 space-y-2">
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/all-products">All Products</Link>
                </li>
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/house-keeping">House Keeping</Link>
                </li>
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/house-cleaning">House Cleaning</Link>
                </li>
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/cleaner">Cleaner</Link>
                </li>
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/cleaning-items">Cleaning Items</Link>
                </li>
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/cleaning-suppliers">Cleaning Suppliers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-blue-700 text-white p-2 rounded-t-lg">Sub Categories</div>
            <div className="p-4 bg-white shadow-md rounded-b-lg border border-gray-200">
              <ul className="list-none pl-5 space-y-2">
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/home-cleaner">Home Cleaner</Link>
                </li>
                <li className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <Link to="/toilet-cleaner">Toilet Cleaner</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-4/5 p-3">
          <h1 className="text-2xl font-bold mb-4">Get To Know About Us</h1>
          <p className="text-gray-700">
            Kleanbowld is one of the leading Manufacturers of Liquid Phenyl, Acid Cleaners, Toilet Cleaners etc. We direct all our activities to cater the expectations of customers by providing them excellent quality products as per their gratifications. Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy relations with the customers.
          </p>
          <p className="text-gray-700 mt-4">
            For our accomplishment story, we are grateful to our owner, “Mr. YV Rao”, whose continual backing and direction have been useful to us for attaining exponential development in the current market.
          </p>
        </div>
      </div>
    </div>
</div>
  
  );
};

export default AboutUs;
