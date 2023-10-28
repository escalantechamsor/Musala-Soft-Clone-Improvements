import React from 'react'
import Section1Conferences from './section1_conferences'
import Section2Conferences from './section2_conferences'

function ContentConferences() {
    return (
        <section className='w-full min-h-[200vh]'>
            <h2 className='lg:text-[2.4rem] text-[2rem] font-extrabold w-full text-[#409bb0] text-center uppercase mb-3 mt-2'>Meet the Masters Conferences</h2>

            <Section1Conferences />
            <Section2Conferences />
        </section>
    )
}

export default ContentConferences
