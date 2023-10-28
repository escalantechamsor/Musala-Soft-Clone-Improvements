import React from 'react';
import Image from 'next/image';
import skills1 from '@/app/img/company_info/skills1.png';
import skills2 from '@/app/img/company_info/skills2.png';

function DevelopmentAreas() {
  return (
    <section className='w-full min-h-[80vh] mt-7 mb-3'>
    <h2 className='lg:text-[2.4rem] md:text-[2rem] text-[1.4rem] px-2  font-extrabold w-full text-[#409bb0] text-center uppercase mb-3 mt-4'>Our main development areas</h2>

    <section className='w-full min-h-[80vh] lg:flex-row flex-col flex items-center lg:px-7 px-5'>
        <Image className='h-[80vh] lg:w-[50%] w-full bg-cover lg:scale-90' src={skills1} alt='Company logos' />
        <Image className='h-[80vh] lg:w-[50%] w-full bg-cover lg:scale-95 py-3' src={skills2} alt='Company logos' />
    </section>

</section>
  )
}

export default DevelopmentAreas