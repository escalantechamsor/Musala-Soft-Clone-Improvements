import React from 'react'
import company from '@/app/img/company_info/company.jpg';
import people_working from '@/app/img/company_info/people_working.jpg'
import Image from 'next/image'
import Link from 'next/link';
function CompanyInfo() {
    return (
        <section className='w-full min-h-[100vh] mt-5 lg:px-[50px] px-3 bg-gray-50'>
            <h2 className='lg:text-[2.5rem] text-[2rem] font-extrabold w-full text-[#409bb0] text-center uppercase lg:mb-3 mb-5'>About us</h2>
           
           
        
            <section className='w-full min-h-[70vh] bg-gray-100 lg:rounded-xl flex lg:flex-row flex-col overflow-hidden'>

                <Image className='lg:w-[50%] h-[50vh] w-full flex lg:hidden' src={company} alt='Company Musala Soft' />

                <article className='lg:w-[50%] lg:h-[80vh] min-h-[60vh] w-full relative'>
                    <Image className='lg:h-[80vh] h-[60vh] w-full blur-sm lg:flex hidden' src={people_working} alt='People in front of Desks' />

                    <div className='w-full lg:h-[80vh] min-h-[40vh] lg:absolute lg:top-0 lg:left-0 flex flex-col xl:p-7 p-5 items-center bg-gray-100 bg-opacity-50 lg:justify-center justify-start '>
                        <h3 className='lg:text-[2.3rem] text-[1.8rem] mb-3 font-extrabold text-center text-gray-700 hover:text-[#3fa3ba] transition-all cursor-pointer'>
                            WE ARE MUSALA SOFT
                        </h3>
                        <p className='lg:text-xl text-lg lg:w-[90%] w-full mx-auto text-gray-700'>
                            We build future generation IT products and solutions for impactful organizations.
                            We engage passion, creativity and innovation to deliver our clients quality and value.
                            We believe in inspired teamwork, mutual respect and continuous development.
                        </p>
                        <div className='flex items-center justify-end lg:mt-3 w-full h-[10vh] md:px-12'>
                            <Link href={'/company'}>
                                <button className='py-3 mt-4 px-7 bg-[#3fa3ba] text-gray-100 rounded-sm text-lg shadow-xl hover:bg-gray-800 hover:text-[#62c2d8] transition-all font-medium'>
                                    Check details
                                </button>
                            </Link>
                        </div>
                    </div>


                </article>
                <Image className='lg:w-[50%] min-h-[80vh] w-full lg:flex hidden' src={company} alt='Company Musala Soft' />

            </section>

        </section>
    )
}

export default CompanyInfo