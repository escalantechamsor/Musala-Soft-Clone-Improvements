import Section1JoinUs from '@/components/join_us/join_us_content/section1_join_us'
import JoinUsHero from '@/components/join_us/join_us_hero'
import React from 'react'

function JoinUS() {
  return (
    <section className='w-full min-h-[200vh] pb-[20vh] bg-gray-100'>
      <JoinUsHero />
      <Section1JoinUs />
    </section>
  )
}

export default JoinUS