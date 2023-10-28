import React from 'react'
import Section1CodeIit from './section1_code_it'
import Section2CodeIit from './section2_code_it'

function ContentCodeIt() {
    return (
        <section className='w-full min-h-[150vh] '>
            <h2 className='lg:text-[2.2rem] text-[1.3rem] font-extrabold w-full text-[#409bb0] text-center uppercase lg:mb-7 mb-4 lg:mt-2 mt-3'>CODEIT: Private programming contest since 2000 </h2>
            <Section1CodeIit />
            <Section2CodeIit />
        </section>
    )
}

export default ContentCodeIt
