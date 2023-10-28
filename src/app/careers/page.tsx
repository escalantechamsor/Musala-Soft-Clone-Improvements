import CareersContent from '@/components/careers/content/careers_content'
import HeroCareers from '@/components/careers/hero'
import React from 'react'

function Careers() {
  return (
    <section className='w-full min-h-[200vh] bg-gray-100'>
      <HeroCareers />
      <CareersContent />
    </section>
  )
}

export default Careers