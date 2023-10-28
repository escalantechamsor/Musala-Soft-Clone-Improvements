import React from 'react'
import Section1Dev from './section1_dev';
import Section2Dev from './section2_dev';

function SoftDesDevContent() {
    return (
        <section className='w-full min-h-[120vh] pb-10 bg-gray-200'>
            <h2 className='lg:text-[2.4rem] md:text-[2rem] text-[1.4rem] px-2  font-extrabold w-full text-[#409bb0] text-center uppercase mb-5 '>Building software solutions is our passion</h2>

            <Section1Dev />
            <Section2Dev />








        </section>
    )
}

export default SoftDesDevContent