
import React from 'react'
import dynamic from 'next/dynamic'

function MapLocation() {
    const MapWithNoSSR = dynamic(() => import('@/components/locations/Map'), {
        ssr: false
    })
    return (
        <section className='w-full min-h-[80vh] bg-gray-100 bg-opacity-30 pb-5 pt-2 lg:mb-5 lg:px-[50px] '>
            <h2 className='lg:text-[2.5rem] text-[1.8rem] font-extrabold w-full text-[#409bb0] text-center uppercase lg:mb-3 mb-5'> Where can you find us?</h2>
            <div className='w-full lg:h-[80vh] h-[60vh] rounded-sm relative z-30'>
                <MapWithNoSSR />
            </div>

        </section>
    )
}

export default MapLocation