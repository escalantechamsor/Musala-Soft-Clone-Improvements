import React from 'react'
import Image from 'next/image';
import Presentation from '@/components/community/csr_impact/presentation';
import ContentCSR from '@/components/community/csr_impact/content';
function CSRImpact() {
    return (
        <section className='w-full min-h-[200vh] bg-gray-100'>
          <Presentation />
           <ContentCSR />
           
           
           
           
        </section>
    )
}

export default CSRImpact