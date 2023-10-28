import React from 'react'
import Image from 'next/image';
import sharing from '@/app/img/community/csr_impact/working_together.jpg'
import styles from './csr.module.css';

function Presentation() {
    return (
        <section className='w-full h-[90vh] relative'>
            <Image className='w-full h-[100%] object-cover object-center' src={sharing} alt='People group smiling'/>
            <div className={`${styles.poligon} lg:w-[45%] w-full lg:h-[30vh] h-[25vh] bg-gray-800 absolute bottom-0 left-0 flex items-center justify-center lg:bg-opacity-50 bg-opacity-60 lg:pr-5`}>
            <h1 className='lg:text-[3.2em] text-[2rem] font-extrabold text-gray-300'>
            CSR IMPACT
            </h1>
            </div>
        </section>
    )
}

export default Presentation