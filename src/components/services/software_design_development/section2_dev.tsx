import Image from 'next/image'
import React from 'react'
import build_sft from '@/app/img/services/software_design/build_soft.svg';

function Section2Dev() {
    return (
        <section className='w-full min-h-[50vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3'>
            <Image className='  h-[50vh] lg:w-[50%] w-full object-contain md:scale-100 scale-90 rounded-sm lg:hidden flex' src={build_sft} alt='Development pieces' />
            <article className='lg:w-[50%] w-full min-h-[70vh] p-3 flex flex-col items-center justify-start pt-8'>
                <h3 className='lg:text-[2.2rem] text-[1.9rem] font-bold text-[#409bb0] mb-3 lg:w-[90%] w-full mx-auto'>
                    Before building the software, we build a competence team – your competence team:
                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                    The core of each project we execute is a competence team of people combining the right business knowledge, processes, technologies and spirit. We add the needed infrastructure and management attention and voila! the magic of the successful software project is revealed. Our focus is on building long-term partnerships with our clients, where we are aligned with their strategic goals, business challenges and operational plans.
                </p>
            </article>
            <Image className='h-[70vh] lg:w-[50%] w-full object-contain scale-90 rounded-sm lg:flex hidden' src={build_sft} alt='Development pieces' />

        </section>
    )
}

export default Section2Dev