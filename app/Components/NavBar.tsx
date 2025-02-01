import React from 'react'

const li = "cursor-pointer"
const NavBar = () => {
  return (
    <nav className="w-screen h-24 flex items-center justify-between gap-10 p-5 fixed">
<div className=" h-full w-max"><span className='text-2xl font-semibold'>Ma Saraswati</span></div>
    <div className="links w-max h-full">
<ul className='h-full w-max flex flex-wrap gap-6'>
    <li className={li}><a href="#Home">Home</a></li>
    <li className={li}><a href="#About">About</a></li>
    <li className={li}><a href="#Gallery">Gallery</a></li>
    <li className={li}><a href="#Contact">Connect</a></li>
</ul>

    </div>
    </nav>
  )
}

export default NavBar