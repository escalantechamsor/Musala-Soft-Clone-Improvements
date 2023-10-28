import React from 'react'
import web_dev from '@/app/img/services/software_design/computer.jpg'
import Image from 'next/image'
function HeroSoftDeDev() {
  return (
    <section className='w-full lg:h-[90vh] h-[80vh] relative flex items-center justify-center'>
<Image className='w-full h-[100%] object-cover object-bottom' src={web_dev} alt='A desktop with blue color'/>
<section className=' mt-[18vh] absolute w-[90%] lg:h-[70vh] h-[60vh] text-gray-100 lg:pt-0 pt-10 pr-10 flex items-center justify-center flex-col'>
<h1 className='lg:text-[5rem] md:text-[3rem] text-[2.2rem] font-extrabold uppercase text-center'>SOFTWARE DESIGN </h1>
<h2 className='lg:text-[2rem] text-[1.5rem] font-extrabold uppercase'>
& DEVELOPMENT
</h2>
</section>
    </section>
  )
}

export default HeroSoftDeDev
