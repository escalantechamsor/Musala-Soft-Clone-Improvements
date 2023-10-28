import React from 'react'
import Image from 'next/image'
import people_working from '@/app/img/company_info/people_working.jpg';
import people_meeting from '@/app/img/company_info/people_meeting.jpg';

function Presentation() {
  return (
    <section className='w-full min-h-[80vh] bg-gray-100 '>
    <h2 className='lg:text-[2.5rem] text-[2rem] font-extrabold w-full text-[#409bb0] text-center uppercase lg:mb-3 mb-4 mt-4'>WE ARE MUSALA SOFT</h2>
    <section className='w-full lg:min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3 lg:mb-0'>
       
        <article className='lg:w-[50%] w-full lg:min-h-[70vh] min-h-[40vh]  p-3 flex flex-col items-center justify-start'>
            <h3 className='lg:text-[2.2rem] text-[1.6rem] sm:text-[1.5rem] font-bold text-[#409bb0] mb-2 lg:w-[90%] w-full'>
                In 2000 we founded Musala Soft:
            </h3>
            <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>

                Inspired by our desire to bring together technology and innovation to help big ideas come true. Nowadays, we keep doing it. We are an established and growing software services company with a strong track record of success in building innovative enterprise software solutions for multinationals and government institutions around the globe. Musala Soft became part of the new custom software development tech house Qinshift.
                <a className='ml-1 text-[#378798]' href="http://https://qinshift.com/">(https://qinshift.com/)</a>
                , after a deal with KKCG Group in 2022.
            </p>
        </article>
        <Image className='h-[70vh] lg:w-[50%] w-full object-cover lg:flex hidden' src={people_working} alt='People in front of desks' />
    </section>
    <section className='w-full lg:min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3'>
        <Image className='h-[70vh] lg:w-[50%] w-full object-cover rounded-sm' src={people_meeting} alt='People talking' />
        <article className='lg:w-[50%] w-full lg:min-h-[70vh] min-h-[50vh] p-3 flex flex-col items-center justify-start pt-8'>
            <h3 className='lg:text-[2.2rem] text-[1.9rem] font-bold text-[#409bb0] mb-3'>
                Extending or services:
            </h3>
            <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                Musala Soft professional team provides expertise and creativity in all elements of the software life cycle - IT consulting, analysis, design, development, testing, implementation, integration and maintenance. Our traditional offices follow the latest design trends to ensure safe, cozy and inspiring environment for those who are there every day and those who just pass by for a few hours work or social activities. Our colleagues represent 10+ nations and you can meet them in our traditional or hybrid offices, beaches, mountains, towns and villages in Bulgaria, Northern Macedonia, Egypt, Kosovo and Albania.
            </p>
        </article>

    </section>
</section>
  )
}

export default Presentation