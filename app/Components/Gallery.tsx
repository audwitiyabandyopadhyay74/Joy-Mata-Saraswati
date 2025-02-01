import React from 'react'
import Image from 'next/image'
import img1 from '../../public/16354509155_2683fe37f8_h.jpg'
import img2 from '../../public/Bansant-Panchami-Sandesh_blbyen.jpg'
import img3 from '../../public/Mata-Saraswati.jpeg'
import img4 from '../../public/OIP (1).jpeg'
import img5  from '../../public/OIP.jpeg'
import img6 from '../../public/R.jpeg'

const Gallery = () => {
  return (
    <div className='g w-screen h-[100vh] flex flex-col items-center justify-center lg:mt-0 mt-[100vh]' id='Gallery'>   
<span className="text-3xl font-bold">Gallery</span>
<div className="w-screen flex flex-wrap h-max items-center gap-5 justify-evenly">
<Image src={img1} width={250} className='rounded-md' alt=''></Image>
<Image src={img2} width={250} className='rounded-md' alt=''></Image>
<Image src={img3} width={250} className='rounded-md' alt=''></Image>
<Image src={img4} width={250} className='rounded-md' alt=''></Image>
<Image src={img5} width={250} className='rounded-md' alt=''></Image>
<Image src={img6} width={250} className='rounded-md' alt=''></Image>
</div>
    </div>
  )
}

export default Gallery