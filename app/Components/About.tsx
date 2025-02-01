import React from 'react'
import Image from "next/image"
import MataSaraswaitpic from "../../public/Mata-Saraswati.jpeg"


const About = () => {
  return (
    <div className='w-screen h-[100vh] flex flex-col items-center justify-center lg:mt-0 mt-[30vh]' id='About'>
        <div className="flex"><span className='text-5xl font-bold'>About</span> <div className="h-max w-max"><hr className=' bg-black h-[20px] w-[100%]' /></div></div>
        <div className="flex gap-5 items-center justify-center w-screen h-max flex-wrap">
<Image src={MataSaraswaitpic} alt='' className='ai' style={{borderRadius:"24 px"}}/>
<span className='w-[90vh] hover:translate-y-[-10px] at bg-gray-400 rounded-lg p-4'>Saraswati is a principal goddess in Hinduism, revered as the goddess of knowledge, education, learning, arts, speech, poetry, music, purification, language, and culture.

She is part of the Tridevi, along with the goddesses Lakshmi and Parvati.

Saraswati is also venerated in Jainism and Buddhism.

In the Vedic tradition, she is associated with the Sarasvati River and is one of the earliest examples of a river goddess in Indian tradition.

Over time, her connection to the river diminished, and she became more associated with speech, poetry, music, and culture.

Saraswati is linked to the creator god Brahma, either as his consort or creation, representing his creative power.

She is portrayed as a serene woman with a radiant white complexion, dressed in white attire, and holding a book, a rosary, a water pot, and a veena.

Her mount is either a hamsa (white goose or swan) or a peacock.

Saraswati is widely worshipped across India, particularly on her designated festival day, Vasant Panchami.

</span>
        </div>
    </div>
  )
}

export default About