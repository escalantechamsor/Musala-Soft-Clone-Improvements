import React from 'react'
import books from '@/app/img/community/info_man/books.jpg'
import Image from 'next/image'
function HeroInfoMan() {
  return (
    <section className='w-full lg:h-[90vh] h-[60vh] relative'>
  <Image className='w-full h-[100%] object-cover object-bottom ' src={books} alt='books'/>
   <div className=' absolute lg:bottom-[10%] bottom-[5%] left-[8%] min-h-[30vh]  lg:rounded-xl flex items-center justify-center flex-col'>
   <h1 className='text-2xl font-extrabold text-gray-100'>
    INFOMAN
</h1>
<h2 className='text-[1.2rem] w-full text-center lg:text-[1.5rem] text-gray-200 my-2'>
online archive of informatics competitions
</h2>
<button className='py-3 px-6 bg-gray-100 hover:bg-gray-300 transition-all hover:shadow-2xl rounded-sm shadow-xl lg:text-xl font-medium text-gray-600 p-1 m-2 mt-3'>
Еxplore the world of Informatics
</button>
   </div>

    </section>
  )
}

export default HeroInfoMan