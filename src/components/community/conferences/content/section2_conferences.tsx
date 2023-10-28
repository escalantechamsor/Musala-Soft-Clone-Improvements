import React from 'react'
import Image from 'next/image'
import microphone from '@/app/img/community/conferences/microphone.jpg'
function Section2Conferences() {
    return (
        <section className='w-full min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3'>
            <Image className='h-[70vh] lg:w-[50%] w-full object-cover rounded-sm' src={microphone} alt='Microphone' loading='lazy' />
            <article className='lg:w-[50%] w-full min-h-[80vh] p-3 flex flex-col items-center justify-start pt-4'>
                <h3 className='lg:text-[2.2rem] text-[1.9rem] font-bold text-[#409bb0] mb-2 lg:w-[90%] w-full pt-2'>
                    Meet the Masters Seminars:
                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                    is a series of master talks tailored to the interests of experienced professionals in the field of software solutions development and testing.

                    There seminars provide knowledge on a specific technology, methodology or soft skills topic for a wide audience - from IT gurus to non-ITs. We organize panel discussions and group meetings with our speakers in order to maximize the effectiveness of the communication and facilitate networking.

                    Follow us on Musala Soft social media channels and join us at our next Meet the Masters event!
                </p>

            </article>

        </section>
    )
}

export default Section2Conferences