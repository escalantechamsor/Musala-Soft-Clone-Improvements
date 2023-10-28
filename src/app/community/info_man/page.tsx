import ContentInfoMan from '@/components/community/info_man/content_info_man'
import HeroInfoMan from '@/components/community/info_man/hero_info_man'
import React from 'react'

function InfoMan() {
    return (
        <section className='w-full min-h-[200vh]  bg-gray-100'>
          <HeroInfoMan />
          <ContentInfoMan />
        </section>
    )
}

export default InfoMan