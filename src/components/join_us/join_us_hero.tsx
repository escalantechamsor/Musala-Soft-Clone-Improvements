import React from 'react'
import world from '@/app/img/join_us/world.jpg'
import Image from 'next/image'
function JoinUsHero() {
  return (
    <section className='w-full h-[90vh] relative flex items-center justify-center'>
<Image className='w-full h-[100%] object-cover lg:object-left-bottom' src={world} alt='hand with a map'/>

<section className=' mt-[18vh] absolute w-[90%] h-[70vh] text-gray-100 pt-20 pr-10 flex items-center justify-center flex-col'>
<h1 className='lg:text-[5rem] text-[4rem] font-extrabold uppercase'>Join Us </h1>
<h2 className='lg:text-[2rem] font-extrabold uppercase'>
from anywhere
</h2>
</section>
    </section>
  )
}

export default JoinUsHero