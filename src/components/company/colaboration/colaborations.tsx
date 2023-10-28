import React from 'react'
import Image from 'next/image'
import monitor from '@/app/img/company_info/monitor.jpg';

function Colaborations() {
    return (
        <section className=' lg:w-[92%] w-[90%] mx-auto min-h-[50vh] lg:flex hidden items-center justify-center mb-[20vh] rounded-sm relative'>
            <Image className='h-[50vh] w-full object-cover' src={monitor} alt='Person touching a monitor' />
            <div className='w-full h-[100%] absolute top-0 left-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 lg:p-0 p-5'>
                <p className='lg:w-[90%] w-full mx-auto text-xl text-gray-100 '>
                    Musala Soft clients are challenging, innovative and trendsetting enterprises devoted to stability and growth, daring to pioneer new ideas and build the future. We follow Agile processes and cover wide range of technologies. We are certified according to the international standards: ISO 9001:2015, ISO/IEC 27001:2013, ISO/IEC 27701:2019, ISO 14001:2015, ISO 26000, ISO 45001:2018. We collaborate with leading technology vendors and are Microsoft - Gold Partner; IBM - Silver Business Partner; Red Hat - Advanced Business Partner, Kentico – Bronze Partner.
                </p>


            </div>

        </section>
    )
}

export default Colaborations