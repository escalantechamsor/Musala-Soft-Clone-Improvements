import React from 'react'
import Section1_CSR from './section1_csr';
import Section2_CSR from './section2_csr';
import Section3_CSR from './section3_csr';
import Section4_CSR from './section4_csr';
import Section5_CSR from './section5_csr';
function ContentCSR() {
    return (
        <section className='w-full min-h-[550vh] mt-5 bg-gray-100'>
            <h2 className='lg:text-[2.2rem] text-[2rem] font-extrabold lg:w-[90%] w-full mx-auto text-[#409bb0] text-center uppercase mb-5 mt-2 '>Musala Soft is committed to be a socially responsible company.</h2>
            <Section1_CSR />

            <Section2_CSR />

            <Section3_CSR />

            <Section4_CSR />

            <Section5_CSR />
        </section>
    )
}

export default ContentCSR

/* 
 <h3 className='lg:text-[2.2rem] text-[1.9rem] sm:text-[1.7rem] font-bold text-[#409bb0] mb-3 lg:w-[90%] w-full mx-auto'>
                    Musala Soft is committed to be a socially responsible company.
                    </h3>
*/