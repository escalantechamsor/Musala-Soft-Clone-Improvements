import React from 'react'
import styles from './banner.module.css';
import Image from 'next/image';
import values from '@/app/img/careers/values.png';

function Banner() {
    return (
        <section className='w-full overflow-hidden h-auto mb-12'>
            <ul className={`h-[60vh] w-[400%] flex ${styles.banner_slide}`}>
                <li className=' [60vh] w-full'>
                    <Image className='h-[90%] w-full object-contain' src={values} alt='Enterprise values' />
                </li>
                <li className=' [60vh] w-full'>
                    <div className='lg:w-[80%] h-[100%] w-[90%] flex items-center justify-center font-bold p-3 mx-auto lg:text-[1.5rem] text-gray-500 text-center'>
                        We believe in mutual RESPECT, inspired TEAMWORK and continuous development.
                        We engage PASSION and INNOVATION to deliver our clients QUALITY and value.
                        We build future generation IT products and solutions for IMPACTful organizations.
                    </div>
                </li>
                <li className=' [60vh] w-full'>
                    <Image className='h-[90%] w-full object-contain' src={values} alt='Enterprise values' />
                </li>
                <li className=' [60vh] w-full'>
                    <div className='lg:w-[80%] h-[100%] w-[90%] bg-gray-800 flex items-center justify-center font-bold p-3 mx-auto lg:text-[2rem] text-gray-200 text-center'>
                        Challenge boundaries, grow and build the future with us
                    </div>
                </li>

            </ul>
        </section>
    )
}

export default Banner