import React from 'react'

const Header = () => {
  return (
    <div className=" flex flex-row justify-between mx-10 py-6">
        <div className=" sm:text-6xl text-3xl font-bold">
        howto <span className="text-[#FF2E00]">.</span>
        </div>
        <button className="text-[#FFFF] bg-[#FF2E00] rounded-md px-3">
        Login/Sign-Up
        </button>
    </div>
  )
}

export default Header