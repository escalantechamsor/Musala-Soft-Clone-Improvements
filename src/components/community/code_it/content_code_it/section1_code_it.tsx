import React from 'react'
import Image from 'next/image'
import coding from '@/app/img/community/code_it/coding.jpg'

function Section1CodeIit() {
    return (
        <section className='w-full min-h-[80vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3'>
            <Image className='lg:h-[80vh] h-[50vh] lg:w-[50%] w-full object-cover object-center rounded-sm' src={coding} alt='People talking' />
            <article className='lg:w-[50%] w-full lg:min-h-[80vh] min-h-[50vh] px-3 flex flex-col items-center justify-start '>
                <h3 className='lg:text-[2rem] text-[1.3rem] font-bold text-[#409bb0] mb-3 lg:w-[90%] w-full mx-auto lg:mt-0 mt-4'>
                    CodeIT is the oldest active private programing competition in the world.
                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                    It is organized by Musala Soft under the patronage of the President of Republic of Bulgaria in partnership with companies, non-governmental organizations, IT associations and leading educational institutions. It is fueled by Musala Soft`s passion for high achievement, knowledge sharing and innovation.
                </p>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                    CodeIT brings together IT talents by challenging their coding and algorithm skills and develop the future engine of the IT industry. The competition has a long history with 60+ partners and 1600+ participants from 20+ countries, many of which are now established top software professionals, researchers and IT entrepreneurs around the world.
                </p>
            </article>

        </section>
    )
}

export default Section1CodeIit