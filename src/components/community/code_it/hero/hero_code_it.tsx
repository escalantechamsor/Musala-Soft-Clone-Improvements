import React from 'react'
import Image from 'next/image';
import codeit2023 from '@/app/img/community/code_it/Codeit_2023.jpg'
function HeroCodeIt() {
    return (
        <section className='w-full h-[90vh] relative'>
            <Image className='w-full h-[100%] object-cover' src={codeit2023} alt='Group of people' />
            <a href="https://codeit.bg" target="_blank" rel="noopener noreferrer">
                <button className='absolute bottom-5 right-5  bg-gray-100 bg-opacity-90 py-2 px-5 shadow-gray-200xl rounded-sm  text-[#409bb0] text-[1.2rem] hover:bg-gray-800 transition-all outline-none font-medium'>
                    Compete
                </button>
            </a>

        </section>
    )
}

export default HeroCodeIt