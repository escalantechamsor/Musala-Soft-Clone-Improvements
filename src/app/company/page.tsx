import React from 'react'
import Image from 'next/image'
import company from '@/app/img/company_info/company.jpg'
import Presentation from '@/components/company/presentation/presentation';
import DevelopmentAreas from '@/components/company/developmentareas/developmentareas';
import LeaderShip from '@/components/company/leadership/leadership';
import Colaborations from '@/components/company/colaboration/colaborations';
function Company() {
    return (
        <section className='w-full min-h-[400vh]'>
            <section className='w-full lg:min-h-[80vh]'>
                <Image className='lg:h-[80vh] w-full object-cover lg:object-right-bottom rounded-sm' src={company} alt='Company Musala Soft' />
            </section>
            <Presentation />
            <DevelopmentAreas />
            <LeaderShip />
            <Colaborations />
        </section>
    )
}

export default Company;
