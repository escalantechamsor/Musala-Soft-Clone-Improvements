import React from 'react'
import Image from 'next/image'
import elena_marinova from '@/app/img/company_info/elena_marinova.jpg'
import ceodelyan from '@/app/img/company_info/Delyan_Lilov_CEO.jpg';
import ceoostanislav from '@/app/img/company_info/Stanislav_Ovcharov_COO.jpg'
import styles from './leadership.module.css'
function LeaderShip() {
    const card_container = `${styles.card_container} h-[70vh] rounded-sm shadow-xl bg-gray-200 overflow-hidden relative`
    const leadershipinfo = `absolute bottom-0 left-0 w-full h-[15vh] bg-gray-800 text-gray-300 bg-opacity-60 flex items-center lg:justify-evenly justify-end flex-col ${styles.leadership_details}`
    return (
        <section className='w-full min-h-[80vh]  mb-5'>
            <h2 className='lg:text-[2.4rem] text-[2rem] font-extrabold w-full text-[#409bb0] text-center uppercase mb-3 mt-2'>Leadership</h2>

            <section className='lg:w-full sm:w-[90%] w-[95%] mx-auto min-h-[80vh] grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-7 lg:px-[50px] py-3 px-[25px]'>

                <div className={`${card_container}`}>
                    <Image className='h-[70vh] w-full bg-cover' src={ceodelyan} alt='Delyan_Lilov_CEO' />
                    <div className={`${leadershipinfo}`}>
                        <div className='flex flex-col w-full items-center justify-center'>
                            <h5 className='text-[1.6rem] font-bold '>Delyan Livov</h5>
                            <p className='text-[1.3rem] font-medium '>CEO</p>
                        </div>
                        <div className={`hidden p-3 w-full flex-col ${styles.details}`}>
                            <p className='text-[1rem] font-medium p-1 px-3 mb-5 text-gray-300 lg:flex hidden'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque nostrum laudantium similique minima repellendus quod ducimus tenetur nesciunt eligendi omnis.
                            </p>
                            <button className='bg-gray-100 text-gray-800 py-3 text-[1.25rem] font-medium px-5 rounded-sm shadow-lg mt-3 '>
                                <a className='w-full' href="https://www.linkedin.com/in/delyanlilov/" target="_blank" rel="noopener noreferrer"> Linkedin </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${card_container}`}>
                    <Image className='h-[70vh] w-full bg-cover object-bottom' src={elena_marinova} alt='Elena_Marinova_President' />
                    <div className={`${leadershipinfo}`}>
                        <div className='flex flex-col w-full items-center justify-center'>
                            <h5 className='text-[1.6rem] font-bold '>Elena Marinova</h5>
                            <p className='text-[1.2rem] font-medium '>President</p>
                        </div>

                        <div className={`hidden p-3 w-full flex-col ${styles.details}`}>
                            <p className='text-[1rem] font-medium p-1 px-3 mb-5 text-gray-300 lg:flex hidden'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque nostrum laudantium similique minima repellendus quod ducimus tenetur nesciunt eligendi omnis.
                            </p>
                            <button className='bg-gray-100 text-gray-800 py-3 text-[1.25rem] font-medium px-5 rounded-sm shadow-lg mt-3 '>
                                <a className='w-full' href="https://www.linkedin.com/in/emarinova/" target="_blank" rel="noopener noreferrer"> Linkedin </a>
                            </button>
                        </div>

                    </div>

                </div>
                <div className={`${card_container}`}>
                    <Image className='h-[70vh] w-full bg-cover ' src={ceoostanislav} alt='Stanislav_Ovcharov_COO' />
                    <div className={`${leadershipinfo}`}>
                        <div className='flex flex-col w-full items-center justify-center'>
                            <h5 className='text-[1.6rem] font-bold '>Stanislav Ovcharov</h5>
                            <p className='text-[1.3rem] font-medium '>CEOO</p>
                        </div>
                        <div className={`hidden p-3 w-full flex-col ${styles.details}`}>
                            <p className='text-[1rem] font-medium p-1 px-3 mb-5 text-gray-300 lg:flex hidden'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque nostrum laudantium similique minima repellendus quod ducimus tenetur nesciunt eligendi omnis.
                            </p>
                            <button className='bg-gray-100 text-gray-800 py-3 text-[1.25rem] font-medium px-5 rounded-sm shadow-lg mt-3 '>
                                <a className='w-full' href="https://www.linkedin.com/in/stanislav-ovcharov-37144a/" target="_blank" rel="noopener noreferrer"> Linkedin </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default LeaderShip