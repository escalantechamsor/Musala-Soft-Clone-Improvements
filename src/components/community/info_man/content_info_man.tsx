import React from 'react'
import Image from 'next/image'
import coding from '@/app/img/community/code_it/coding.jpg'
import infoman from '@/app/img/community/info_man/infoman_boy_with_laptop.png'
function ContentInfoMan() {
    return (
        <section className='w-full min-h-[80vh] lg:flex-row flex-col flex items-center lg:px-7 px-5 rounded-xl overflow-hidden mb-3 lg:mt-10'>
            <Image className='lg:h-[70vh] h-[50vh] lg:w-[50%] w-full object-contain rounded-sm lg:hidden flex' src={infoman} alt='Draw with a person in front of a desk' />
            <article className='lg:w-[50%] w-full min-h-[70vh] p-3 flex flex-col items-center justify-start'>
                <h3 className='lg:text-[2rem] text-[1.3rem] font-bold text-[#409bb0] mb-3 lg:w-[90%] w-full mx-auto'>
                    Infoman is a valuable training source.
                </h3>
                <p className='lg:w-[90%] w-full mx-auto text-lg text-gray-600 '>
                    for teachers and students.Created in 1998 as a mailing list among Bulgarian informatics competitions fans, adopted in 2000 by Musala Soft and transformed into a portal, Infoman is now an important part of our initiatives supporting and developing young talents in the field of programming. InfoMan contains a rich archive of IT tasks, and their solutions, given on national Bulgarian and International Olympiads and contests since 2000.
                </p>
            </article>
            <Image className='lg:h-[70vh] h-[50vh] lg:w-[50%] w-full object-contain rounded-sm hidden lg:flex' src={infoman} alt='Draw with a person in front of a desk' />

        </section>
    )
}

export default ContentInfoMan