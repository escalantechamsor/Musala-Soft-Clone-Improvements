import React from 'react'
import styles from '../services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import tech_modern from '@/app/img/services/tech_modern.jpg';
import { GiModernCity } from 'react-icons/gi';


function TecnologyModernizationCard() {
    const cardStyle = 'h-[50vh] rounded-xl shadow-xl bg-gray-100 relative overflow-hidden'
    const cardDetails = 'w-full h-[100%] flex flex-col items-center justify-center absolute top-0 left-0 text-gray-200 bg-gray-800 bg-opacity-40 cursor-pointer';
    const iconStyle = 'w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-gray-100 text-[2.5rem]';
    return (
        <div className={`${cardStyle} ${styles.cardContainer}`}>
        <Image className='w-full h-[100%] object-cover object-right' loading='lazy' src={tech_modern} alt='Woman codifing' />
        <div className={`${cardDetails}`}>
            <span className={`${iconStyle}`}>
                <GiModernCity />
            </span>
            <h3 className='lg:text-[1.5rem] text-[1.3rem] text-center mt-2 font-bold'>Technology Modernization</h3>
            <Link href={'/tecnology_modernization'}>
                <button className='py-3 px-7 rounded-sm bg-gray-100 text-gray-800 font-medium mt-3 hidden hover:bg-gray-800 hover:text-gray-100 transition-all hover:shadow-xl'>
                    See details...
                </button>
            </Link>
        </div>
    </div>
  )
}

export default TecnologyModernizationCard