"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css';
import musala_logo_white from '@/app/img/logo_white.svg';
import Musala_Logo_green from '@/app/img/Musala_Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import SidebarContent from '../sidebar/sidebar_content';
import PagesLinks from './pages_links';

function NavBar() {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [collapse, setCollapse] = useState(false);
  
  const changeNavBGColor = (): void => {
    return (window.scrollY >= 150) ? setScrolling(true) : setScrolling(false);
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavBGColor);
  }
  const showNavBar = (): void => {
    setToggleNavBar(!toggleNavBar);
    setCollapse(false);
  }
  const joinus_button = 'py-3 px-5 w-[120px] rounded-sm shadow-xl font-medium hover:bg-[#3896ab] hover:text-gray-100 transition-all ';

  return (
    <nav id='navbar' className={`${scrolling ? 'bg-opacity-95 text-gray-800' : 'lg:bg-opacity-10 bg-opacity-40'}  w-full h-[17vh]   bg-gray-100 flex items-center justify-between lg:px-[50px] px-5 fixed top-0  ${styles.navbar} z-20 py-2 text-gray-100 `}>

      <button
        type='button'
        onClick={showNavBar}
        className={`lg:hidden h-12 w-12 text-[2rem] flex items-center justify-center ${scrolling ? "text-gray-800" : "bg-gray-100 text-gray-800 rounded-full"}`}>
        {toggleNavBar ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </button>

      <div className='h-[100%] md:w-[140px] w-[120px]  '>
        <Link href={'/'} >
          {
            scrolling ? <Image className='w-full lg:h-[100%] h-[90%] scale-90 md:scale-100 lg:flex hidden' src={Musala_Logo_green} width={100} height={100} alt='Musala Soft Logo White' />
              :
              <Image className='w-full lg:h-[100%] h-[90%] scale-90 md:scale-100 lg:flex hidden' src={musala_logo_white} width={100} height={100} alt='Musala Soft Logo White' />
          }
          <Image className='w-full lg:h-[100%] h-[90%] scale-95 md:scale-100 flex lg:hidden' src={Musala_Logo_green} width={100} height={100} alt='Musala Soft Logo Green' />
        </Link>
      </div>

        <PagesLinks />
      <Link href={'/join_us'}>
        <button className={`${joinus_button} ${scrolling ? "bg-[#3896ab] text-gray-100" : "text-[#3896ab] bg-gray-100"}`}>
          JOIN US
        </button>
      </Link>
      <SidebarContent toggleNavBar={toggleNavBar} collapse={collapse} setCollapse={setCollapse} />

    </nav>
  )
}

export default NavBar
