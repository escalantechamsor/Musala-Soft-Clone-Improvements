import React from 'react'

import SofiaCard from './cards_info/sofia_card';
import BurgasCard from './cards_info/burgas_card';
import RuseCard from './cards_info/ruse_card';
import SkopjeCard from './cards_info/skopje_card';


function Footer() {
  return (
    <section className='w-full min-h-[70vh] bg-gray-800 flex items-center justify-center '>

      <section className='w-full lg:min-h-[70vh]  min-h-[60vh] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-7 p-10 items-center'>

        <SofiaCard />

        <BurgasCard />

        <RuseCard />

        <SkopjeCard />

      </section>

    </section>
  )
}

export default Footer