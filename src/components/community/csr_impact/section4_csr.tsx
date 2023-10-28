import React from 'react'
import Image from 'next/image'
import community_red from '@/app/img/community/csr_impact/community_green.svg'

function Section4_CSR() {
    return (
        <section className='w-full min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3 lg:mb-0'>
            <Image className='h-[60vh] lg:w-[50%] w-full object-contain lg:hidden flex rounded-sm' src={community_red} alt='People in front of desks' loading='lazy' />
            <article className='lg:w-[50%] w-full lg:min-h-[60vh] min-h-[45vh] p-3 flex flex-col items-center justify-start'>
                <h3 className='lg:text-[2.2rem] text-[1.9rem] font-bold text-[#409bb0] mb-3'>
                    Sustainable Environment:
                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 first-letter:text-[1.8rem] first-letter:font-medium first-letter:text-[#409bb0]'>
                    Musala Soft is environmentally conscious and socially responsible. Our business is based on sustainability - ensuring that our activities preserve the environment for future generations. We recognize the importance of environmental protection at all times, comply with environmental laws and regulations, and invest in improving our everyday activities with consideration to the environment. Even when we donate computers to schools, organize charity bazars, sponsor and participate in sport tournaments etc., we keep in mind the way we do it and the message we send – think about our nature, be healthy and caring.
                </p>

            </article>
            <Image className='h-[60vh] lg:w-[50%] w-full object-contain lg:flex hidden' src={community_red} alt='People in front of desks' loading='lazy' />
        </section>
    )
}

export default Section4_CSR