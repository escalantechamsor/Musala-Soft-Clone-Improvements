import React from 'react'
import Image from 'next/image';
import opportunities from '@/app/img/careers/opportunities.jpg';


function Section1() {
    return (
        <section className='w-full min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3 lg:mb-0'>
            <Image className='h-[70vh] lg:w-[50%] w-full object-cover lg:hidden flex rounded-sm' src={opportunities} alt='People in front of desks' />
            <article className='lg:w-[50%] w-full lg:min-h-[70vh] min-h-[45vh] p-3 flex flex-col items-center justify-start'>
                <h3 className='lg:text-[2.2rem] text-[1.9rem] sm:text-[1.7rem] font-bold text-[#409bb0] mb-3'>

                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                    Join us to transform together mainstream and cutting-edge technologies into business value for global leaders.
                    Musala Soft is a software services company specialized in complex geographically distributed enterprise projects. We believe in excellence and growth inspired by partnership, personal success and team spirit. Musala Soft clients are challenging, innovative and trendsetting enterprises. They recognize us as a trusted partner, committed to professionalism, quality and value. Multinationals and government institutions around the globe combine their strategy for success with our expertise and creativity to build a better future.
                </p>
            </article>
            <Image className='h-[70vh] lg:w-[50%] w-full object-cover lg:flex hidden' src={opportunities} alt='People in front of desks' />
        </section>
    )
}

export default Section1