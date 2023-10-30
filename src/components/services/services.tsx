import React from 'react'
import SoftwareDesignCard from './service_cards/software_design';
import TecnologyServicesCard from './service_cards/technology_services';
import SoftwareQualityCard from './service_cards/software_quality';
import DevOpsCard from './service_cards/dev_ops';
import BusinessAnalysisCard from './service_cards/business_analysis';
import UserInterfaceExperienceCard from './service_cards/user_interface';
import ITConsultingCard from './service_cards/it_consulting';
import TecnologyModernizationCard from './service_cards/tecnology_modernization';

function Services() {

    return (
        <section
            id='services'
            className='w-full min-h-[100vh] mt-5 mb-7'>
            <h2 className='lg:text-[2.5rem] text-[2rem] font-extrabold w-full text-[#409bb0] text-center uppercase lg:mb-3 mb-5'>Services</h2>
            <section className='w-full min-h-[90vh] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 gap-7 lg:px-14 px-7' >
                <SoftwareDesignCard />
                <TecnologyServicesCard />
                <TecnologyModernizationCard />
                <SoftwareQualityCard />
                <DevOpsCard />
                <BusinessAnalysisCard />
                <UserInterfaceExperienceCard />
                <ITConsultingCard />
            </section>
        </section>
    )
}

export default Services





