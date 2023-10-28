import React from 'react'
import InfoCareers from './infocareers';
import HeroContent from './herocontent/herocontent';
import Banner from './banner/banner';
import CareerDevelopment from './development/development';
function CareersContent() {
    return (
        <section className='w-full min-h-[300vh] bg-gray-100'>

            <InfoCareers />
            <Banner />
            <HeroContent />
            <CareerDevelopment />
        </section>
    )
}

export default CareersContent

