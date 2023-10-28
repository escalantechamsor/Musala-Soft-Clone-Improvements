import React from 'react'
import group from '@/app/img/careers/people group.jpg'
import Image from 'next/image';
import Link from 'next/link';
function HeroCareers() {
    return (
        <section className='w-full min-h-[90vh] relative flex items-center justify-center'>
            <Image className='w-full h-[90vh] object-cover object-center' src={group} alt='People group' />
            <Link className='absolute bottom-5  bg-gray-100 bg-opacity-90 py-3 px-5 shadow-gray-200xl rounded-sm  text-[#409bb0] text-[1.2rem] hover:bg-gray-800 transition-all outline-none font-medium' href={'/join_us'}>
                <button >
                    Check our open positions
                </button>
            </Link>

        </section>
    )
}

export default HeroCareers