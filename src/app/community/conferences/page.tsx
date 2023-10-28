import ConferencesHeroSection from '@/components/community/conferences/conferences_hero_section'
import ContentConferences from '@/components/community/conferences/content/content'
import React from 'react'

function Conferences() {
    return (
        <section className='w-full min-h-[250vh] bg-gray-100 '>
          <ConferencesHeroSection />
                <ContentConferences />
        </section>
    )
}

export default Conferences