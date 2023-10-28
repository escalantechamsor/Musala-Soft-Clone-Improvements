import React from 'react'
import Image from 'next/image'
import sharing from '@/app/img/community/csr_impact/desk.jpg';

function Section1_CSR() {
  return (
    <section className='w-full min-h-[70vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3 lg:mb-0'>
    <Image className='h-[60vh] lg:w-[50%] w-full object-cover lg:hidden flex rounded-sm' src={sharing} alt='People in front of desks' loading='lazy' />
    <article className='lg:w-[50%] w-full lg:min-h-[80vh] min-h-[50vh] p-3 flex flex-col items-center justify-start'>
        <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 first-letter:text-[1.8rem] first-letter:font-medium first-letter:text-[#409bb0] lg:mt-0 mt-4'>
            We support our employees to be citizens of the World and together inspire and implement positive ideas for the sustainable growth of the society. The impact of such a behavior is not only “here” and “now” but also “in the future”. Musala Soft invests time, financial and human capital to increase the quality of education, enhance the IT community`s capacity and develop a sustainable environment.
        </p>
        <p className='lg:w-[88%] w-full mx-auto text-lg text-gray-600 ]'>
            We not only have a large portfolio of CSR activities on our own, but we stimulate and support our employees’ and partners` driven endeavors. We are enthusiastic participant in national, European and global projects that fit our vision for the people, society and environment. The list of Musala Soft`s partner organizations includes 70+ national and international NGOs, governmental organizations, student councils, cluster organizations, associations etc.
        </p>
    </article>
    <Image className='h-[80vh] lg:w-[50%] w-full object-cover lg:flex hidden' src={sharing} alt='People in front of desks' loading='lazy' />
</section>
  )
}

export default Section1_CSR