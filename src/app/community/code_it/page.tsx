import ContentCodeIt from '@/components/community/code_it/content_code_it/content_code_it'
import HeroCodeIt from '@/components/community/code_it/hero/hero_code_it'
import React from 'react'

function CodeIT() {
    return (
        <section className='w-full min-h-[200vh]  bg-gray-100'>
            <HeroCodeIt />
            <ContentCodeIt />
        </section>
    )
}

export default CodeIT