import React from 'react'
import Image from 'next/image';
import opportunities from '@/app/img/careers/opportunities.jpg';
import success from '@/app/img/careers/team success.jpg'
import Section1 from './section1';
import Section2 from './section2';

function HeroContent() {
    return (
        <section className='w-full min-h-[80vh]'>
            <Section1 />
            <Section2 />
        </section>
    )
}

export default HeroContent