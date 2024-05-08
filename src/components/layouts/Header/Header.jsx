import React from 'react'
import logo from '../../../assets/logo.png'
export const Header = () => {
  return (
    <div className='w-[100%] h-40 bg-[#016048] flex justify-evenly items-center '>
      <div className='w-[20%] flex justify-start items-center ml-[8rem]'>
        <img className='w-40' src={logo} alt="" />
      </div>
      <div className='w-[50%] flex items-center justify-center'>
        <h1 className='text-white text-4xl '>MY FAKE E-COMMERCE</h1>
      </div>
      <div className='w-[20%] flex justify-end items-center mr-[8rem] '>
        <img className='w-40' src={logo} alt="" />
      </div>
    </div>
  )
}
