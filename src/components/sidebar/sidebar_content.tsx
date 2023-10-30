import React from 'react'
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import styles from '@/components/navbar/navbar.module.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
interface Props {
    toggleNavBar: boolean,
    collapse: boolean,
    setCollapse: Dispatch<SetStateAction<boolean>>;
}


function SidebarContent({toggleNavBar,collapse,setCollapse}: Props) {
    
    const community_links_responsive = 'mt-2 p-2 py-3 hover:bg-gray-100 hover:text-gray-700 px-2 hover:border-r-4 hover:border-r-[#3896ab]';
    const aside_style = 'h-[83vh] transition-all absolute top-[17vh] left-0 bg-gray-100 z-40 lg:hidden flex items-center justify-start';
    const community_collapse = 'w-full p-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-70 transition-all pl-8 border-b-[1px] border-gray-200 ';
    return (
         <aside className={`${toggleNavBar ? "w-[320px] " : "w-0"} ${aside_style} `}>
        <ul className={`w-full h-[83vh] overflow-y-auto text-lg font-semibold text-gray-700 ${toggleNavBar ? "flex flex-col items-center justify-start p-0" : "hidden"} ${styles.sidebar}`}>
          <Link className='w-full p-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-70 transition-all pl-8 border-b-[1px] border-gray-200 hover:border-r-4 hover:border-r-[#3896ab]' href={'/company'}>
            <li >COMPANY</li>
          </Link>
          <Link className='w-full p-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-70 transition-all pl-8 border-b-[1px] border-gray-200 hover:border-r-4 hover:border-r-[#3896ab]' href={'/#services'}>
            <li >SERVICES</li>
          </Link>
          <Link className='w-full p-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-70 transition-all pl-8 border-b-[1px] border-gray-200 hover:border-r-4 hover:border-r-[#3896ab]' href={'/our_clients'}>
            <li >CLIENTS</li>
          </Link>
          <li
            onClick={() => setCollapse(!collapse)}
            className={`${community_collapse}`}>
            <div className='w-full h-8 flex items-center justify-between'>
              COMMUNITY  <span className='w-8 h-8 text-gray-800 flex items-center justify-cenr text-xl'>
                {collapse ? <IoIosArrowUp /> : < IoIosArrowDown />} </span>
            </div>
            <ul className={`w-full  pl-2 bg-opacity-90  ${collapse ? "flex flex-col" : "hidden"}`}>
              <Link href={'/community/csr_impact'}>
                <li className={`${community_links_responsive} `}>CSR Impact</li>
              </Link>
              <Link href={'/community/conferences'}>
                <li className={`${community_links_responsive} `}>Conferences</li>
              </Link>
              <Link href={'/community/code_it'}>
                <li className={`${community_links_responsive} `}>CodeIT</li>
              </Link>
              <Link href={'/community/info_man'}>
                <li className={`${community_links_responsive}`}>InfoMan</li>
              </Link>
            </ul>
          </li>
          <Link className='w-full p-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-70 transition-all pl-8 border-b-[1px] border-gray-200 hover:border-r-4 hover:border-r-[#3896ab]' href={'/careers'}>
            <li >CARRERS</li>
          </Link>
          <Link className='w-full p-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-70 transition-all pl-8 border-b-[1px] border-gray-200 hover:border-r-4 hover:border-r-[#3896ab]' href={'/legal'}>
            <li >LEGAL</li>
          </Link>






        </ul>
      </aside>
    )
}

export default SidebarContent