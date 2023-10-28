import React from 'react'
import Image from 'next/image'
import people_working from '@/app/img/community/csr_impact/sharing.jpg';

function Section2_CSR() {
  return (
    <section className='w-full min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3'>
                <Image className='lg:h-[80vh] h-[70vh] lg:w-[50%] w-full object-cover rounded-sm' src={people_working} alt='People talking' loading='lazy' />
                <article className='lg:w-[50%] w-full lg:min-h-[80vh] min-h-[50vh] p-3 flex flex-col items-center justify-start'>
                    <h3 className='lg:text-[2.2rem] text-[1.9rem] font-bold text-[#409bb0] mb-3'>
                        IT Community:
                    </h3>
                    <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                        Musala Soft is recognized as a leading investor in the field of knowledge, education and human capital by both national and international institutions and organizations. We constantly contribute to better-quality education and diverse growing IT community through variety of own initiatives as well as long-term partnerships with leading educational organizations, scientific institutions and startup hubs.
                    </p>
                    <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                        We help young talents in the beginning of their career path, IT specialists looking for personal and professional development as well as people who would like to requalify into IT. We are proud the results of our efforts have positive impact on both the academic and economic development in the region as well as on the global advancement in innovation and technology.
                    </p>
                </article>

            </section>
  )
}

export default Section2_CSR