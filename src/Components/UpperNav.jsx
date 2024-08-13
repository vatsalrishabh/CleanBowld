import React from 'react'
import { Link } from 'react-router-dom'

const UpperNav = () => {
  return (
    <div className='upper Nav bg-custom-blue lg:flex hidden'>
        <div className="w-1/2"></div>
        <div className="w-1/2 flex justify-center align-middle">
            <div className='text-white flex'>
               <Link to="tel:7483768118"> <p className='p-3'> +91 7483768118</p></Link>
                <p className='border border-y-2'></p>
                <Link to="mailto:arkariddhi@gmail.com"> <p className='p-3'>arkariddhi@gmail.com</p></Link>
            </div>
        </div>
    </div>
  )
}

export default UpperNav
