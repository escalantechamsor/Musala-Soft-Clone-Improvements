import React from 'react'
import styles from '../services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import user_experience from '@/app/img/services/user_experience.jpg';
import { VscRemoteExplorer } from 'react-icons/vsc';


function UserInterfaceExperienceCard() {
    const cardStyle = 'h-[50vh] rounded-xl shadow-xl bg-gray-100 relative overflow-hidden'
    const cardDetails = 'w-full h-[100%] flex flex-col items-center justify-center absolute top-0 left-0 text-gray-200 bg-gray-800 bg-opacity-40 cursor-pointer';
    const iconStyle = 'w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-gray-100 text-[2.5rem]';
    return (
        <div className={`${cardStyle} ${styles.cardContainer}`}>
            <Image className='w-full h-[100%] object-cover object-right' loading='lazy' src={user_experience} alt='People in a table with devices' />
            <div className={`${cardDetails} pt-7`}>
                <span className={`${iconStyle}`}>
                    <VscRemoteExplorer />
                </span>
                <h3 className='lg:text-[1.5rem] text-[1.3rem] text-center font-bold'>User Interface & Experience</h3>
                <Link href={'/user_interface_experience'}>
                    <button className='py-3 px-7 rounded-sm bg-gray-100 text-gray-800 font-medium mt-3 hidden hover:bg-gray-800 hover:text-gray-100 transition-all hover:shadow-xl'>
                        See details...
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default UserInterfaceExperienceCard