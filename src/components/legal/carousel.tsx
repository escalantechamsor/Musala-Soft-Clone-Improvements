import React from 'react'
import styles from './legal.module.css';
import Image from 'next/image';
import people_talking from '@/app/img/legal/people talking.jpg';
import professional_lawers from '@/app/img/legal/professional_lawers.jpg';
import lawers from '@/app/img/legal/lawers.jpg';
import serious_people from '@/app/img/legal/serious people.jpg';

function CarouselLegalSection() {
    return (
        <ul className={`w-[400%]  h-[90vh] flex ${styles.legal_carousel_hero}`}>
            <li className='h-[100%]  w-full'>
                <Image className='w-full h-[100%] object-cover object-top' src={people_talking} alt='People in a metting' />
            </li>
            <li className='h-[100%] w-full'>
                <Image className='w-full h-[100%] object-cover object-top' src={professional_lawers} alt=' People looking a computer' />
            </li>
            <li className='h-[100%]  w-full'>
                <Image className='w-full h-[100%] object-cover object-top' src={lawers} alt='People hands shaking' />
            </li>
            <li className='h-[100%] w-full'>
                <Image className='w-full h-[100%] object-cover object-top' src={serious_people} alt='Persons looking serious' />
            </li>
        </ul>
    )
}

export default CarouselLegalSection