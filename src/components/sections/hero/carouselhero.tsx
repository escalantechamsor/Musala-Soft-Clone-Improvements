import Link from 'next/link'
import React from 'react'
import styles from './hero.module.css';
import Image from 'next/image';
import homepage from '@/app/img/herocarousel/homepage.jpg';
import team_work from '@/app/img/herocarousel/team_group.jpg';
import business from '@/app/img/herocarousel/business.jpg';
import computer from '@/app/img/herocarousel/computer.jpg';
import { FaHashtag, FaSlideshare } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { FaPeopleGroup, FaComputer } from 'react-icons/fa6';

function CarouselHero() {
    return (
        <ul className={`w-[400%] h-[90vh] md:flex hidden ${styles.slider_list}`}>
            <li>
                <Image className='w-full h-[100%] object-cover' src={homepage} alt='Business man' priority />
                <div className={`${styles.list_item} absolute top-[40%] left-0 flex flex-col items-center justify-center md:w-[60%] pl-5  `}>
                    <div className='w-full flex items-center justify-center'>

                        <span className='w-16 h-16 bg-[#389cb3] rounded-full flex items-center justify-center lg:text-[2.3rem] text-[2rem] font-extrabold text-gray-200'>
                            <BsPersonWorkspace />
                        </span>
                        <div className='font-bold text-gray-100 xl:text-[2.7rem] lg:text-[2.3rem] text-[1.8rem] ml-2 '>
                            <h2>WE LIVE IT. OUR JOB.</h2>
                            <h2>OUR PASSION.</h2>
                        </div>
                    </div>
                </div>
                <h3 className={`lg:text-[1.2rem] w-[70%] font-semibold lg:text-gray-300 text-gray-200 absolute lg:bottom-[25%] bottom-[35%] left-[13%]`}>
                    Be on the top with us.
                </h3>

            </li>
            <li>
                <Image className='w-full h-[100%] object-cover' src={computer} alt='opended laptop' priority />
                <div className={`${styles.list_item} absolute top-[40%] left-0 flex flex-col items-center justify-center md:w-[60%] pl-5  `}>
                    <div className='w-full flex items-center justify-center'>

                        <span className='w-16 h-16 bg-[#389cb3] rounded-full flex items-center justify-center lg:text-[2.3rem] text-[2rem] font-extrabold text-gray-200'>
                            <FaComputer />
                        </span>
                        <div className='font-bold text-gray-100 xl:text-[2.7rem] lg:text-[2.3rem] text-[1.8rem] ml-2 '>
                            <h2>ENTERPRISE SOFTWARE</h2>
                            <h2>SERVICES.</h2>
                        </div>
                    </div>
                </div>
                <h3 className={`lg:text-[1.2rem] w-[70%] font-semibold lg:text-gray-300 text-gray-200 absolute lg:bottom-[25%] bottom-[35%] left-[12%]`}>
                    Turning technology into value with creativity and innovation.
                </h3>

            </li>
            <li>
                <Image className='w-full h-[100%] object-cover object-top' src={team_work} alt='Woman smiling' priority />
                <div className={`${styles.list_item} absolute top-[40%] left-0 flex flex-col items-center justify-center md:w-[60%] pl-5  `}>
                    <div className='w-full flex items-center justify-center '>

                        <span className='w-16 h-16 bg-[#389cb3] rounded-full flex items-center justify-center lg:text-[2.3rem] text-[2rem] font-extrabold text-gray-200'>
                            <FaPeopleGroup />
                        </span>
                        <div className='font-bold text-gray-100 xl:text-[2.7rem] lg:text-[2.3rem] text-[1.8rem] ml-2 '>
                            <h2>WE ARE A FAMILY</h2>
                            <h2>WE ARE A TEAM</h2>
                        </div>
                    </div>
                </div>
                <h3 className={`lg:text-[1.2rem] w-[70%] font-semibold lg:text-gray-300 text-gray-200 absolute lg:bottom-[25%] bottom-[35%] left-[15%]`}>
                    Have a long-term partner next to you on the path of success.
                </h3>

            </li>
            <li>
                <Image className='w-full h-[100%] object-cover' src={business} alt='Hands shaking' priority />
                <div className={`${styles.list_item} absolute top-[40%] left-0 flex flex-col items-center justify-center md:w-[60%] pl-5  `}>
                    <div className='w-full flex items-center justify-center '>

                        <span className='w-16 h-16 bg-[#389cb3] rounded-full flex items-center justify-center lg:text-[2.3rem] text-[2rem] font-extrabold text-gray-200'>
                            <FaSlideshare />
                        </span>
                        <div className='font-bold text-gray-100 xl:text-[2.7rem] lg:text-[2.3rem] text-[1.8rem] ml-2 '>
                            <h2>NEXT GENERATION</h2>
                            <h2>IT SOLUTIONS</h2>
                        </div>
                    </div>
                </div>
                <h3 className={`lg:text-[1.2rem] w-[70%] font-semibold lg:text-gray-300 text-gray-200 absolute lg:bottom-[25%] bottom-[35%] left-[15%]`}>
                    Knowledge is power, Knowledge is Development.
                </h3>
            </li>
        </ul>
    )
}

export default CarouselHero