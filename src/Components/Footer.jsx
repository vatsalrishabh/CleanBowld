import React from 'react'
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { Home } from '@mui/icons-material';

const Footer = () => {
    const time = new Date();
    const year = time.getFullYear();

  return (
    <div className='Footer'>
        <div className="w-full bg-footer-bg lg:flex justify-center align-middle">
            <div className="lg:w-1/3 sm:w-full p-5">
                <h3 className='font-bold text-xl text-gray-800'>About Us</h3>
                <p>A cleaning product is a blend of specialty materials used to remove soils and stains from a surface and to restore the surface to its original condition. Cleaning products are also used to help remove unwanted microbial contaminants from a surface.</p>
            </div>
            <div className="lg:w-1/3 sm:w-full p-5">
            <h3 className='font-bold text-xl text-gray-800'>Office Address</h3>
              <p className='bold text-gray-700 p-1'>Riddhi Enterprises</p>
              <p className='p-1'><Home/>1 ramaswayya complex Nes office Road,near mini vidhana soudha,yelahanka, Banglore-560064</p>
              <p className='p-1'><CallIcon/>+91 7483768118</p>
              <p className='p-1'><EmailIcon/>arkariddhi@gmail.com</p>
            </div>
        </div>



        <div className="w-full  bg-custom-blue flex">
            <div className="w-full lg:w-1/2 text-white p-3 flex justify-center align-middle">
                © 2018 - {year} © Riddhi Enterprises. All Rights Reserved
            </div>
            <div className="lgw-1/2  text-white p-3 flex justify-center align-middle">
              <p className='px-3'>  Designed by</p>  <p className='hover:text-blue-700'><Link to="https://rcsinfo.in/" target='_blank'>RCS Technology</Link> </p>
            </div>
        </div>
        <div className='w-full p-3'>

        </div>
      
    </div>
  )
}

export default Footer
