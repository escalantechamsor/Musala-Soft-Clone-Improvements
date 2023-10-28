import React from 'react'
import Image from 'next/image'

import soft_dev from '@/app/img/services/software_design/soft_dev.png';
function Section1Dev() {
  return (
    <section className='w-full min-h-[50vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden my-5'>
    <Image className='lg:h-[80vh] h-[60vh] lg:w-[50%] w-full object-contain rounded-sm' src={soft_dev} alt='tecnologies' />
    <article className='lg:w-[50%] w-full lg:h-[80vh] h-[50vh] px-3 flex flex-col items-center justify-start lg:mt-0 mt-7'>
        <h3 className='lg:text-[2rem] text-[1.3rem] font-bold text-[#409bb0] mb-3 lg:w-[90%] w-full mx-auto'>
            The right software done the right way.
        </h3>
        <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
            At Musala Soft we’ve been perfecting our skills in designing and building software for many years. Our dedication is to create the best possible solutions answering our clients’ unique needs. We make the optimal combination of technologies, processes, knowledge, tools and people and transform it into business value.
        </p>
        <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
            Cloud, Big Data, IoT, Mobile and Social are redefining the way enterprises do their business, engage with clients, innovate. We are thrilled to be part of that change! Collaborating with the major technology vendors, working head to head with their teams, being an early adopter and deploying on the field. We keep focus at the same time on the traditional technology that is running the business of our customers.
        </p>
    </article>

</section>
  )
}

export default Section1Dev