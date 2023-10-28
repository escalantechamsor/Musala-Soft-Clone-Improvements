import React from 'react'
import Image from 'next/image';
import hands from '@/app/img/legal/hands.jpg';
import business_man from '@/app/img/legal/business_man.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function LegalContent() {
    return (

        <section className='w-ful min-h-[100vh] bg-gray-100'>
            <h2 className='lg:text-[2.2rem] md:text-[2rem] text-[1.5rem] px-2  font-extrabold w-full text-[#409bb0] text-center uppercase mb-3 mt-4'>GOOD CORPORATE GOVERNANCE</h2>
            <section className='w-full min-h-80vh flex items-center justify-center lg:flex-row flex-col'>
                <Image className='w-[350px] lg:h-[80vh] ' src={business_man} alt='Business man possing' />
                <article className='lg:w-[50%]  w-full flex items-center justify-center bg-gray-100 lg:min-h-[80vh] min-h-[50vh] lg:p-5 flex-col'>
                    <p className='lg:text-[1.2rem] text-[1.1rem] w-[90%] mx-auto text-gray-600'>
                        Musala Soft is committed to complying with the applicable foreign and domestic laws, satisfying the Company’s Code of Conduct, and particularly to ensuring that business is conducted with integrity by encouraging disclosures of wrongdoings (whistleblowing).
                    </p>
                    <p className='lg:text-[1.2rem] text-[1.1rem] w-[90%]  mx-auto text-gray-600'>
                        As part of good corporate governance, Musala Soft has established a Whistleblowing policy that sets out avenues for legitimate concerns to be objectively investigated and addressed. Individuals are encouraged to raise concerns about any illegal, unethical or questionable practices in confidence and without the risk of reprisal.
                    </p>
                    <div className='w-full flex items-center justify-end mt-5 lg:pr-0 pr-5'>
                        <button className='text-[#409bb0] p-2 text-[1.3rem] flex items-center'>
                            Whistleblowing Policy
                            <span className='w-10 h-10 flex items-center justify-center text-2xl'>
                                <BsFillArrowRightCircleFill />
                            </span>
                        </button>
                    </div>
                </article>
            </section>

            <div className='lg:w-[80%] mx-auto min-h-[30vh] bg-gray-800 rounded-sm shadow-xl relative overflow-hidden mb-16 mt-7'>
                <Image className='w-full h-[30vh] object-cover object-center shadow-xl' src={hands} alt='Hands touching' />
                <div className='w-full h-[100%] absolute top-0 left-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-gray-200 lg:text-[2rem] text-[1.5rem] font-extrabold px-10 text-center'>
                    Fostering establishment of a culture of transparency, accountability, and integrity
                </div>
            </div>
        </section>
    )
}

export default LegalContent