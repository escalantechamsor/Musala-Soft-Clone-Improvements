import React from 'react'
import styles from './hero.module.css'
import front_team from '@/app/img//herocarousel/responsivecarousel/front_team.jpg';
import meeting from '@/app/img/herocarousel/responsivecarousel/meeting.jpg';
import team_work from '@/app/img/herocarousel/responsivecarousel/team_work.jpg'
import community from '@/app/img/herocarousel/responsivecarousel/homepage.jpg'

import Image from 'next/image'
function ResponsiveCarouselHero() {
  return (
    <ul className={`${styles.responsive_slider_hero} w-[400%] h-[80vh]  flex md:hidden`}>
      <li className='w-full h-[80vh]'>
      <Image className='w-full h-[100%] object-cover ' src={community} alt='people ' priority />
      </li>
      <li className='w-full h-[80vh] '>
      <Image className='w-full h-[100%] object-cover' src={meeting} alt='people ' loading='lazy' />
      </li>
      <li className='w-full h-[80vh]'>
      <Image className='w-full h-[100%] object-cover' src={team_work} alt='people ' loading='lazy' />
      </li>
      <li className='w-full h-[80vh] '>
      <Image className='w-full h-[100%] object-cover' src={front_team} alt='people ' loading='lazy' />
      </li>
    </ul>
  )
}

export default ResponsiveCarouselHero