import React from 'react'

function index() {
  return (
    <div className='flex justify-between center sticky h-[75px] top-0 bg-black'>
        <ul className='flex flex-row justify-start mt-6'>
            <li className='text-green-300 ml-8 mr-8'>Home</li>
            <li className='text-green-300 ml-8'>About Us</li>
        </ul>
        <ul className='flex flex-row justify-end mt-5'>
            <li><button className='bg-green-300 border-none pl-2 pr-2 pt-1 pb-1 mr-5 ml-5 rounded'>Log In</button></li>
            <li><button className='bg-green-300 border-none pl-2 pr-2 pt-1 pb-1 ml-5 mr-5 rounded'>Sign Up</button></li>
        </ul>
    </div>
  )
}

export default index