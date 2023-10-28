import React from 'react'
import masters from '@/app/img/community/conferences/conference.jpg'
import Image from 'next/image';
import styles from './conferences.module.css'
function ConferencesHeroSection() {
  return (
    <section className='w-full h-[90vh] relative'>
      <Image className='w-full h-[100%] object-cover' src={masters} alt='Promotional event Meet the masters' />
    
    </section>
  )
}

export default ConferencesHeroSection