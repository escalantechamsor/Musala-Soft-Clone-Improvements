import React from 'react'
import Image from 'next/image'
import meet_masters from '@/app/img/community/conferences/Meet-the_masters.jpg'
function Section1Conferences() {
    return (
        <section className='w-full min-h-[50vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3 lg:mb-0'>
            <Image className='h-[50vh] lg:w-[50%] w-full object-cover lg:hidden flex rounded-sm' src={meet_masters} alt='Meet the conferences brand' />
            <article className='lg:w-[50%] w-full lg:h-[80vh] min-h-[50vh] p-3 flex flex-col items-center justify-start'>

                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 first-letter:text-[1.8rem] first-letter:font-medium first-letter:text-[#409bb0] '>

                    Bring together IT professionals, young people interested in technology, inspiring speakers and partners. It started in 2012 as an internal conference of Musala Soft where our employees from the Sofia office shared their experience in technologies and projects. Since 2014 the conference expanded and opened for 4000+ external guests and 150+ speakers. It covers technology, process and soft skills topics.
                </p>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>

                    Through the years we had keynote speakers from Deutsche Telekom, Red Hat, IBM, ESG, T-Systems and together with Musala Soft Masters they held inspirational talks and workshops in IoT, QA, Blockchain, Connected Mobility, OSGi, Product Lifecycle Management and others. Meet the Masters Conferences have been held in Sofia, Ruse, Burgas in Bulgaria and also in Macedonia, Kosovo, Serbia, Bosnia and Herts. We are proud we help local IT communities develop and grow.
                </p>

            </article>
            <Image className='lg:h-[80vh] lg:w-[50%] w-full object-cover object-right-top lg:flex hidden' src={meet_masters} alt='Meet the conferences brand' />
        </section>
    )
}

export default Section1Conferences

