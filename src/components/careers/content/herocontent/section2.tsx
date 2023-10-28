import React from 'react'
import Image from 'next/image';
import success from '@/app/img/careers/team success.jpg'

function Section2() {
    return (
        <section className='w-full min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden lg:mb-20 mb-10'>
            <Image className='h-[70vh] lg:w-[50%] w-full object-cover rounded-sm' src={success} alt='People talking' />
            <article className='lg:w-[50%] w-full lg:min-h-[70vh] min-h-[40vh]  p-3 flex flex-col items-center justify-start '>
                <h3 className='lg:text-[1.8rem] text-[1.5rem] mt-4 font-bold text-[#409bb0] mb-3 lg:w-[90%] w-full mx-auto'>
                    We are looking for more great people to join our teams
                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                    in Augmented Intelligence, Big Data and Predictive Analytics, Internet of Things, Cloud, Mobile, Application Integration, Information Management, Automation Testing, Business Analysis, Software Design, UX, DevOps and IT Infrastructure.
                </p>
                <ul className=' text-[1.2rem]  lg:w-[90%] w-full mt-3 text-gray-700 font-medium'>
                    See some of our projects and feel Musala Soft spirit:
                    <li className='ml-4 text-gray-500 font-normal text-lg'>Qivicon @Musala Soft</li>
                    <li className='ml-4 text-gray-500 font-normal text-lg'>Customer Innovation Team</li>
                    <li className='ml-4 text-gray-500 font-normal text-lg'>Let`s party together</li>
                    <li className='ml-4 text-gray-500 font-normal text-lg'>Bring your friends and families too</li>
                </ul>
            </article>

        </section>
    )
}

export default Section2