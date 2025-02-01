import React from 'react'
import Image from "next/image"

import MataSarawatiPic from '../../public/Mata-Saraswati.jpeg'

const Banner = () => {
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-evenly  overflow-x-hidden flex-wrap' id='Home'>
        <div className="img">
        <Image src={MataSarawatiPic} width={500} alt='' className='bannerimg'/>
        </div>
<div className="text text-5xl font-semibold hover:scale-110">
Jay Mata Saraswati
</div>

    </div>
  )
}

export default Banner