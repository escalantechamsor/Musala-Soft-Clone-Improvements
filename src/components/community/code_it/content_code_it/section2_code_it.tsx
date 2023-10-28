import React from 'react'
import Image from 'next/image'
import CodeIt_2021 from '@/app/img/community/code_it/CodeIt_2021.jpg'
import pet_brand from '@/app/img/community/code_it/codeit_pet_brand.jpg'
function Section2CodeIit() {
    return (
        <section className='w-full min-h-[80vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3 lg:mb-0'>
            <Image className='lg:h-[80vh] h-[60vh] lg:w-[50%] w-full object-cover object-right lg:hidden flex rounded-sm' src={CodeIt_2021} alt='Draw of a fantastic character' />
            <article className='lg:w-[50%] w-full min-h-[80vh] p-3 flex flex-col items-center justify-start'>
                <h3 className='lg:text-[2.2rem] text-[1.5rem] sm:text-[1.7rem] font-bold text-[#409bb0] mb-3 mt-5'>
                CodeIT
                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>

                is divided into two competition phases: an online qualification phase and an onsite final. The qualification phase consists of six rounds - three 1 day long Sprints and three 1 month long Marathons which swap for six months. There are two parallel rankings - General and Junior. The General ranking includes participants from all ages while the Junior ranking includes only those who are under the age of 14. All participants receive many presents from Musala Soft and our partners. However, the biggest award is the competition itself and the special guest lecturer for the final round - internationally recognized guru in competitive informatics the finalists have the unique opportunity to learn new things and share personal knowledge with the best ranking in the world.
                </p>
            </article>
            <Image className='h-[70vh] lg:w-[50%] w-full object-cover lg:flex hidden' src={pet_brand} alt='Draw of a fantastic character' />
        </section>
    )
}

export default Section2CodeIit